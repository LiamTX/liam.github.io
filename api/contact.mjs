import { Resend } from "resend";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

const escapeHtml = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[char])
  );

const normalizeField = (value, maxLength) =>
  String(value || "")
    .trim()
    .slice(0, maxLength);

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const getRecipients = (value = "") =>
  value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = process.env;

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return res.status(500).json({ error: "Contact form is not configured" });
  }

  const name = normalizeField(req.body?.name, MAX_NAME_LENGTH);
  const email = normalizeField(req.body?.email, MAX_EMAIL_LENGTH);
  const message = normalizeField(req.body?.message, MAX_MESSAGE_LENGTH);
  const botField = normalizeField(req.body?.botField, 200);

  if (botField) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message || !isEmail(email)) {
    return res.status(400).json({ error: "Invalid contact form data" });
  }

  const recipients = getRecipients(CONTACT_TO_EMAIL);

  if (recipients.length === 0) {
    return res.status(500).json({ error: "Contact recipient is not configured" });
  }

  const escapedName = escapeHtml(name);
  const escapedEmail = escapeHtml(email);
  const escapedMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: recipients,
    replyTo: email,
    subject: `Novo contato pelo site - ${name}`,
    html: `
      <h2>Novo contato pelo site</h2>
      <p><strong>Nome:</strong> ${escapedName}</p>
      <p><strong>Email:</strong> ${escapedEmail}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${escapedMessage}</p>
    `,
    text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
  });

  if (error) {
    console.error("Resend contact email failed", error);
    return res.status(502).json({ error: "Failed to send contact email" });
  }

  return res.status(200).json({ ok: true });
}

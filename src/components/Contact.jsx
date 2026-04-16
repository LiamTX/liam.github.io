import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { contact } from "../data/mock";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Contact = () => {
  const [leftRef, leftVisible] = useIntersectionObserver();
  const [rightRef, rightVisible] = useIntersectionObserver();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            ref={leftRef}
            className={`fade-up ${leftVisible ? "visible" : ""}`}
          >
            <p className="text-xs uppercase tracking-widest text-cl-accent-glow font-medium">
              Contato
            </p>
            <h2 className="mt-3 font-satoshi font-extrabold text-3xl sm:text-4xl md:text-5xl text-cl-text">
              Vamos conversar sobre o seu cenário?
            </h2>
            <p className="mt-4 text-cl-text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Para propostas e projetos, use o formulário. Se preferir começar
              de forma mais rápida, fale no WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-cl-border bg-cl-bg-secondary px-5 py-3 text-sm font-medium text-cl-text hover:border-cl-accent/40 hover:text-cl-accent-glow transition-colors"
              >
                Falar no WhatsApp
                <MessageCircle size={16} />
              </a>
            </div>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cl-bg-elevated border border-cl-border text-cl-accent-glow group-hover:border-cl-accent/50 transition-colors">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cl-text-muted/70">
                    Email
                  </div>
                  <div className="text-sm text-cl-text group-hover:text-cl-accent-glow transition-colors">
                    {contact.email}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cl-bg-elevated border border-cl-border text-cl-accent-glow group-hover:border-cl-accent/50 transition-colors">
                  <Phone size={18} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cl-text-muted/70">
                    Telefone
                  </div>
                  <div className="text-sm text-cl-text group-hover:text-cl-accent-glow transition-colors">
                    {contact.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cl-bg-elevated border border-cl-border text-cl-accent-glow">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-cl-text-muted/70">
                    Localização
                  </div>
                  <div className="text-sm text-cl-text">{contact.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cl-border bg-cl-bg-secondary text-cl-text-muted hover:text-cl-text hover:border-cl-accent/40 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cl-border bg-cl-bg-secondary text-cl-text-muted hover:text-cl-text hover:border-cl-accent/40 transition-colors"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div
            ref={rightRef}
            className={`fade-up ${rightVisible ? "visible" : ""} rounded-xl border border-cl-border bg-cl-bg-secondary p-6 sm:p-8`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cl-success/15 text-cl-success">
                  <CheckCircle2 size={28} />
                </span>
                <h3 className="mt-5 font-satoshi font-bold text-xl text-cl-text">
                  Recebi sua mensagem.
                </h3>
                <p className="mt-2 text-sm text-cl-text-muted max-w-xs">
                  Vou responder no email informado com os próximos passos.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-cl-text mb-2"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Seu nome ou nome da empresa"
                    className="w-full rounded-md border border-cl-border bg-cl-bg-elevated px-3.5 py-2.5 text-sm text-cl-text placeholder:text-cl-text-muted/60 focus:outline-none focus:border-cl-accent focus:ring-1 focus:ring-cl-accent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-cl-text mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="voce@empresa.com"
                    className="w-full rounded-md border border-cl-border bg-cl-bg-elevated px-3.5 py-2.5 text-sm text-cl-text placeholder:text-cl-text-muted/60 focus:outline-none focus:border-cl-accent focus:ring-1 focus:ring-cl-accent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-cl-text mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Conta brevemente o problema, contexto e prazo desejado."
                    className="w-full rounded-md border border-cl-border bg-cl-bg-elevated px-3.5 py-2.5 text-sm text-cl-text placeholder:text-cl-text-muted/60 focus:outline-none focus:border-cl-accent focus:ring-1 focus:ring-cl-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-cl-accent px-5 py-3 text-sm font-medium text-white hover:bg-cl-accent-glow transition-colors duration-200"
                >
                  Enviar resumo do projeto
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

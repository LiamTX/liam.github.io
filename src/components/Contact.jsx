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
import SectionTag from "./ui/SectionTag";
import PillButton from "./ui/PillButton";

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
    <section id="contato" className="bg-cl-light-bg py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-cl-light-bg-soft px-6 py-16 sm:px-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div
              ref={leftRef}
              className={`fade-up ${leftVisible ? "visible" : ""}`}
            >
              <SectionTag>Contato</SectionTag>
              <h2 className="mt-4 font-satoshi font-extrabold uppercase text-3xl sm:text-4xl md:text-5xl text-cl-text-on-light leading-[1.05] tracking-tight">
                Vamos conversar sobre o seu cenário?
              </h2>
              <p className="mt-5 text-cl-text-on-light-muted text-base sm:text-lg leading-relaxed max-w-xl">
                Para propostas e projetos, use o formulário. Se preferir
                começar de forma mais rápida, fale no WhatsApp.
              </p>

              <div className="mt-8">
                <PillButton
                  href={contact.whatsappUrl}
                  variant="dark"
                  icon={MessageCircle}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Falar no WhatsApp
                </PillButton>
              </div>

              <div className="relative mt-10 overflow-hidden rounded-2xl bg-cl-dark-card border border-cl-dark-card-border p-6 sm:p-8">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-grid-pattern opacity-50"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-curves-decoration opacity-70"
                />
                <div className="relative space-y-5">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:border-white/30 transition-colors">
                      <Mail size={18} />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        Email
                      </div>
                      <div className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {contact.email}
                      </div>
                    </div>
                  </a>

                  <a
                    href={`tel:${contact.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-4 group"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white group-hover:border-white/30 transition-colors">
                      <Phone size={18} />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        Telefone
                      </div>
                      <div className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {contact.phone}
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white">
                      <MapPin size={18} />
                    </span>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                        Localização
                      </div>
                      <div className="text-sm text-white/90">
                        {contact.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-cl-text-on-light hover:border-black/40 transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-cl-text-on-light hover:border-black/40 transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
            </div>

            <div
              ref={rightRef}
              className={`fade-up ${rightVisible ? "visible" : ""} rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-[0_1px_2px_rgba(10,10,15,0.04)]`}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cl-success/15 text-cl-success">
                    <CheckCircle2 size={28} />
                  </span>
                  <h3 className="mt-5 font-satoshi font-bold text-xl text-cl-text-on-light">
                    Recebi sua mensagem.
                  </h3>
                  <p className="mt-2 text-sm text-cl-text-on-light-muted max-w-xs">
                    Vou responder no email informado com os próximos passos.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-cl-text-on-light mb-2"
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
                      className="w-full rounded-lg border border-black/10 bg-cl-light-bg px-3.5 py-2.5 text-sm text-cl-text-on-light placeholder:text-cl-text-on-light-muted/70 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-cl-text-on-light mb-2"
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
                      className="w-full rounded-lg border border-black/10 bg-cl-light-bg px-3.5 py-2.5 text-sm text-cl-text-on-light placeholder:text-cl-text-on-light-muted/70 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-cl-text-on-light mb-2"
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
                      className="w-full rounded-lg border border-black/10 bg-cl-light-bg px-3.5 py-2.5 text-sm text-cl-text-on-light placeholder:text-cl-text-on-light-muted/70 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                    />
                  </div>

                  <PillButton
                    type="submit"
                    variant="dark"
                    icon={Send}
                    className="w-full"
                  >
                    Enviar resumo do projeto
                  </PillButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

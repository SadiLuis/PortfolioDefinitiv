"use client";
import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const CONTACT_EMAIL = "sadiluisrueda.94@gmail.com";

export default function Contact() {
  const { ref } = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const subject = encodeURIComponent(`Nuevo mensaje de ${name}`);
    const body = encodeURIComponent(
      `Hola Sadi,\n\nMi nombre es ${name}.\nMi email es ${email}.\n\n${message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-surface relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <p className="section-number mb-3">05. Contact</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Trabajemos juntos
            <span className="text-accent">.</span>
          </h2>
          <p className="font-body text-foreground-dim mt-4 max-w-lg mx-auto">
            ¿Tenés un proyecto en mente? Estoy disponible para freelance, oportunidades de trabajo o simplemente para charlar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start reveal">
          {/* Info side */}
          <div>
            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: Phone,
                  label: "Teléfono",
                  value: "+54 343 536 3040",
                  href: "tel:+543435363040",
                },
                {
                  icon: MapPin,
                  label: "Ubicación",
                  value: "Buenos Aires, Argentina",
                  href: null,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl border border-[#1C2333] flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-200">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted mb-0.5 tracking-widest uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-body text-foreground hover:text-accent transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-body text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="border-t border-[#1C2333] pt-8">
              <p className="font-mono text-xs text-muted mb-4 tracking-widest uppercase">
                Social
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-[#1C2333] px-4 py-3 rounded-lg text-foreground-dim hover:border-accent hover:text-accent transition-all duration-200 font-mono text-sm"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="glass border border-[#1C2333] rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">Correo listo</h3>
                <p className="text-foreground-dim">
                  Se abrió tu cliente de correo con el mensaje prellenado.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs text-muted mb-2 tracking-widest uppercase">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-[#1C2333] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:border-accent/50 focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted mb-2 tracking-widest uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-background border border-[#1C2333] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:border-accent/50 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-muted mb-2 tracking-widest uppercase">
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-background border border-[#1C2333] rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted focus:border-accent/50 focus:outline-none transition-colors resize-none"
                    placeholder="Contame sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-background font-mono font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-accent-dim transition-colors duration-200 text-sm tracking-wider"
                >
                  <Send size={16} />
                  Enviar mensaje
                </button>
                <p className="font-body text-xs text-muted">
                  Este formulario abre tu app de correo usando mailto.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

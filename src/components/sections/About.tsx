"use client";
import { useReveal } from "@/hooks/useReveal";
import { Zap, Target, Users } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Técnico & Estratégico",
    desc: "Combino código sólido con visión de producto, certificado en Product Management por la UTN.",
  },
  {
    icon: Target,
    title: "UX-First",
    desc: "Cada decisión técnica parte del usuario: accesibilidad, rendimiento y fluidez de interacción.",
  },
  {
    icon: Users,
    title: "Comunicación empática",
    desc: "Traduzco necesidades de negocio en features concretos. Trabajo en equipo con inglés B2 certificado.",
  },
];

export default function About() {
  const { ref } = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-surface relative overflow-hidden"
    >
      {/* Decorative line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#1C2333] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div className="reveal">
            <p className="section-number mb-3">01. About</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
              Más que código,
              <br />
              <em className="text-gradient not-italic">una visión.</em>
            </h2>
            <div className="space-y-4 text-foreground-dim text-lg leading-relaxed">
              <p>
                Soy un desarrollador con más de un año de experiencia real en
                proyectos Fullstack y Mobile. Mi diferencial: entender el{" "}
                <span className="text-foreground font-medium">
                  "por qué" detrás de cada feature
                </span>
                , no solo el "cómo".
              </p>
              <p>
                Trabajé en productos de impacto real — desde apps móviles para
                logística internacional con{" "}
                <span className="text-foreground font-medium">Knauf</span>, hasta
                sistemas críticos de cobranza y verificación de identidad en{" "}
                <span className="text-foreground font-medium">CardCred</span>.
              </p>
              <p>
                Me certifico continuamente: Product Management en UTN, inglés B2
                (EFSET), siempre aprendiendo lo siguiente que el producto necesita.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: "2", label: "Empresas" },
                { value: "B2", label: "Inglés" },
                { value: "UTN", label: "Product Mgmt" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border border-[#1C2333] rounded-lg p-4 text-center hover:border-accent/40 transition-colors duration-300"
                >
                  <p className="font-display text-3xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars side */}
          <div className="space-y-4 reveal">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group flex gap-4 p-6 border border-[#1C2333] rounded-xl bg-background hover:border-accent/30 hover:bg-surface transition-all duration-300 hover-lift"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="font-body text-sm text-foreground-dim leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

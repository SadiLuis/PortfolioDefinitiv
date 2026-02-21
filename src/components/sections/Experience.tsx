"use client";
import { useReveal } from "@/hooks/useReveal";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "TDIL (Freelance para Knauf)",
    role: "Mobile Developer",
    period: "Jun 2025 — Oct 2025",
    current: false,
    description:
      "Colaboré en el desarrollo de la aplicación móvil interna para Knauf, optimizando la logística y el traslado de containers a nivel internacional.",
    achievements: [
      "Implementé funcionalidades nativas complejas: cámara, edición de capturas y acceso a almacenamiento para carga de pruebas logísticas en campo.",
      "Integré AWS S3 y Google Maps API para el seguimiento y almacenamiento de activos en tiempo real.",
      "Desarrollé un sistema de gestión de roles robusto con Redux, garantizando la seguridad según el perfil del operario.",
    ],
    stack: ["React Native", "TypeScript", "AWS S3", "Google Maps API", "Redux", "CSS"],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    company: "CardCred",
    role: "Fullstack Developer",
    period: "Ago 2024 — Ago 2025",
    current: false,
    description:
      "Trabajé en la mejora y migración crítica de sistemas internos y productos core de la compañía fintech.",
    achievements: [
      "Firma Electrónica: Desarrollé desde cero el sistema de verificación de identidad para entidades financieras, priorizando seguridad y UX fluida para reducir fricción en el onboarding.",
      "PayCard: Colaboré en la migración y optimización del sistema de cobranza interno — gestión de pagos, historial y métricas de desempeño para distintos roles.",
      "Landing Page: Refactoricé el sitio principal mejorando tiempos de carga y la conversión.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    accent: "from-accent to-orange-400",
  },
];

export default function Experience() {
  const { ref } = useReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-surface relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="section-number mb-3">03. Experience</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Donde lo apliqué
            <span className="text-accent">.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1C2333] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`reveal relative flex ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-accent z-10 mt-6" />

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 ${
                    i % 2 === 0 ? "md:mr-[calc(50%+2rem)] md:text-right" : "md:ml-[calc(50%+2rem)]"
                  } w-full md:max-w-lg glass border border-[#1C2333] rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover-lift group`}
                >
                  {/* Header */}
                  <div className={`flex items-start gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className={`shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${exp.accent} bg-opacity-20 flex items-center justify-center`}
                    >
                      <Briefcase size={16} className="text-background" />
                    </div>
                    <div className={i % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="font-display font-bold text-xl text-foreground">
                        {exp.company}
                      </h3>
                      <p className="font-mono text-sm text-accent">{exp.role}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div className={`flex items-center gap-1.5 text-muted text-xs font-mono mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <Calendar size={12} />
                    {exp.period}
                  </div>

                  {/* Description */}
                  <p className={`text-foreground-dim text-sm leading-relaxed mb-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((a, j) => (
                      <li
                        key={j}
                        className={`flex items-start gap-2 text-sm text-foreground-dim ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
                      >
                        <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-[#1C2333] text-foreground-dim px-2.5 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20 reveal">
          <div className="border border-[#1C2333] rounded-xl p-6 max-w-xl mx-auto text-center hover:border-accent/30 transition-colors duration-300">
            <p className="font-mono text-xs text-muted mb-2 tracking-widest uppercase">Educación</p>
            <h3 className="font-display text-2xl font-bold text-foreground mb-1">
              Certificación en Product Management
            </h3>
            <p className="font-mono text-accent text-sm">UTN — Universidad Tecnológica Nacional</p>
          </div>
        </div>
      </div>
    </section>
  );
}

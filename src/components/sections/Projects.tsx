"use client";
import { useReveal } from "@/hooks/useReveal";
import { link } from "fs";
import { ExternalLink, Github, Smartphone, Globe, CreditCard } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Knauf Logistics App",
    subtitle: "React Native — Freelance",
    description:
      "Aplicación móvil interna para optimizar la logística y traslado de containers a nivel internacional. Incluye seguimiento en tiempo real, gestión de roles y carga de pruebas multimedia.",
    tags: ["React Native", "TypeScript", "AWS S3", "Google Maps API", "Redux"],
    icon: Smartphone,
    accentColor: "from-blue-600 to-cyan-500",
    gradient: "from-blue-500/10 to-cyan-500/5",
    badge: "Producción",
    link: "https://knauf.com/es-AR/knauf",
  },
  {
    number: "02",
    title: "Firma Electrónica",
    subtitle: "React.js — CardCred",
    description:
      "Sistema de verificación de identidad para entidades financieras. Diseñado para reducir fricción en el onboarding con máxima seguridad y flujo UX optimizado.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    icon: CreditCard,
    accentColor: "from-accent to-orange-500",
    gradient: "from-accent/10 to-orange-500/5",
    badge: "Fintech",
    link: "https://www.cardcred.com.ar/",
  },
  {
    number: "03",
    title: "PayCard System",
    subtitle: "Fullstack — CardCred",
    description:
      "Sistema de cobranza interno para gestión de pagos, historial de transacciones y métricas de desempeño diferenciadas por rol de usuario.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    icon: Globe,
    accentColor: "from-purple-600 to-pink-500",
    gradient: "from-purple-500/10 to-pink-500/5",
    badge: "Interno",
    link: "https://www.cardcred.com.ar/",
  },
];

export default function Projects() {
  const { ref } = useReveal();

  return (
    <section
      id="projects"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-28 bg-background relative"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <p className="section-number mb-3">04. Projects</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold">
            Lo que construí
            <span className="text-accent">.</span>
          </h2>
          <p className="font-body text-foreground-dim mt-4 max-w-lg mx-auto">
            Proyectos reales, con impacto real. Cada uno con sus desafíos técnicos y de producto.
          </p>
        </div>

        <div className="space-y-6 reveal">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <div
                key={project.number}
                className="group relative border border-[#1C2333] rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover-lift"
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative p-8 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div className="flex items-start gap-6">
                    {/* Number + Icon */}
                    <div className="shrink-0">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.accentColor} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs text-muted">
                          {project.number}
                        </span>
                        <span className="font-mono text-xs bg-[#1C2333] text-foreground-dim px-2 py-0.5 rounded-full">
                          {project.badge}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-1">
                        {project.title}
                      </h3>
                      <p className="font-mono text-sm text-accent mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-foreground-dim leading-relaxed max-w-2xl">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-xs border border-[#1C2333] text-foreground-dim px-3 py-1 rounded-full group-hover:border-accent/20 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-[#1C2333] group-hover:border-accent group-hover:text-accent text-muted transition-all duration-300">
                    <ExternalLink size={18} />
                    {/* Clickable Link */}
                      <a href={project.link} className="absolute inset-0" aria-label={`Ver proyecto ${project.title}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 reveal">
          <p className="text-foreground-dim font-body mb-4">
            ¿Queres ver más o hablar sobre un proyecto?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-accent text-accent font-mono text-sm px-6 py-3 rounded-sm hover:bg-accent hover:text-background transition-all duration-200"
          >
            Hablemos
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

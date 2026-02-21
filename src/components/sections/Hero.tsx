"use client";
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const ROLES = [
  "Frontend Developer",
  "Mobile Developer",
  "Fullstack Engineer",
  "Product Thinker",
  "UX Enthusiast",
];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      if (!roleRef.current) return;
      const current = ROLES[roleIndex];
      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(type, 2000);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      setTimeout(type, deleting ? 60 : 90);
    };

    const timer = setTimeout(type, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 border border-[#1C2333] bg-surface/60 px-4 py-2 rounded-full text-sm font-mono text-foreground-dim mb-8"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
              Disponible para proyectos
            </div>

            {/* Greeting */}
            <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3 opacity-0 animate-fade-up [animation-delay:200ms] [animation-fill-mode:forwards]">
              Hola, soy
            </p>

            {/* Name */}
            <h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-2 opacity-0 animate-fade-up [animation-delay:300ms] [animation-fill-mode:forwards]"
            >
              Sadi
              <br />
              <span className="text-gradient">Rueda</span>
              <span className="text-accent">.</span>
            </h1>

            {/* Role typewriter */}
            <div className="flex items-center gap-3 mt-4 mb-6 opacity-0 animate-fade-up [animation-delay:500ms] [animation-fill-mode:forwards]">
              <span className="font-body text-xl text-foreground-dim">
                <span ref={roleRef} className="text-foreground font-medium" />
                <span className="text-accent animate-pulse">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="font-body text-foreground-dim text-lg leading-relaxed max-w-lg mb-10 opacity-0 animate-fade-up [animation-delay:600ms] [animation-fill-mode:forwards]">
              Construyo productos digitales con visión estratégica. Especializado
              en{" "}
              <span className="text-foreground font-medium">React.js</span>,{" "}
              <span className="text-foreground font-medium">Next.js</span> y{" "}
              <span className="text-foreground font-medium">React Native</span>{" "}
              — donde el código y la UX se fusionan.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-fade-up [animation-delay:700ms] [animation-fill-mode:forwards]">
              <a
                href="#projects"
                className="bg-accent text-background font-mono font-medium px-6 py-3 text-sm tracking-wider hover:bg-accent-dim transition-colors duration-200 rounded-sm"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="border border-[#1C2333] text-foreground-dim hover:text-foreground hover:border-foreground-dim font-mono text-sm px-6 py-3 transition-all duration-200 rounded-sm"
              >
                Contactarme
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 mt-10 opacity-0 animate-fade-up [animation-delay:800ms] [animation-fill-mode:forwards]">
              {[
                {
                  icon: Github,
                  href: "https://github.com/",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:sadiluisrueda.94@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-accent transition-colors duration-200"
                >
                  <Icon size={20} />
                </a>
              ))}
              <div className="h-px w-16 bg-[#1C2333]" />
              <span className="font-mono text-xs text-muted">
                sadiluisrueda.94@gmail.com
              </span>
            </div>
          </div>

          {/* Right — decorative code card */}
          <div className="hidden lg:flex justify-end opacity-0 animate-slide-left [animation-delay:600ms] [animation-fill-mode:forwards]">
            <div className="relative w-[440px]">
              {/* Floating glow behind card */}
              <div className="absolute inset-0 bg-accent/10 blur-2xl rounded-2xl" />

              {/* Code card */}
              <div className="relative glass rounded-xl border border-[#1C2333] overflow-hidden animate-float">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1C2333] bg-surface/50">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <span className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="ml-4 font-mono text-xs text-muted">
                    sadi.config.ts
                  </span>
                </div>
                {/* Code content */}
                <div className="p-6 font-mono text-sm leading-loose">
                  <p>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-foreground-dim">=</span>{" "}
                    <span className="text-foreground-dim">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">name</span>
                    <span className="text-foreground-dim">: </span>
                    <span className="text-green-400">&apos;Sadi Rueda&apos;</span>
                    <span className="text-foreground-dim">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">location</span>
                    <span className="text-foreground-dim">: </span>
                    <span className="text-green-400">
                      &apos;Buenos Aires, AR&apos;
                    </span>
                    <span className="text-foreground-dim">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">stack</span>
                    <span className="text-foreground-dim">: [</span>
                  </p>
                  {[
                    "Next.js",
                    "React Native",
                    "TypeScript",
                    "Node.js",
                  ].map((tech) => (
                    <p key={tech} className="pl-8">
                      <span className="text-green-400">&apos;{tech}&apos;</span>
                      <span className="text-foreground-dim">,</span>
                    </p>
                  ))}
                  <p className="pl-4">
                    <span className="text-foreground-dim">],</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">focus</span>
                    <span className="text-foreground-dim">: </span>
                    <span className="text-green-400">&apos;UX & Product&apos;</span>
                    <span className="text-foreground-dim">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="text-accent">available</span>
                    <span className="text-foreground-dim">: </span>
                    <span className="text-blue-400">true</span>
                  </p>
                  <p>
                    <span className="text-foreground-dim">{"}"}</span>
                  </p>
                </div>
              </div>

              {/* Stats floating cards */}
              <div className="absolute -bottom-6 -left-10 glass border border-[#1C2333] rounded-lg px-4 py-3 text-center animate-float [animation-delay:1s]">
                <p className="font-display text-2xl font-bold text-accent">1+</p>
                <p className="font-mono text-xs text-muted mt-0.5">
                  Años exp.
                </p>
              </div>
              <div className="absolute -top-6 -right-6 glass border border-[#1C2333] rounded-lg px-4 py-3 text-center animate-float [animation-delay:2s]">
                <p className="font-display text-2xl font-bold text-accent">3+</p>
                <p className="font-mono text-xs text-muted mt-0.5">Proyectos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce">
          <span className="font-mono text-xs tracking-widest">SCROLL</span>
          <ArrowDown size={14} />
        </div>
      </div>
    </section>
  );
}

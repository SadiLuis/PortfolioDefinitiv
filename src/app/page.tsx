import Link from "next/link";
import { Nav } from "@/components/nav";
import { CaseCard } from "@/components/case-card";
import { MagneticMark, Reveal } from "@/components/motion";
import { CopyEmail } from "@/components/copy-email";
import { caseStudies, experience, profile } from "@/lib/content";

const impact = [
  { value: "+30%", label: "eficiencia en el sistema de cobranzas de CARDCRED" },
  { value: "+20%", label: "velocidad de carga de la landing principal" },
  { value: "2", label: "países usando la app de logística de Knauf" },
  {
    value: "0 → 1",
    label: "sistema de firma electrónica construido desde cero",
  },
];

export default function Home() {
  return (
    <main className="page">
      <Nav />
      <section className="hero">
        <div className="container hero-content">
          <span className="kicker">{profile.shortName} · {profile.role}</span>
          <h1>
            Desarrollo aplicaciones <em>web y móviles.</em>
          </h1>
          <p className="hero-sub">
            Trabajo con React, Next.js y React Native. Participé en proyectos de
            fintech y logística, desarrollando funcionalidades y mejorando sistemas
            existentes. Me gusta entender qué necesita resolver el equipo y
            participar en las decisiones, además de escribir el código.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#work">Ver proyectos <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="#contact">Hablemos <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-footer">
            <div className="hero-meta">
              <div>
                <strong>Stack</strong>React · Next.js · Node.js
              </div>
              <div>
                <strong>Mobile</strong>React Native
              </div>
              <div>
                <strong>Ahora</strong>Busco sumarme a un equipo como
                <br />Frontend o Full Stack Developer.
              </div>
            </div>
            <a className="circle-cta" href="#contact">
              Hablemos
              <br />↓
            </a>
          </div>
        </div>
        <MagneticMark />
      </section>

      <section className="impact" aria-label="Resultados">
        <div className="container impact-grid">
          {impact.map((item, index) => (
            <Reveal key={item.label} delay={index * 0.06}>
              <div className="impact-item">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="work" className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              Proyectos
              <br />
              <em>en los que trabajé.</em>
            </h2>
            <p className="section-note">
              Qué necesitaba cada proyecto, qué desarrollé y cómo se usa hoy.
            </p>
          </div>
          <div className="cases">
            {caseStudies.map((item, index) => (
              <CaseCard key={item.slug} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container thinking">
          <Reveal>
            <span className="eyebrow">Mi forma de trabajar</span>
            <h2>
              Cómo encaro
              <br />
              <em>cada proyecto.</em>
            </h2>
          </Reveal>
          <div className="principles">
            <Reveal>
              <div className="principle">
                <b>01</b>
                <div>
                  <h3>Definir los accesos</h3>
                  <p>
                    En los proyectos de fintech y logística trabajé con distintos
                    roles. Definir qué puede ver y hacer cada persona es parte
                    de la planificación de cada funcionalidad.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="principle">
                <b>02</b>
                <div>
                  <h3>Facilitar las tareas de todos los días</h3>
                  <p>
                    Me interesa cómo se usa una pantalla: qué datos hay que
                    cargar, qué pasos se repiten y dónde aparecen dudas.
                    A partir de eso, busco simplificarla.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="principle">
                <b>03</b>
                <div>
                  <h3>Mejorar lo que existe</h3>
                  <p>
                    También trabajé en sistemas que ya estaban en uso.
                    Antes de cambiar algo, reviso cómo funciona y qué otras
                    partes dependen de eso para organizar las mejoras.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container experience">
          <Reveal>
            <span className="eyebrow">Experiencia</span>
            <h2>
              Dónde
              <br />
              <em>trabajé.</em>
            </h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job) => (
              <Reveal key={job.company}>
                <div className="timeline-row">
                  <span>{job.period}</span>
                  <strong>
                    {job.company}
                    <br />
                    <small>{job.role}</small>
                  </strong>
                  <span>{job.summary}</span>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <Link className="text-link timeline-more" href="/about">
                Ver perfil completo <span>↗</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <span className="kicker">¿Tenés un proyecto o una posición?</span>
          <h2>
            Trabajemos
            <br />
            <em>juntos.</em>
          </h2>
          <div className="contact-bottom">
            <p>{profile.availability}</p>
            <div className="contact-links">
              <CopyEmail email={profile.email} />
              <a className="contact-link" href={`mailto:${profile.email}`}>
                Abrir en mi correo ↗
              </a>
              <a
                className="contact-link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer container">
        <span>© 2026 {profile.name}</span>
        <span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>{" "}
          ·{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>{" "}
          · <Link href="/about">Sobre mí</Link>
        </span>
      </footer>
    </main>
  );
}

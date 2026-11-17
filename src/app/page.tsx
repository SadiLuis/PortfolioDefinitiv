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
  { value: "0 → 1", label: "sistema de firma electrónica construido desde cero" },
];

export default function Home() {
  return (
    <main className="page">
      <Nav />
      <section className="hero">
        <div className="container hero-content">
          <span className="kicker">{profile.role} · Buenos Aires</span>
          <h1>
            Mi código firma, cobra <em>y cruza fronteras.</em>
          </h1>
          <p className="hero-sub">
            Soy {profile.shortName}. Construí la firma electrónica y el sistema de cobranzas de una fintech, y una app que sigue containers entre Argentina y Colombia. Hoy busco el próximo producto que valga la pena llevar a producción.
          </p>
          <div className="hero-footer">
            <div className="hero-meta">
              <div>
                <strong>Stack</strong>React · Next.js · Node.js
              </div>
              <div>
                <strong>Mobile</strong>React Native
              </div>
              <div>
                <strong>Ahora</strong>Abierto a oportunidades
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
              <em>reales.</em>
            </h2>
            <p className="section-note">
              Cuatro productos en producción: logística internacional, identidad digital, cobranzas y el sitio de una fintech.
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
            <span className="eyebrow">Qué aporto</span>
            <h2>
              Entiendo el
              <br />
              <em>negocio.</em>
            </h2>
          </Reveal>
          <div className="principles">
            <Reveal>
              <div className="principle">
                <b>01</b>
                <div>
                  <h3>Seguridad primero</h3>
                  <p>En fintech y en apps con roles, la seguridad no es un extra: es parte del diseño desde el primer día.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="principle">
                <b>02</b>
                <div>
                  <h3>UX sin fricción</h3>
                  <p>Cada paso de más en un onboarding o en una carga en campo cuesta usuarios y tiempo. Busco el flujo más corto que funcione.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="principle">
                <b>03</b>
                <div>
                  <h3>Mejorar lo que existe</h3>
                  <p>Me siento cómodo tomando un producto existente para migrarlo, optimizarlo y hacerlo más rápido, sin frenar la operación.</p>
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
              Dónde lo
              <br />
              <em>apliqué.</em>
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
              <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn ↗
              </a>
              <a className="contact-link" href={profile.github} target="_blank" rel="noopener noreferrer">
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

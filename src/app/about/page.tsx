import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Reveal } from "@/components/motion";
import { CopyEmail } from "@/components/copy-email";
import { education, experience, languages, profile, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sobre mí — Sadi Rueda",
  description: "Experiencia, formación y stack de Sadi Luis Rueda, Full Stack Developer.",
};

export default function About() {
  return (
    <main className="page">
      <Nav />
      <section className="about-hero">
        <div className="container">
          <span className="kicker">Sobre mí</span>
          <h1>
            Código sólido,
            <br />
            <em>visión de producto.</em>
          </h1>
          <div className="about-copy">
            <p>
              Soy {profile.name}, {profile.role} con foco en frontend y experiencia construyendo productos reales para fintech y logística.
            </p>
            <p>
              En CARDCRED desarrollé desde cero un sistema de verificación de identidad y firma electrónica, y participé en la migración del sistema de cobranzas core. En Knauf construí funcionalidades de la app móvil interna para el seguimiento internacional de containers.
            </p>
            <p>
              Entiendo el negocio detrás del código: priorizo la seguridad, una UX sin fricción y el rendimiento. Hoy curso Ingeniería Informática en la Universidad Nacional del Litoral.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container experience">
          <Reveal>
            <span className="eyebrow">Experiencia</span>
            <h2>
              El camino
              <br />
              <em>hasta hoy.</em>
            </h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job) => (
              <div className="timeline-row" key={job.company}>
                <span>
                  {job.period}
                  <br />
                  {job.mode}
                </span>
                <strong>
                  {job.company}
                  <br />
                  <small>{job.role}</small>
                </strong>
                <span>{job.summary}</span>
              </div>
            ))}
            <div className="timeline-row">
              <span>{education.period}</span>
              <strong>
                {education.school}
                <br />
                <small>{education.degree}</small>
              </strong>
              <span>Formación de grado en curso, en paralelo al trabajo en productos reales.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              Mi
              <br />
              <em>stack.</em>
            </h2>
            <p className="section-note">
              Herramientas con las que llevo productos del diseño al deploy, en web y mobile.
            </p>
          </div>
          <div className="skill-groups">
            {skills.map(({ group, items }) => (
              <Reveal key={group}>
                <div className="skill-group">
                  <span className="eyebrow">{group}</span>
                  <div className="stack">
                    {items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className="skill-group">
                <span className="eyebrow">Idiomas</span>
                <div className="stack">
                  {languages.map((lang) => (
                    <span key={lang.name}>
                      {lang.name} · {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <span className="kicker">Próximo capítulo</span>
          <h2>
            Construyamos
            <br />
            <em>algo.</em>
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
    </main>
  );
}

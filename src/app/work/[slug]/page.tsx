import { notFound } from "next/navigation";
import Link from "next/link";
import { ViewTransition } from "react";
import { Nav } from "@/components/nav";
import { BrowserShot } from "@/components/browser-shot";
import { CopyEmail } from "@/components/copy-email";
import type { Metadata } from "next";
import { caseStudies, profile } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  return item ? { title: `${item.title} — Sadi Rueda`, description: item.summary } : {};
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = caseStudies.find((caseStudy) => caseStudy.slug === slug);
  if (!item) notFound();
  return (
    <main className="page">
      <Nav />
      <ViewTransition default="none" enter="page-enter" exit="page-exit">
      <section className="detail-hero">
        <div className="container">
          <Link className="back-link" href="/#work" transitionTypes={["slide-out"]}>
            ← Volver a proyectos
          </Link>
          <span className="eyebrow" style={{ display: "block", marginTop: 70 }}>
            {item.eyebrow}
          </span>
          <h1>{item.title}</h1>
          <p className="hero-sub" style={{ marginLeft: 0 }}>
            {item.summary}
          </p>
          {item.links.length > 0 && (
            <div className="detail-links">
              {item.links.map((link) => (
                <a key={link.href} className="pill-link" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label} ↗
                </a>
              ))}
            </div>
          )}
          <ViewTransition name={`case-${item.slug}`} share="morph" default="none">
          <div className={`detail-art ${item.cover}`}>
            <span className="art-label">{item.eyebrow} · {item.period}</span>
            <span className="art-grid" />
            {item.images[0] && (
              <div className="detail-shot">
                <BrowserShot image={item.images[0]} url={item.links[0]?.href} sizes="(max-width: 760px) 92vw, 1000px" eager />
              </div>
            )}
          </div>
          </ViewTransition>
          {item.images.length > 0 && (
            <div className="gallery">
              {item.images.map((image, index) => (
                <figure key={image.src}>
                  {index > 0 && <BrowserShot image={image} url={item.links[index]?.href ?? item.links[0]?.href} sizes="(max-width: 760px) 92vw, 1160px" />}
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
          {item.metrics.length > 0 && (
            <div className="detail-metrics">
              {item.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          )}
          <div className="detail-grid">
            <div>
              <h2>Contexto</h2>
              <p>{item.context}</p>
              <h2>Rol</h2>
              <p>
                {item.role}
                <br />
                {item.period}
              </p>
              <h2>Stack</h2>
              <p>{item.stack.join(" · ")}</p>
            </div>
            <div>
              <h2>El problema</h2>
              <p>{item.problem}</p>
              <h2>Qué hice</h2>
              <ul>
                {item.approach.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <h2>Decisiones clave</h2>
              <ul>
                {item.decisions.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              {item.outcome && (
                <>
                  <h2>Resultado</h2>
                  <p>{item.outcome}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      </ViewTransition>
      <section className="contact" id="contact">
        <div className="container">
          <span className="kicker">¿Tenés un desafío parecido?</span>
          <h2>
            Hablemos
            <br />
            <em>de tu producto.</em>
          </h2>
          <div className="contact-links">
            <CopyEmail email={profile.email} />
            <a className="contact-link" href={`mailto:${profile.email}`}>
              Abrir en mi correo ↗
            </a>
            <a className="contact-link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

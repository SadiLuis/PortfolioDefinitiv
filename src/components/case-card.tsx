import Link from "next/link";
import { ViewTransition } from "react";
import type { CaseStudy } from "@/lib/content";
import { BrowserShot } from "./browser-shot";
import { Reveal } from "./motion";

export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  const cover = item.images[0];
  return (
    <Reveal delay={index * 0.08}>
      <Link href={`/work/${item.slug}`} className={`case-card ${item.cover}`} transitionTypes={["slide-in"]}>
        <ViewTransition name={`case-${item.slug}`} share="morph" default="none">
          <div className="case-art">
            <span className="art-label">0{index + 1}</span>
            <span className="art-grid" />
            {cover && (
              <div className="case-shot">
                <BrowserShot image={cover} url={item.links[0]?.href} sizes="(max-width: 760px) 90vw, 520px" />
              </div>
            )}
          </div>
        </ViewTransition>
        <div className="case-info">
          <span className="eyebrow">{item.eyebrow}</span>
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <div className="case-tags">
            {item.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <span className="text-link">
            Ver caso <span>↗</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

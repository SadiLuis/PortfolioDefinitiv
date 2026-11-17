import Link from "next/link";
import { ViewTransition } from "react";
import type { CaseStudy } from "@/lib/content";
import { Reveal } from "./motion";

export function CaseCard({ item, index }: { item: CaseStudy; index: number }) {
  return <Reveal delay={index * 0.08}><Link href={`/work/${item.slug}`} className={`case-card ${item.cover}`} transitionTypes={["slide-in"]}><ViewTransition name={`case-${item.slug}`} share="morph" default="none"><div className="case-art"><span className="art-label">0{index + 1}</span><span className="art-orbit" /><span className="art-grid" /></div></ViewTransition><div className="case-info"><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3><p>{item.summary}</p><div className="case-tags">{item.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}</div><span className="text-link">Ver caso <span>↗</span></span></div></Link></Reveal>;
}

import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://portfolio-definitiv.vercel.app"; return [{ url: base, lastModified: new Date() }, { url: `${base}/about`, lastModified: new Date() }, ...caseStudies.map(({ slug }) => ({ url: `${base}/work/${slug}`, lastModified: new Date() }))]; }

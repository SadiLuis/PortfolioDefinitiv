import Image from "next/image";
import type { CaseStudy } from "@/lib/content";

type Shot = CaseStudy["images"][number];

/** Captura enmarcada en una ventana de navegador minimalista. */
export function BrowserShot({ image, url, sizes, eager = false }: { image: Shot; url?: string; sizes: string; eager?: boolean }) {
  const host = url ? new URL(url).host.replace(/^www\./, "") : "";
  return (
    <div className="browser-shot">
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        {host && <span className="browser-url">{host}</span>}
      </div>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={sizes}
        loading={eager ? "eager" : "lazy"}
      />
    </div>
  );
}

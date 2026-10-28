import Link from "next/link";
import { site, telHref } from "@/content/site";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="phero">
      <div className="container">
        <p className="eyebrow" data-intro>{eyebrow}</p>
        <h1 data-intro>{title}</h1>
        {children && <p className="phero__lead" data-intro>{children}</p>}
        <svg className="stitch" viewBox="0 0 1000 8" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="4" x2="1000" y2="4" className="stitch__line" />
        </svg>
      </div>
    </section>
  );
}

export function CallBand({ text = "Questions, or ready to be measured?" }: { text?: string }) {
  return (
    <section className="band">
      <div className="container band__in">
        <h2 data-reveal>{text}</h2>
        <div className="band__cta" data-reveal>
          <a className="btn btn--light" data-magnet href={telHref(site.phone)}>Call {site.phone}</a>
          <Link className="btn btn--ghost" data-magnet href="/contact/">Hours and directions</Link>
        </div>
      </div>
    </section>
  );
}

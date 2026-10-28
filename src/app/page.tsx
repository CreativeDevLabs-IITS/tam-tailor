import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CallBand } from "@/components/ui";
import { fabrics, intro, orderSteps, services, site, telHref } from "@/content/site";
import { OpenNow } from "@/components/OpenNow";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow" data-intro>Winnipeg, Manitoba</p>
            <h1 data-intro>
              Look your best in clothing made <em>only for you.</em>
            </h1>
            <p className="hero__lead" data-intro>{intro}</p>
            <div className="hero__cta" data-intro>
              <Link className="btn" data-magnet href="/custom-clothing/">See custom clothing</Link>
              <a className="btn btn--ghost" data-magnet href={telHref(site.phone)}>Call {site.phone}</a>
            </div>
            <OpenNow className="hero__open" />
          </div>
          <figure className="hero__photo" data-intro>
            <div className="hero__frame">
              <Image src="/images/shop.jpg" alt="The tailor at Tam Custom Tailor, standing in the shop beside shelves of fabric" width={303} height={202} priority />
            </div>
            <svg className="hero__thread" viewBox="0 0 300 120" aria-hidden="true">
              <path className="stitch-path" d="M4 110 C 60 10, 120 120, 170 60 S 260 10, 296 40" />
            </svg>
            <figcaption>Choose from swatch books of wool, silk, denim and more.</figcaption>
          </figure>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <ul key={k}>
              {fabrics.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section__head" data-reveal>
            <p className="eyebrow">What we make and mend</p>
            <h2>High quality services at <em>moderate prices.</em></h2>
          </div>
          <ol className="pattern">
            {services.map((s, i) => (
              <li key={s.title} data-reveal>
                <span className="pattern__n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="pattern__more" data-reveal>
            We also offer skilled fur restyling and repairs to leather garments.
          </p>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className="section__head" data-reveal>
            <p className="eyebrow">How an order works</p>
            <h2>From swatch book to <em>finished garment.</em></h2>
          </div>
          <ol className="steps">
            {orderSteps.map((s, i) => (
              <li key={s.title} data-reveal>
                <span className="steps__n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="adaptive">
        <div className="container adaptive__in">
          <div data-reveal>
            <p className="eyebrow eyebrow--light">New</p>
            <h2>Tam Custom Tailor is now offering <em>adaptive clothing.</em></h2>
          </div>
          <div data-reveal>
            <p>Comfortable, stylish clothing with snaps, zippers and easy openings, made around the way you dress.</p>
            <Link className="btn btn--light" data-magnet href="/adaptive-clothing/">Learn about adaptive clothing</Link>
          </div>
        </div>
      </section>

      <CallBand text="Would you like any additional information? Call or email us." />
    </>
  );
}

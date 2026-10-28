import type { Metadata } from "next";
import { CallBand, PageHero } from "@/components/ui";
import { customDesign, customSuits, fabrics } from "@/content/site";

export const metadata: Metadata = {
  title: "Custom Clothing",
  description: "Custom-made suits and shirts for men and women, plus custom-designed dresses, bridal gowns, costumes and uniforms, made in Winnipeg.",
  alternates: { canonical: "/custom-clothing/" },
};

export default function CustomClothing() {
  return (
    <>
      <PageHero eyebrow="Custom clothing" title={<>A wardrobe <em>a cut above retail.</em></>}>
        Are you hard to fit? At Tam Custom Tailor, you can have a high-quality garment designed and crafted just for you, in your choice of fabric, style and colour.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div data-reveal>
            <h2>{customSuits.title}</h2>
            {customSuits.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <aside className="swatches" data-reveal aria-label="Fabrics">
            <h3>In our swatch books</h3>
            <ul>
              {fabrics.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="note">{customSuits.travel}</p>
          </aside>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div data-reveal>
            <h2>{customDesign.title}</h2>
            <p>{customDesign.text}</p>
          </div>
          <div data-reveal>
            <p className="lead">{customDesign.lead}</p>
            <ul className="ticks">
              {customDesign.garments.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CallBand />
    </>
  );
}

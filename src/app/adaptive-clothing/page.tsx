import type { Metadata } from "next";
import { CallBand, PageHero } from "@/components/ui";
import { adaptive } from "@/content/site";

export const metadata: Metadata = {
  title: "Adaptive Clothing",
  description: "Custom adaptive clothing in Winnipeg: snaps, zippers and front, side and rear openings for all ages, with comfort and style.",
  alternates: { canonical: "/adaptive-clothing/" },
};

export default function Adaptive() {
  return (
    <>
      <PageHero eyebrow="Adaptive clothing" title={<>Dressing that works <em>the way you do.</em></>}>
        {adaptive.lead}
      </PageHero>
      <section className="section">
        <div className="container">
          <ul className="cards">
            {adaptive.points.map((p, i) => (
              <li key={p} data-reveal>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CallBand text="If you have any questions, please contact us." />
    </>
  );
}

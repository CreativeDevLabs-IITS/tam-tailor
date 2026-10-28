import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { OpenNow } from "@/components/OpenNow";
import { hours, mapsHref, site, telHref } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tam Custom Tailor, 802 Ellice Avenue, Winnipeg, MB R3G 0B9. Phone 204-775-1160. Open Monday to Saturday, after hours by appointment.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact us" title={<>Come in for a <em>fitting.</em></>}>
        Drop by the shop, call, or send us an email.
      </PageHero>
      <section className="section">
        <div className="container contact">
          <div data-reveal>
            <h2>Location</h2>
            <address>
              {site.street}
              <br />
              {site.city}, {site.region} {site.postal}
              <br />
              Canada
            </address>
            <p>
              <a className="btn" href={mapsHref} target="_blank" rel="noopener noreferrer">Get directions</a>
            </p>
            <h2>Phone and email</h2>
            <p>
              <a className="big" href={telHref(site.phone)}>{site.phone}</a>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div data-reveal>
            <h2>Hours of operation</h2>
            <OpenNow />
            <table className="hours">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day}>
                    <th scope="row">{h.day}</th>
                    <td>{h.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="note">After hours by appointment only.</p>
          </div>
        </div>
      </section>
    </>
  );
}

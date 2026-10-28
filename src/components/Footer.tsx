import Image from "next/image";
import Link from "next/link";
import { mapsHref, nav, site, telHref } from "@/content/site";
import { OpenNow } from "./OpenNow";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Image src="/images/logo-light.png" alt="Tam Custom Tailor" width={766} height={246} className="footer__logo" />
          <p className="footer__tag">Custom clothing, alterations and adaptive wear in Winnipeg.</p>
        </div>
        <div>
          <h2>Visit</h2>
          <address>
            <a href={mapsHref} target="_blank" rel="noopener noreferrer">
              {site.street}
              <br />
              {site.city}, {site.region} {site.postal}
            </a>
          </address>
          <OpenNow />
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            <a href={telHref(site.phone)}>{site.phone}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
        <nav aria-label="Footer">
          <h2>Pages</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="footer__legal container">© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
    </footer>
  );
}

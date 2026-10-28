"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site, telHref } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  // The menu counts as open only on the page it was opened on, so it closes by itself after navigating.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="header">
      <div className="header__bar container">
        <Link href="/" className="header__logo" aria-label="Tam Custom Tailor, home">
          <Image src="/images/logo.png" alt="Tam Custom Tailor" width={766} height={246} priority />
        </Link>
        <nav className="nav" aria-label="Main">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={isActive(n.href) ? "is-active" : ""} aria-current={isActive(n.href) ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header__tel" href={telHref(site.phone)}>
          {site.phone}
        </a>
        <button className="burger" aria-expanded={open} aria-controls="drawer" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpenPath(open ? null : pathname)}>
          <span />
          <span />
        </button>
      </div>
      <div className="tape" aria-hidden="true">
        <b id="tape-fill" />
      </div>
      <div id="drawer" className={`drawer ${open ? "is-open" : ""}`} hidden={!open}>
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} onClick={() => setOpenPath(null)}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="btn" href={telHref(site.phone)}>
          Call {site.phone}
        </a>
      </div>
    </header>
  );
}

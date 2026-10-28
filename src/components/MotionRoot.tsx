"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Page-wide motion: the tape measure that unrolls as you scroll, scroll reveals, stitched lines that draw
// themselves, gentle parallax and magnetic buttons. All of it is off for visitors who prefer reduced motion.
export function MotionRoot() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const q = <T extends Element>(s: string) => Array.from(document.querySelectorAll<T>(s));

    if (reduce) {
      q<HTMLElement>("[data-reveal], [data-intro]").forEach((el) => (el.style.opacity = "1"));
      return;
    }

    const ctx = gsap.context(() => {
      // Tape measure fills as the page scrolls.
      gsap.fromTo("#tape-fill", { scaleX: 0 }, { scaleX: 1, ease: "none", transformOrigin: "0 50%", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      gsap.set("[data-reveal]", { y: 28 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%",
        once: true,
        onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, overwrite: true }),
      });

      // Stitched (dashed) lines are wiped in from the left, as if being sewn.
      q<SVGSVGElement>(".stitch, .hero__thread").forEach((svg) => {
        gsap.fromTo(
          svg,
          { clipPath: "inset(-20px 100% -20px -20px)" },
          { clipPath: "inset(-20px -20px -20px -20px)", duration: 1.8, ease: "power2.inOut", delay: 0.2, scrollTrigger: { trigger: svg, start: "top 95%", once: true } },
        );
      });

      q<HTMLElement>("[data-parallax]").forEach((el) => {
        const amount = Number(el.dataset.parallax) || 6;
        gsap.fromTo(el, { yPercent: -amount }, { yPercent: amount, ease: "none", scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true } });
      });

      const intro = q<HTMLElement>("[data-intro]");
      if (intro.length) gsap.fromTo(intro, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12, delay: 0.1 });
    });

    let off = () => {};
    if (fine) {
      const onMove = (e: PointerEvent) => {
        const m = (e.target as Element | null)?.closest?.<HTMLElement>("[data-magnet]");
        q<HTMLElement>("[data-magnet]").forEach((b) => {
          if (b !== m) gsap.to(b, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
        });
        if (m) {
          const r = m.getBoundingClientRect();
          gsap.to(m, { x: (e.clientX - (r.left + r.width / 2)) * 0.18, y: (e.clientY - (r.top + r.height / 2)) * 0.25, duration: 0.3, ease: "power3.out" });
        }
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      off = () => window.removeEventListener("pointermove", onMove);
    }

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 600);
    return () => {
      off();
      window.clearTimeout(t);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}

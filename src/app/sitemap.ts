import type { MetadataRoute } from "next";
import { nav, siteUrl } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({ url: `${siteUrl}${n.href}` }));
}

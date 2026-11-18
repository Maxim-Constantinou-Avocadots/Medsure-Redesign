import { routes } from "@/content/company";
import { siteUrl } from "@/lib/site-meta";

export const prerender = true;

export function GET() {
  const urls = Object.values(routes).map((path) => `<url><loc>${new URL(path, siteUrl)}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}

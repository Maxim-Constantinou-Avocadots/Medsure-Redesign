import { siteUrl } from "@/lib/site-meta";

export const prerender = true;

export function GET() {
  return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${siteUrl}/sitemap.xml\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

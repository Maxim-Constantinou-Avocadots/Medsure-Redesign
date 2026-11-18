import type { MetadataRoute } from "next";
import { routes } from "@/content/company";

const BASE = "https://www.medsure.com.cy";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(routes).map((path) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

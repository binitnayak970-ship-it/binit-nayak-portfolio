import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Binit Nayak — student in Biratnagar, Nepal",
    short_name: "Binit Nayak",
    description: siteConfig.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F2EDE4",
    theme_color: "#F2EDE4",
    lang: siteConfig.lang,
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}

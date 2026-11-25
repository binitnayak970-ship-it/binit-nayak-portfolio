import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Learning } from "@/components/Learning";
import { Now } from "@/components/Now";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { JsonLd } from "@/components/JsonLd";
import { buildFaqSchema, buildProfilePageSchema } from "@/lib/schema";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildProfilePageSchema()} />
      <JsonLd data={buildFaqSchema()} />
      <main id="main">
        <Hero />
        <About />
        <Learning />
        <Now />
        <Faq />
        <Contact />
      </main>
    </>
  );
}

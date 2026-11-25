import { faq, knowsAbout, siteConfig } from "@/content/site";

const PERSON_ID = `${siteConfig.url}/#person`;
const SITE_ID = `${siteConfig.url}/#website`;
const PAGE_ID = `${siteConfig.url}/#profilepage`;

const address = {
  "@type": "PostalAddress",
  addressLocality: siteConfig.location.city,
  addressRegion: siteConfig.location.region,
  addressCountry: siteConfig.location.countryCode,
};

const school = {
  "@type": "CollegeOrUniversity",
  name: siteConfig.school.name,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.school.city,
    addressCountry: siteConfig.location.countryCode,
  },
};

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: siteConfig.name,
    alternateName: [...siteConfig.alternateName],
    givenName: "Binit",
    familyName: "Nayak",
    url: siteConfig.url,
    image: `${siteConfig.url}${"/portrait-binit-nayak.jpg"}`,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description:
      "Binit Nayak is a 17-year-old Class 12 student at Arniko College in Biratnagar, Nepal, learning HTML, CSS, JavaScript, React and SQL.",
    address,
    homeLocation: address,
    // He studies here now, so this is an affiliation rather than alumniOf.
    affiliation: school,
    knowsAbout: [...knowsAbout],
    sameAs: [siteConfig.github, siteConfig.instagram],
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: siteConfig.url,
    name: "Binit Nayak",
    description: siteConfig.seo.description,
    inLanguage: siteConfig.lang,
    publisher: { "@id": PERSON_ID },
  };
}

export function buildProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": PAGE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} — portfolio`,
    description: siteConfig.seo.description,
    inLanguage: siteConfig.lang,
    isPartOf: { "@id": SITE_ID },
    mainEntity: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/portrait-binit-nayak.jpg`,
      caption: `${siteConfig.name}, ${siteConfig.location.display}`,
    },
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

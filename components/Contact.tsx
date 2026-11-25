import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { contact, siteConfig } from "@/content/site";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-20 border-b border-ink/15 bg-paper-deep py-16 sm:py-24"
    >
      <div className="shell">
        <SectionHeading
          index={contact.index}
          label={contact.label}
          heading={contact.heading}
          id="contact-heading"
          aside="Messages saved to Supabase"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-snug text-ink sm:text-xl">{contact.intro}</p>

            <div className="mt-8">
              <h3 className="micro text-ink/55">{contact.directLabel}</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block break-all font-display text-2xl uppercase leading-tight text-ink underline decoration-ember decoration-2 underline-offset-4 transition-colors hover:text-ember-ink sm:text-3xl"
              >
                {siteConfig.email}
              </a>
            </div>

            <dl className="mt-8 border-t border-ink/25">
              {contact.socials.map((social) => (
                <div
                  key={social.label}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-3"
                >
                  <dt className="micro text-ink/55">{social.label}</dt>
                  <dd className="text-right text-sm text-ink/80">{social.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-7">
            <div className="border border-ink/20 bg-paper p-5 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

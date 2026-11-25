import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/site";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 border-b border-ink/15 py-16 sm:py-24"
    >
      <div className="shell">
        <SectionHeading
          index={about.index}
          label={about.label}
          heading={about.heading}
          id="about-heading"
          aside="Biratnagar, Nepal"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <p className="text-xl leading-snug text-ink sm:text-2xl">{about.intro}</p>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-ink/80 sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <dl className="border-t border-ink/25">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/15 py-4"
                >
                  <dt className="micro text-ink/55">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-ink sm:text-base">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 border-l-2 border-ochre pl-4 text-sm leading-relaxed text-ink/70">
              No client list, no invented experience. This page is a record of where I
              actually am.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

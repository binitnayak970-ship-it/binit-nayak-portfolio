import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { now } from "@/content/site";

export function Now() {
  return (
    <section
      id="now"
      aria-labelledby="now-heading"
      className="scroll-mt-20 border-b border-ink/15 bg-paper-deep/50 py-16 sm:py-24"
    >
      <div className="shell">
        <SectionHeading
          index={now.index}
          label={now.label}
          heading={now.heading}
          id="now-heading"
          aside={`Updated ${now.updated}`}
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <p className="text-lg leading-snug text-ink sm:text-xl">{now.intro}</p>
            <p className="mt-5 border-l-2 border-ember pl-4 text-sm leading-relaxed text-ink/70">
              {now.closing}
            </p>
            <p className="mt-8 font-display text-[clamp(3.5rem,10vw,6rem)] uppercase leading-none text-graphite">
              {now.updated}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="grid gap-8 sm:grid-cols-2">
              {now.columns.map((column) => (
                <div key={column.title}>
                  <h3 className="border-t-2 border-ink pt-3 text-[11px] font-semibold uppercase tracking-wide2">
                    {column.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {column.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/80">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 h-px w-4 shrink-0 bg-ember"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

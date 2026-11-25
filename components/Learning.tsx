import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { learning } from "@/content/site";

const accentClass: Record<string, string> = {
  ember: "bg-ember",
  ochre: "bg-ochre",
  ink: "bg-ink",
};

export function Learning() {
  return (
    <section
      id="learning"
      aria-labelledby="learning-heading"
      className="scroll-mt-20 border-b border-ink/15 py-16 sm:py-24"
    >
      <div className="shell">
        <SectionHeading
          index={learning.index}
          label={learning.label}
          heading={learning.heading}
          id="learning-heading"
          aside="Updated as I learn"
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-lg leading-snug text-ink sm:text-xl">{learning.intro}</p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">{learning.note}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {learning.also.map((item) => (
                <li
                  key={item}
                  className="border border-ink/25 px-3 py-1.5 text-[11px] uppercase tracking-wide2 text-ink/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-span-8">
            <ol className="border-t border-ink/25">
              {learning.items.map((item, index) => (
                <li
                  key={item.name}
                  className="group grid grid-cols-1 gap-2 border-b border-ink/15 py-6 sm:grid-cols-12 sm:items-baseline sm:gap-x-6 sm:py-8"
                >
                  <span className="micro text-ink/40 sm:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3 sm:col-span-4">
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 shrink-0 ${accentClass[item.accent]}`}
                    />
                    <h3 className="font-display text-2xl uppercase leading-none sm:text-3xl">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-[11px] font-medium uppercase tracking-wide2 text-ember-ink sm:col-span-3">
                    {item.level}
                  </p>

                  <p className="text-sm leading-relaxed text-ink/75 sm:col-span-4 sm:text-right">
                    {item.note}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

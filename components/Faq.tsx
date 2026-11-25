import { SectionHeading } from "@/components/SectionHeading";
import { faq } from "@/content/site";

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-20 border-b border-ink/15 py-16 sm:py-24"
    >
      <div className="shell">
        <SectionHeading
          index={faq.index}
          label={faq.label}
          heading={faq.heading}
          id="faq-heading"
          aside="About Binit Nayak"
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <p className="text-sm leading-relaxed text-ink/70 lg:col-span-4">{faq.intro}</p>

          <div className="border-t border-ink/25 lg:col-span-8">
            {faq.items.map((item) => (
              <details key={item.question} className="group border-b border-ink/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display text-xl uppercase leading-tight sm:text-2xl">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center border border-ink/30 text-sm transition-transform duration-200 group-open:rotate-45 group-open:border-ember group-open:text-ember"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pb-6 pr-8 text-sm leading-relaxed text-ink/80 sm:text-base">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

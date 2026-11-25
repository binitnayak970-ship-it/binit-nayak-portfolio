import Image from "next/image";
import { PortraitFrame } from "@/components/PortraitFrame";
import { hero, siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-ink/15"
    >
      {/* Oversized monogram behind the type */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-display leading-none text-graphite/55"
          style={{ fontSize: "clamp(230px, 48vw, 660px)" }}
        >
          {siteConfig.initials}
        </span>
      </div>

      {/* Flat colour slabs from the poster language */}
      <div aria-hidden="true" className="absolute left-0 top-0 h-20 w-1/3 bg-ember sm:h-28 sm:w-1/5" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 h-14 w-24 bg-ochre sm:h-20 sm:w-36" />

      <div className="shell relative grid grid-cols-1 gap-10 pb-14 pt-10 sm:pb-20 lg:grid-cols-12 lg:items-end lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/25 pb-3">
            <p className="micro text-ink/70">{hero.microLabel}</p>
            <p className="micro text-ink/45">{siteConfig.motifs.coordinates}</p>
          </div>

          <h1
            id="hero-heading"
            className="mt-7 font-display text-[clamp(3.4rem,12.5vw,9rem)] uppercase leading-[0.82] tracking-[-0.015em]"
          >
            <span className="block">Binit</span>
            <span className="block">Nayak</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-snug text-ink/90 sm:text-2xl">
            {hero.positioning}
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink/70 sm:text-base">
            {hero.support}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {hero.ctas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={
                  cta.variant === "solid"
                    ? "micro inline-flex items-center gap-2 bg-ink px-6 py-3.5 text-paper transition-colors hover:bg-ember"
                    : "micro inline-flex items-center gap-2 border border-ink/40 px-6 py-3.5 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                }
              >
                {cta.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 sm:mt-14">
            {siteConfig.motifs.heroBottom.map((word) => (
              <span key={word} className="micro text-ink/50">
                {word}
              </span>
            ))}
            <span aria-hidden="true" className="ml-1 h-px w-10 bg-ember" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <PortraitFrame>
            <figure className="relative">
              <div className="relative border border-ink/25 bg-paper-deep p-2 sm:p-3">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  width={hero.image.width}
                  height={hero.image.height}
                  priority
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 80vw, 40vw"
                  className="h-auto w-full object-cover"
                />

                {/* Thin outline line-work over the portrait */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <rect
                    x="9"
                    y="6"
                    width="82"
                    height="88"
                    fill="none"
                    stroke="#F2EDE4"
                    strokeOpacity="0.6"
                    strokeWidth="0.5"
                    className="outline-work"
                  />
                  <path
                    d="M9 50 H91"
                    stroke="#F2EDE4"
                    strokeOpacity="0.35"
                    strokeWidth="0.4"
                    className="outline-work"
                  />
                  <path
                    d="M50 6 V94"
                    stroke="#F2EDE4"
                    strokeOpacity="0.22"
                    strokeWidth="0.35"
                    className="outline-work"
                  />
                  <path
                    d="M50 14 L86 50 L50 86 L14 50 Z"
                    fill="none"
                    stroke="#F2EDE4"
                    strokeOpacity="0.3"
                    strokeWidth="0.4"
                    className="outline-work"
                  />
                </svg>

                <span
                  aria-hidden="true"
                  className="absolute -left-px -top-px h-8 w-8 border-l-2 border-t-2 border-ember"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px -right-px h-8 w-8 border-b-2 border-r-2 border-ochre"
                />
              </div>
              <figcaption className="micro mt-3 flex items-center justify-between text-ink/50">
                <span>{hero.image.caption}</span>
                <span aria-hidden="true">Fig. 01</span>
              </figcaption>

              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="micro text-ink/45">Focus . Believe . Achieve</p>
                </div>
                <span aria-hidden="true" className="mt-2 h-px w-8 shrink-0 bg-ember" />
              </div>
            </figure>
          </PortraitFrame>
        </div>
      </div>
    </section>
  );
}

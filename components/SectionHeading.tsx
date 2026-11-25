type SectionHeadingProps = {
  index: string;
  label: string;
  heading: string;
  id: string;
  aside?: string;
};

export function SectionHeading({ index, label, heading, id, aside }: SectionHeadingProps) {
  return (
    <div className="mb-10 lg:mb-14">
      <div className="flex items-center justify-between gap-4 border-t border-ink/25 pt-3">
        <span className="micro text-ink/70">
          {index} / {label}
        </span>
        {aside ? <span className="micro hidden text-ink/45 sm:block">{aside}</span> : null}
      </div>
      <h2
        id={id}
        className="mt-6 font-display text-[clamp(2.25rem,6.5vw,5rem)] uppercase leading-[0.86] tracking-[-0.01em]"
      >
        {heading}
      </h2>
    </div>
  );
}

import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/85 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between gap-4 sm:h-16">
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center bg-ink font-display text-[13px] leading-none text-paper"
          >
            {siteConfig.initials}
          </span>
          <span className="micro hidden text-ink sm:inline">{siteConfig.name}</span>
        </a>

        <nav aria-label="Page sections" className="-mr-1 overflow-x-auto">
          <ul className="flex items-center gap-4 whitespace-nowrap sm:gap-7">
            {siteConfig.nav.map((item) => (
              <li
                key={item.href}
                className={
                  item.label === "Now" || item.label === "FAQ" ? "hidden md:block" : ""
                }
              >
                <a
                  href={item.href}
                  className="micro link-underline text-ink/70 transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

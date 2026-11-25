import { ViewCounter } from "@/components/ViewCounter";
import { footer, siteConfig } from "@/content/site";

const externalLinks = [
  { label: "GitHub", href: siteConfig.github, value: `@${siteConfig.githubHandle}` },
  { label: "Instagram", href: siteConfig.instagram, value: `@${siteConfig.instagramHandle}` },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="font-display text-3xl uppercase leading-none sm:text-4xl">
              {siteConfig.name}
            </p>
            <p className="micro mt-3 text-paper/60">{siteConfig.location.display}</p>
          </div>

          <div>
            <h2 className="micro text-paper/50">Reach me</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="link-underline-always break-all text-paper/90 hover:text-paper"
                >
                  {siteConfig.email}
                </a>
              </li>
              {externalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline-always text-paper/90 hover:text-paper"
                  >
                    {link.label}
                    <span className="sr-only"> ({link.value}, opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:flex sm:flex-col sm:items-start lg:items-end">
            <a href="#top" className="micro link-underline text-paper/70 hover:text-paper">
              Back to top ↑
            </a>
            <ViewCounter />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-paper/15 pt-5 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.credit}</p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}

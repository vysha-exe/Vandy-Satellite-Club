import Link from "next/link";
import { nav, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-surface-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="eyebrow">{site.shortName}</p>
          <p className="mt-3 display-title text-3xl text-ink">{site.name}</p>
          <p className="mt-4 max-w-md text-[0.98rem] text-muted">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wide text-ink">Navigate</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold tracking-wide text-ink">Connect</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                Instagram
              </a>
            </li>
            <li>
              <Link
                href="/join"
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                Get Involved
              </Link>
            </li>
            <li>
              <Link
                href="/hasp"
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                MOSAIC documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl px-6 py-5 text-xs text-muted">
          <p>© 2026 {site.name}. Student organization at Vanderbilt University.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

const logoSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/vusat-logo.png`;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-line/80 bg-white/90 px-3 py-2 shadow-[0_8px_30px_rgba(7,17,31,0.06)] backdrop-blur-md">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-full pl-1 pr-2 py-1"
          aria-label={`${site.name} home`}
        >
          {/* Plain img: next/image was dropping basePath on GitHub Pages */}
          <img
            src={logoSrc}
            alt="VUSAT logo"
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover"
          />
          <span className="hidden text-[0.78rem] font-extrabold tracking-[0.18em] text-ink sm:inline">
            {site.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-soft text-brand-deep"
                  : "text-ink-soft hover:bg-surface-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/join"
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-deep sm:inline-flex"
          >
            Join
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-4 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-4 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-4 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl rounded-3xl border border-line bg-white p-3 shadow-lg lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                  isActive(item.href) ? "bg-brand-soft text-brand-deep" : "text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-brand"
            >
              Instagram →
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

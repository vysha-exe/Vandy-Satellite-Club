"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { haspNav } from "@/content/hasp/nav";

export function HaspSidebar() {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="HASP documentation"
        className="hidden lg:block sticky top-28 self-start"
      >
        <p className="eyebrow mb-4">Documentation</p>
        <ul className="space-y-1 border-l border-line">
          {haspNav.map((item) => {
            const active =
              item.href === "/hasp"
                ? pathname === "/hasp"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block border-l-2 -ml-px py-2 pl-4 text-sm transition-colors ${
                    active
                      ? "border-brand font-semibold text-brand-deep"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="lg:hidden mb-8 overflow-x-auto">
        <p className="eyebrow mb-3">Documentation</p>
        <div className="flex min-w-max gap-2 pb-2">
          {haspNav.map((item) => {
            const active =
              item.href === "/hasp"
                ? pathname === "/hasp"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold whitespace-nowrap ${
                  active
                    ? "bg-brand text-white"
                    : "bg-brand-soft text-brand-deep"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

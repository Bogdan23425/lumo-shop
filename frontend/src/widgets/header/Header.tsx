import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { siteConfig } from "@/shared/config/site";

function IconButton({ label, children }: { label: string; children: ReactNode }) {
  return (
    <button
      className="group relative grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/70 text-slate-900 shadow-sm shadow-black/5 transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white"
      aria-label={label}
    >
      {children}
      <span className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] text-slate-600 group-hover:block">
        {label}
      </span>
    </button>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="leading-none">
              <div className="font-display text-xl font-semibold tracking-[0.2em] text-slate-900">
                {siteConfig.name}
              </div>
              <div className="text-xs text-slate-500">{siteConfig.tagline}</div>
            </div>
          </Link>
          <div className="hidden flex-1 px-6 lg:block">
            <label className="relative block">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                className="w-full rounded-full border border-black/10 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm shadow-black/5 outline-none transition focus:border-black/30 focus:bg-white"
                placeholder="Поиск по каталогу, брендам и моделям"
                type="search"
              />
            </label>
          </div>
          <div className="flex items-center gap-2">
            <IconButton label="Профиль">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 21C20 17.134 16.866 14 13 14H11C7.13401 14 4 17.134 4 21"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </IconButton>
            <IconButton label="Избранное">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 20L4.5 12.5C2.5 10.5 2.5 7.5 4.5 5.5C6.5 3.5 9.5 3.5 11.5 5.5L12 6L12.5 5.5C14.5 3.5 17.5 3.5 19.5 5.5C21.5 7.5 21.5 10.5 19.5 12.5L12 20Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </IconButton>
            <IconButton label="Корзина">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M6 6H4M6 6H20L18 14H7L6 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 20C9.55228 20 10 19.5523 10 19C10 18.4477 9.55228 18 9 18C8.44772 18 8 18.4477 8 19C8 19.5523 8.44772 20 9 20Z"
                  fill="currentColor"
                />
                <path
                  d="M17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20Z"
                  fill="currentColor"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="pb-4 lg:hidden">
          <label className="relative block">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 21L16.65 16.65M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <input
              className="w-full rounded-2xl border border-black/10 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm shadow-black/5 outline-none transition focus:border-black/30 focus:bg-white"
              placeholder="Поиск в LUMO"
              type="search"
            />
          </label>
        </div>
      </Container>
    </header>
  );
}

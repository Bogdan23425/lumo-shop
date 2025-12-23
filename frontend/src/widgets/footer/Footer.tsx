import Link from "next/link";
import { Container } from "@/shared/ui/Container";

const columns = [
  {
    title: "Покупателям",
    links: [
      { href: "/delivery", label: "Доставка" },
      { href: "/payment", label: "Оплата" },
      { href: "/help", label: "Помощь" },
    ],
  },
  {
    title: "О компании",
    links: [
      { href: "/contacts", label: "Контакты" },
      { href: "/legal/privacy", label: "Политика" },
      { href: "/legal/terms", label: "Условия" },
    ],
  },
  {
    title: "Сервис",
    links: [
      { href: "/account", label: "Личный кабинет" },
      { href: "/favorites", label: "Избранное" },
      { href: "/compare", label: "Сравнение" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white pb-24 pt-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.3fr_2fr]">
          <div className="space-y-4">
            <div className="text-2xl font-semibold text-slate-900">LUMO</div>
            <p className="text-sm text-slate-500">
              Маркетплейс для умного дома, офиса и отдыха. Мы отбираем технику,
              которой хочется пользоваться каждый день.
            </p>
            <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-white via-white to-amber-50/70 px-4 py-3 text-xs text-slate-500">
              Гарантия 2 года · Поддержка 24/7 · Доставка за 1-2 дня
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className="space-y-3">
                <div className="text-sm font-semibold text-slate-900">
                  {column.title}
                </div>
                <ul className="space-y-2 text-sm text-slate-500">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition hover:text-slate-900">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-black/5 pt-6 text-xs text-slate-500">
          <span>© 2025 LUMO. Все права защищены.</span>
          <span>Сделано для сильного e-commerce портфолио.</span>
        </div>
      </Container>
    </footer>
  );
}

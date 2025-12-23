import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { CATEGORIES } from "@/shared/config/categories";
import { slugify } from "@/shared/lib/slug";

const highlights = [
  {
    label: "Доставка",
    value: "от 1 дня",
    description: "Экспресс-логистика по стране",
  },
  {
    label: "Гарантия",
    value: "24 месяца",
    description: "Официальный сервис и возврат",
  },
  {
    label: "Поддержка",
    value: "24/7",
    description: "Консультации и подбор",
  },
];

const productHits = [
  {
    name: "Xenon Pro 14",
    category: "Ноутбуки",
    price: "59 990",
    badge: "Хит продаж",
  },
  {
    name: "Auralink Mini",
    category: "Аудио",
    price: "12 490",
    badge: "Топ в категории",
  },
  {
    name: "Nexa Home Hub",
    category: "Умный дом",
    price: "18 990",
    badge: "Рекомендация",
  },
];

const productNew = [
  {
    name: "Vivid Air 2",
    category: "Смартфоны",
    price: "29 990",
    badge: "Новинка",
  },
  {
    name: "Pulse Neo",
    category: "Смарт-часы",
    price: "9 990",
    badge: "Новинка",
  },
  {
    name: "Glow Kitchen",
    category: "Для кухни",
    price: "7 890",
    badge: "Новинка",
  },
];

const promoCards = [
  {
    title: "Смарт-аксессуары",
    description: "Скидки до 25% на гаджеты для дома",
  },
  {
    title: "Игровой weekend",
    description: "Консоли, геймпады и подписки",
  },
];

export default function Home() {
  return (
    <div className="pb-16">
      <section className="py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs text-slate-500">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                Лимитированные предложения недели
              </div>
              <h1 className="font-display text-4xl leading-tight text-slate-950 sm:text-5xl">
                Техника, которая делает дом и работу умнее.
              </h1>
              <p className="max-w-xl text-base text-slate-600">
                LUMO — маркетплейс электроники и устройств для жизни без лишних
                кликов. Продуманная логистика, честные гарантии, мощный каталог.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/catalog"
                  className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Перейти в каталог
                </Link>
                <Link
                  href="/delivery"
                  className="rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  Доставка за 1-2 дня
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm shadow-black/5"
                  >
                    <div className="text-xs uppercase tracking-wide text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-lg font-semibold text-slate-900">
                      {item.value}
                    </div>
                    <div className="text-xs text-slate-500">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-white via-white to-amber-50/70 p-6 shadow-[0_18px_40px_rgba(15,15,15,0.08)]">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    LUMO подборка
                  </div>
                  <div className="font-display text-2xl text-slate-900">
                    Умное пространство
                  </div>
                  <p className="text-sm text-slate-600">
                    Технологии, которые экономят время и создают уют: от
                    интеллектуального света до безопасных камер.
                  </p>
                </div>
                <div className="mt-6 grid gap-3">
                  {promoCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-black/5 bg-white/80 px-4 py-3 text-sm text-slate-700"
                    >
                      <div className="font-semibold text-slate-900">
                        {card.title}
                      </div>
                      <div className="text-xs text-slate-500">{card.description}</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -right-12 -top-16 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />
                <div className="absolute -bottom-12 right-8 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-slate-600">
                  1200+ товаров уже готовы к отправке сегодня.
                </div>
                <div className="rounded-2xl border border-black/10 bg-white/80 p-4 text-sm text-slate-600">
                  Подборки от экспертов и реальных покупателей.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-6">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl text-slate-900">Быстрые категории</h2>
            <Link href="/catalog" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              Все категории →
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {CATEGORIES.slice(0, 12).map((category) => (
              <Link
                key={category}
                href={`/c/${slugify(category)}`}
                className="rounded-2xl border border-black/10 bg-white/70 px-4 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-black/20"
              >
                {category}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <SectionHeader title="Хиты продаж" subtitle="Проверенная техника, которую берут чаще всего" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {productHits.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <SectionHeader title="Новинки" subtitle="Свежие релизы и лимитированные партии" />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {productNew.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-[28px] border border-black/10 bg-slate-900 px-6 py-8 text-white">
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                Преимущества
              </div>
              <div className="mt-3 font-display text-2xl">Честный сервис LUMO</div>
              <p className="mt-3 text-sm text-white/70">
                Проверка товара до отправки, реальная поддержка, бесшовный
                возврат, бонусы за покупки.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/80 px-6 py-8 text-slate-700">
              <div className="font-semibold text-slate-900">Доставка и установка</div>
              <p className="mt-2 text-sm text-slate-500">
                Привезем в удобный слот, подключим крупную технику, вывезем
                упаковку.
              </p>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/80 px-6 py-8 text-slate-700">
              <div className="font-semibold text-slate-900">Гарантия и поддержка</div>
              <p className="mt-2 text-sm text-slate-500">
                14 дней на возврат, партнерские сервисы и расширенные гарантии.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="rounded-[32px] border border-black/10 bg-white/80 p-6">
            <div className="font-display text-2xl text-slate-900">LUMO — реальный e-commerce</div>
            <div className="mt-3 grid gap-4 text-sm text-slate-600 md:grid-cols-2">
              <p>
                Проект строится по принципам коммерческих платформ: быстрый
                каталог, надежные карточки товара, честные условия и внимание к
                мобильному UX.
              </p>
              <p>
                Основной приоритет — удобство клиента: минимум шагов до покупки,
                предсказуемая логистика и понятная архитектура интерфейсов.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="font-display text-2xl text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
      <Link href="/catalog" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
        Смотреть все →
      </Link>
    </div>
  );
}

function ProductCard({
  name,
  category,
  price,
  badge,
}: {
  name: string;
  category: string;
  price: string;
  badge: string;
}) {
  return (
    <article className="rounded-[28px] border border-black/10 bg-white/80 p-5 shadow-sm shadow-black/5">
      <div className="flex items-center justify-between text-xs">
        <span className="rounded-full bg-slate-900 px-3 py-1 text-white">{badge}</span>
        <span className="text-slate-400">{category}</span>
      </div>
      <div className="mt-5 h-36 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-amber-100/70" />
      <div className="mt-4 space-y-1">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-500">от {price} ₽</div>
      </div>
      <button className="mt-4 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-black/20">
        В корзину
      </button>
    </article>
  );
}

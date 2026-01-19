import Link from "next/link";
import { Container } from "@/shared/ui/Container";
import { CATEGORIES } from "@/shared/config/categories";
import { slugify } from "@/shared/lib/slug";
import { CategoryMenu } from "@/widgets/catalog/CategoryMenu";
import { HeroSlider } from "@/widgets/home/HeroSlider";
import { HomeRightSection } from "@/widgets/home/HomeRightSection";

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
      <section className="pt-0" style={{ paddingBottom: '10px' }}>
        <div className="mx-auto w-full max-w-[1400px] px-0" style={{ paddingLeft: '10px' }}>
          <div className="grid lg:grid-cols-[320px_auto]" style={{ gap: '10px' }}>
            <div className="hidden lg:block" style={{ marginTop: '10px' }}>
              <div className="rounded-lg border border-black/10 bg-white/80" style={{ width: '320px', height: '602px', padding: '0' }}>
                <CategoryMenu />
              </div>
            </div>
            <div className="hidden lg:block" style={{ marginTop: '10px' }}>
              <HomeRightSection />
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl text-slate-900">Быстрые категории</h2>
            <Link href="/catalog" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              Все категории →
            </Link>
          </div>
          <div style={{ marginTop: '10px', gap: '10px' }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
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

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Container>
          <SectionHeader title="Хиты продаж" subtitle="Проверенная техника, которую берут чаще всего" />
          <div style={{ marginTop: '10px', gap: '10px' }} className="grid md:grid-cols-3">
            {productHits.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Container>
          <SectionHeader title="Новинки" subtitle="Свежие релизы и лимитированные партии" />
          <div style={{ marginTop: '10px', gap: '10px' }} className="grid md:grid-cols-3">
            {productNew.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </Container>
      </section>

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Container>
          <div className="grid lg:grid-cols-3" style={{ gap: '10px' }}>
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

      <section style={{ paddingTop: '10px', paddingBottom: '10px' }}>
        <Container>
          <div className="rounded-[32px] border border-black/10 bg-white/80 p-6">
            <div className="font-display text-2xl text-slate-900">LUMO — реальный e-commerce</div>
            <div style={{ marginTop: '10px', gap: '10px' }} className="grid text-sm text-slate-600 md:grid-cols-2">
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
    <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ gap: '10px' }}>
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

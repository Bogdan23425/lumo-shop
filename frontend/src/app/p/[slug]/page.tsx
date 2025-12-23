import { products } from "@/entities/product/model/data";
import { formatPrice } from "@/shared/lib/format";
import { ProductActions } from "./ProductActions";

type ProductPageProps = {
  params: { slug: string };
};

export default function Page({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return (
      <section className="py-10">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-black/10 bg-white/80 p-6">
            <h1 className="font-display text-2xl text-slate-900">Товар не найден</h1>
            <p className="mt-2 text-sm text-slate-500">Проверьте ссылку или вернитесь в каталог.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 pb-24 sm:pb-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="rounded-[32px] border border-black/10 bg-white/80 p-6">
              <div className="h-[360px] rounded-3xl bg-gradient-to-br from-slate-100 via-white to-amber-100/70" />
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-24 rounded-2xl border border-black/10 bg-white/80"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/80 p-6 text-sm text-slate-600">
              <div className="font-semibold text-slate-900">Доставка и оплата</div>
              <p className="mt-2">
                Привезем завтра, доступна оплата картой или при получении. Есть рассрочка.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">LUMO</div>
              <h1 className="font-display text-3xl text-slate-900">{product.title}</h1>
              <div className="text-sm text-slate-500">
                Рейтинг {product.rating.toFixed(1)} · {product.reviewsCount} отзывов
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/80 p-6">
              <div className="text-xs uppercase tracking-wide text-slate-400">Цена</div>
              <div className="mt-2 text-2xl font-semibold text-slate-900">
                {formatPrice(product.price)} ₽
              </div>
              <div className="mt-4">
                <ProductActions product={product} />
              </div>
            </div>
            <div className="rounded-[28px] border border-black/10 bg-white/80 p-6 text-sm text-slate-600">
              <div className="font-semibold text-slate-900">Характеристики</div>
              <ul className="mt-3 space-y-2">
                <li>Тип: умная электроника</li>
                <li>Состояние: {product.stock === "in_stock" ? "в наличии" : "ограничено"}</li>
                <li>Сервис: официальная гарантия 24 мес.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

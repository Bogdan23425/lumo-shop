"use client";

import type { Product } from "../model/types";
import Link from "next/link";
import { formatPrice } from "@/shared/lib/format";
import { useCartStore } from "@/features/cart/model/cart.store";

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <article className="rounded-[28px] border border-black/10 bg-white/80 p-5 shadow-sm shadow-black/5">
      <div className="flex items-center justify-between text-xs">
        {product.badge ? (
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">{product.badge}</span>
        ) : (
          <span />
        )}
        <span className="text-slate-400">{product.rating.toFixed(1)} ★</span>
      </div>
      <div className="mt-5 h-36 rounded-2xl bg-gradient-to-br from-slate-100 via-white to-amber-100/70" />
      <div className="mt-4 space-y-1">
        <Link href={`/p/${product.slug}`} className="font-semibold text-slate-900 hover:underline">
          {product.title}
        </Link>
        <div className="text-sm text-slate-500">от {formatPrice(product.price)} ₽</div>
      </div>
      <button
        className="mt-4 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-black/20"
        onClick={() => addItem(product)}
      >
        В корзину
      </button>
    </article>
  );
}

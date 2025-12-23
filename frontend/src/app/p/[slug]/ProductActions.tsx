"use client";

import type { Product } from "@/entities/product/model/types";
import { useCartStore } from "@/features/cart/model/cart.store";
import { useFavoritesStore } from "@/features/favorites/model/favorites.store";
import { useCompareStore } from "@/features/compare/model/compare.store";

export function ProductActions({ product }: { product: Product }) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoritesStore((state) => state.toggle);
  const hasFavorite = useFavoritesStore((state) => state.has(product.id));
  const toggleCompare = useCompareStore((state) => state.toggle);
  const hasCompare = useCompareStore((state) => state.has(product.id));

  return (
    <div className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          onClick={() => addItem(product)}
        >
          В корзину
        </button>
        <button
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
          onClick={() => toggleFavorite(product)}
        >
          {hasFavorite ? "В избранном" : "В избранное"}
        </button>
      </div>
      <button
        className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900"
        onClick={() => toggleCompare(product)}
      >
        {hasCompare ? "В сравнении" : "В сравнение"}
      </button>
      <div className="text-xs text-slate-500">Доставка завтра · Гарантия 24 месяца</div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-4 shadow-[0_-12px_30px_rgba(15,15,15,0.08)] sm:hidden">
        <button
          className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
          onClick={() => addItem(product)}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

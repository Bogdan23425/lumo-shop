"use client";

import { useMemo } from "react";
import type { Category } from "@/entities/category/model/types";

type FiltersState = {
  category: string;
  priceMin: string;
  priceMax: string;
};

type CatalogFiltersProps = {
  categories: Category[];
  state: FiltersState;
  onChange: (next: FiltersState) => void;
  onClose?: () => void;
  total: number;
};

export function CatalogFilters({ categories, state, onChange, onClose, total }: CatalogFiltersProps) {
  const categoryOptions = useMemo(
    () => [{ id: "all", name: "Все категории", slug: "all" }, ...categories],
    [categories],
  );

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-sm font-semibold text-slate-900">Фильтры</div>
          <div className="text-xs text-slate-500">Найдено товаров: {total}</div>
        </div>
        {onClose ? (
          <button className="text-xs text-slate-500" onClick={onClose}>
            Закрыть
          </button>
        ) : null}
      </div>
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-wide text-slate-400">Категория</div>
        <div className="grid gap-2">
          {categoryOptions.map((category) => (
            <button
              key={category.slug}
              className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                state.category === category.slug
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-black/10 bg-white text-slate-700 hover:border-black/20"
              }`}
              onClick={() => onChange({ ...state, category: category.slug })}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="text-xs uppercase tracking-wide text-slate-400">Цена</div>
        <div className="grid grid-cols-2 gap-3">
          <input
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            placeholder="от"
            value={state.priceMin}
            onChange={(event) => onChange({ ...state, priceMin: event.target.value })}
          />
          <input
            className="rounded-xl border border-black/10 bg-white px-3 py-2 text-sm"
            placeholder="до"
            value={state.priceMax}
            onChange={(event) => onChange({ ...state, priceMax: event.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

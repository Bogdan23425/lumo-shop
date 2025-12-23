"use client";

import { useEffect, useMemo, useState } from "react";
import { categoryData } from "@/entities/category/model/data";
import { products } from "@/entities/product/model/data";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { CatalogFilters } from "@/widgets/catalog/CatalogFilters";

const PER_PAGE = 6;

type CatalogClientProps = {
  initialCategory?: string;
};

export function CatalogClient({ initialCategory = "all" }: CatalogClientProps) {
  const [filters, setFilters] = useState({
    category: initialCategory,
    priceMin: "",
    priceMax: "",
  });
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [isFiltersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, category: initialCategory }));
    setVisibleCount(PER_PAGE);
  }, [initialCategory]);

  const filtered = useMemo(() => {
    const min = Number(filters.priceMin) || 0;
    const max = Number(filters.priceMax) || Number.POSITIVE_INFINITY;

    return products.filter((product) => {
      const matchesCategory =
        filters.category === "all" || product.categorySlug === filters.category;
      const matchesPrice = product.price >= min && product.price <= max;
      return matchesCategory && matchesPrice;
    });
  }, [filters]);

  const visible = filtered.slice(0, visibleCount);
  const canLoadMore = visibleCount < filtered.length;

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block">
        <div className="rounded-3xl border border-black/10 bg-white/80 p-6">
          <CatalogFilters
            categories={categoryData}
            state={filters}
            onChange={(next) => {
              setFilters(next);
              setVisibleCount(PER_PAGE);
            }}
            total={filtered.length}
          />
        </div>
      </aside>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-display text-2xl text-slate-900">Каталог LUMO</div>
            <div className="text-sm text-slate-500">{filtered.length} товаров</div>
          </div>
          <button
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-black/20 lg:hidden"
            onClick={() => setFiltersOpen(true)}
          >
            Фильтры
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-black/10 bg-white/80 p-6 text-sm text-slate-500">
            По этим условиям товаров пока нет.
          </div>
        ) : null}

        {canLoadMore ? (
          <button
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-black/20"
            onClick={() => setVisibleCount((count) => count + PER_PAGE)}
          >
            Показать еще
          </button>
        ) : null}
      </div>

      {isFiltersOpen ? (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40 lg:hidden">
          <div className="w-full rounded-t-[28px] bg-white p-6">
            <CatalogFilters
              categories={categoryData}
              state={filters}
              onChange={(next) => {
                setFilters(next);
                setVisibleCount(PER_PAGE);
              }}
              onClose={() => setFiltersOpen(false)}
              total={filtered.length}
            />
            <button
              className="mt-6 w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
              onClick={() => setFiltersOpen(false)}
            >
              Показать {filtered.length} товаров
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

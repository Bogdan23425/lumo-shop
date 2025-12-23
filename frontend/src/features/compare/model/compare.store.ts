import { create } from "zustand";
import type { Product } from "@/entities/product/model/types";

type CompareState = {
  items: Product[];
  toggle: (product: Product) => void;
  has: (id: string) => boolean;
};

export const useCompareStore = create<CompareState>((set, get) => ({
  items: [],
  toggle: (product) =>
    set((state) => {
      const exists = state.items.some((item) => item.id === product.id);
      return {
        items: exists
          ? state.items.filter((item) => item.id !== product.id)
          : [...state.items, product],
      };
    }),
  has: (id) => get().items.some((item) => item.id === id),
}));

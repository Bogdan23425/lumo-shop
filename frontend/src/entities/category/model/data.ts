import type { Category } from "./types";
import { CATEGORIES } from "@/shared/config/categories";
import { slugify } from "@/shared/lib/slug";

export const categoryData: Category[] = CATEGORIES.map((name, index) => ({
  id: `cat-${index + 1}`,
  name,
  slug: slugify(name),
}));

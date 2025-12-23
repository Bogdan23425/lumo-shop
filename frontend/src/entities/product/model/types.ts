export type Product = {
  id: string;
  slug: string;
  title: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  categorySlug: string;
  badge?: "Хит" | "Новинка" | "Акция";
  stock: "in_stock" | "out_of_stock" | "limited";
};

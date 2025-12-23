export type Order = {
  id: string;
  number: string;
  total: number;
  status: "new" | "paid" | "shipped" | "completed" | "canceled";
};

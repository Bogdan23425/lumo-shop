export type CheckoutStep = "contacts" | "address" | "delivery" | "payment" | "confirm";

export const checkoutStore = {
  step: "contacts" as CheckoutStep,
};

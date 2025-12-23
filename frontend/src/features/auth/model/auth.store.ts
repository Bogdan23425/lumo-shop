export type AuthState = {
  status: "guest" | "user";
};

export const authStore: AuthState = {
  status: "guest",
};

import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: "",
  setAccessToken: (token) => set({ accessToken: token }),
  logout: () => set({ accessToken: "" }),
}));

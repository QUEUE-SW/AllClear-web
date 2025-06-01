import { create } from "zustand";

export const useAuthStore = create((set) => ({
  accessToken: localStorage.getItem("accessToken") || "",
  setAccessToken: (token) => {
    localStorage.setItem("accessToken", token);
    set({ accessToken: token });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ accessToken: "" });
  },
}));

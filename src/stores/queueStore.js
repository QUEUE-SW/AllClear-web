import { create } from "zustand";

export const useQueueStore = create((set) => ({
  uuid: null,
  credentials: { identifier: "", password: "" },
  setUUID: (uuid) => set({ uuid }),
  setCredentials: (id, pw) => set({ credentials: { identifier: id, password: pw } }),
  clearCredentials: () => set({ credentials: { identifier: "", password: "" } }),
}));

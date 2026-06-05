import { create } from "zustand";

interface AppStore {
  message: string;
}

const useAppStore = create<AppStore>(() => ({
  message: "Hello World from Zustand 🚀",
}));


export default useAppStore;
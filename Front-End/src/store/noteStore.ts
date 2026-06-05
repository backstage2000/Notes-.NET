import { create } from "zustand";

type SortOrder = "asc" | "desc";

interface NoteStore {
  search: string;
  sortOrder: SortOrder;

  setSearch: (value: string) => void;
  toggleSortOrder: () => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  search: "",
  sortOrder: "desc",

  setSearch: (search) => set({ search }),

  toggleSortOrder: () =>
    set((state) => ({
      sortOrder: state.sortOrder === "desc" ? "asc" : "desc",
    })),
}));

export default useNoteStore;

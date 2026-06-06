import { create } from "zustand";

type SortOrder = "asc" | "desc";

interface NoteStore {
  search: string;
  sortItem: string;
  sortOrder: SortOrder;

  setSearch: (value: string) => void;
  setSortItem: (value: string) => void;
  toggleSortOrder: () => void;
}

const useNoteStore = create<NoteStore>((set) => ({
  search: "",
  sortItem: "Name",
  sortOrder: "desc",

  setSearch: (search) => set({ search }),

  setSortItem: (sortItem) => set({ sortItem }),

  toggleSortOrder: () =>
    set((state) => ({
      sortOrder: state.sortOrder === "desc" ? "asc" : "desc",
    })),
}));

export default useNoteStore;

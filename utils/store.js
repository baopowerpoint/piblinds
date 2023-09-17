import { create } from "zustand";

export const useToggleOpenStore = create((set) => ({
  isFilterOpen: false,
  setIsFilterOpen: (filterOpenState) =>
    set((state) => ({
      isFilterOpen: filterOpenState,
    })),
}));

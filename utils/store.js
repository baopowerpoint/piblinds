import { create } from "zustand";

export const useToggleOpenStore = create((set) => ({
  isFilterOpen: false,
  setIsFilterOpen: (filterOpenState) =>
    set((state) => ({
      isFilterOpen: filterOpenState,
    })),
}));
export const useIndex = create((set) => ({
  currentPage: 0,
  setCurrentPage: (currentIndex) =>
    set((state) => ({ currentPage: currentIndex })),
}));

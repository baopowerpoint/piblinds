"use client";
import { BiSearch, BiSliderAlt } from "react-icons/bi";
import { useToggleOpenStore } from "@/utils/store";
import { useEffect } from "react";

export const SearchBar = () => {
  const setIsFilterOpen = useToggleOpenStore((state) => state.setIsFilterOpen);
  const isFilterOpen = useToggleOpenStore((state) => state.isFilterOpen);
  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isFilterOpen);
  }, [isFilterOpen]);
  return (
    <div className="relative mt-10">
      <input
        type="text"
        className="w-full rounded-lg bg-background-secondary p-3 pl-10"
        placeholder="Tìm kiếm sản phẩm..."
      />
      <div className="absolute left-0 top-0 flex cursor-none select-none flex-col items-center p-3">
        <button>
          <BiSearch className="text-md text-text-secondary" />
        </button>
      </div>
      <div className="absolute right-0 top-0 flex cursor-none select-none flex-col items-center p-3">
        <button>
          <BiSliderAlt
            onClick={() => setIsFilterOpen(true)}
            className="text-md text-text-secondary"
          />
        </button>
      </div>
    </div>
  );
};

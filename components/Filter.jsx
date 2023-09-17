"use client";
import { BiArrowBack } from "react-icons/bi";
import { Container } from "./Container";
import { MultirangeSlider } from "./MultirangeSlider/MultirangeSlider";
import { SortCategory } from "./SortCategory";
import { categories } from "@/constants/cagegories";
import { brands } from "@/constants/brands";
import { useToggleOpenStore } from "@/utils/store";

export const Filter = () => {
  const setIsFilterOpen = useToggleOpenStore((state) => state.setIsFilterOpen);
  const isFilterOpen = useToggleOpenStore((state) => state.isFilterOpen);

  if (isFilterOpen)
    return (
      <Container className="absolute right-0 top-0 z-[200] flex h-screen w-full flex-col justify-between bg-background-primary p-3">
        <header className="flex items-center justify-between gap-5 ">
          <button>
            <BiArrowBack
              onClick={() => {
                setIsFilterOpen(false);
              }}
              className="text-2xl"
            />
          </button>
          <h5 className="text-lg font-semibold">Bộ lọc</h5>
          <button className="text-sm font-semibold text-indicator-fail">
            Xoá tất cả
          </button>
        </header>

        <h5 className="mt-5 text-md font-semibold">Khoảng giá</h5>
        <div className="rounded-2xl px-5">
          <MultirangeSlider
            min={0}
            max={1000}
            onChange={({ min, max }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </div>
        <h5 className="mt-40 text-md font-semibold">Loại sản phẩm</h5>
        <SortCategory wrap={true} categories={categories} />
        <h5 className="mt-10 text-md font-semibold">Thương hiệu</h5>
        <SortCategory wrap={true} categories={brands} />
        <button className="rounded-2xl bg-indicator-success py-2 text-md font-semibold text-background-primary">
          Áp dụng
        </button>
      </Container>
    );
  return null;
};

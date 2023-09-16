import { HeroBeak } from "@/components/Breaker";
import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import { BiArrowBack, BiSearch, BiSliderAlt, BiCartAdd } from "react-icons/bi";

export default function Product() {
  return (
    <PageWrapper showSideBar={true}>
      <Container className="mt-5">
        <header className="flex items-center justify-start gap-5">
          <button>
            <BiArrowBack className="text-2xl" />
          </button>
          <h5 className="text-lg font-semibold">Sản phẩm</h5>
        </header>
        <SearchBar />
        <HeroBeak />
        <SortCategory />
        <HeroBeak />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    </PageWrapper>
  );
}

export const SearchBar = () => {
  return (
    <div className="relative mt-10">
      {" "}
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
          <BiSliderAlt className="text-md text-text-secondary" />
        </button>
      </div>
    </div>
  );
};
export const SortCategory = () => {
  return (
    <div className="flex gap-3 overflow-x-scroll py-5">
      <div className="whitespace-nowrap rounded bg-indicator-success p-3 text-sm font-semibold text-background-primary">
        Rèm cửa
      </div>
      <div className="whitespace-nowrap rounded bg-background-secondary p-3 text-sm">
        Màn
      </div>
      <div className="whitespace-nowrap rounded bg-background-secondary p-3 text-sm">
        Ga giường
      </div>
      <div className="whitespace-nowrap rounded bg-background-secondary p-3 text-sm">
        Category 4
      </div>
      <div className="whitespace-nowrap rounded bg-background-secondary p-3 text-sm">
        Category-5
      </div>
    </div>
  );
};

export const ProductCard = () => {
  return (
    <div className="mt-2 flex justify-between gap-3 rounded border border-background-secondary p-3  ">
      <div className="flex justify-start gap-3">
        <img
          src="https://images.unsplash.com/photo-1577955107081-92c3197fb6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="product"
          className="aspect-square h-32 rounded"
        />
        <div>
          <p className="text-sm font-semibold text-text-secondary">
            Comfortable chair
          </p>
          <p className="text-md font-semibold text-indicator-success">
            1.599.000 VNĐ
          </p>
        </div>
      </div>
      <button className="h-fit rounded bg-background-secondary p-3">
        <BiCartAdd className="text-2xl text-text-secondary" />
      </button>
    </div>
  );
};

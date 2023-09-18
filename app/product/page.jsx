import { HeroBreak } from "@/components/Breaker";
import { Container } from "@/components/Container";
import { Filter } from "@/components/Filter";
import { PageWrapper } from "@/components/PageWrapper";
import { SearchBar } from "@/components/SearchBar";
import { SortCategory } from "@/components/SortCategory";
import { categories } from "@/constants/cagegories";
import Link from "next/link";
import { BiArrowBack, BiCartAdd } from "react-icons/bi";

export default function Product() {
  return (
    <PageWrapper showSideBar={true}>
      <Filter />
      <Container className="mt-5">
        <header className="flex items-center justify-start gap-5">
          <Link href="/">
            <BiArrowBack className="text-2xl" />
          </Link>
          <h5 className="text-lg font-semibold">Sản phẩm</h5>
        </header>
        <SearchBar />
        <HeroBreak />
        <SortCategory categories={categories} />
        <HeroBreak />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
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

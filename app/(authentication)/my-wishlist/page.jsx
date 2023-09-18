import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { HeroBreak } from "@/components/Breaker";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/constants/products";

export default function MyWishList() {
  return (
    <PageWrapper showFooter={true} showHeader={true} showSideBar={true}>
      <Container className="pt-[calc(var(--navigation-height)+1rem)]">
        <header className="flex items-center justify-between gap-5">
          <Link href="/">
            <BiArrowBack className="text-2xl" />
          </Link>
          <h5 className="text-lg font-semibold">Danh sách yêu thích</h5>
          <div className="invisible h-5 w-5"></div>
        </header>
        <HeroBreak />
        <ProductGrid products={products} />
      </Container>
    </PageWrapper>
  );
}

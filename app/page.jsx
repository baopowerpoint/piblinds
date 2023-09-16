import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import { HeroBeak } from "@/components/Breaker";
import { AnnouncementHero } from "@/components/sections/home/AnnouncementHero";
import { SaleHero } from "@/components/sections/home/SaleHero";
import { RecommendProduct } from "@/components/sections/home/RecommendProduct";
import { PopularItem } from "@/components/sections/home/PopularItem";
import { Devider } from "@/components/Devider";

export default function Home() {
  return (
    <PageWrapper showFooter={true} showHeader={true} showSideBar={true}>
      <Container className="pt-[var(--navigation-height)] text-md">
        <SaleHero />
        <HeroBeak />
        <AnnouncementHero />
        <HeroBeak />
        <RecommendProduct />
        <HeroBeak />
        <Devider />
        <PopularItem />
      </Container>
    </PageWrapper>
  );
}

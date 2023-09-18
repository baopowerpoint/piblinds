import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import { HeroBreak } from "@/components/Breaker";
import { AnnouncementHero } from "@/components/sections/home/AnnouncementHero";
import { SaleHero } from "@/components/sections/home/SaleHero";
import { RecommendProduct } from "@/components/sections/home/RecommendProduct";
import { PopularItem } from "@/components/sections/home/PopularItem";
import { Devider } from "@/components/Devider";

export default function Home() {
  return (
    <PageWrapper showFooter={true} showHeader={true} showSideBar={true}>
      <Container className="pt-[calc(var(--navigation-height)+1rem)] text-md">
        <SaleHero />
        <HeroBreak />
        <AnnouncementHero />
        <HeroBreak />
        <RecommendProduct />
        <HeroBreak />
        <Devider />
        <PopularItem />
      </Container>
    </PageWrapper>
  );
}

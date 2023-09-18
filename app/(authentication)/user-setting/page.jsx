import { HeroBreak } from "@/components/Breaker";
import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import { RecentOrder } from "@/components/RecentOrder";
import { UserProfile } from "@/components/UserProfile";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function UserSetting() {
  return (
    <PageWrapper showFooter={true} showHeader={true} showSideBar={true}>
      <Container className="pt-[calc(var(--navigation-height)+1rem)]">
        <header className="flex items-center justify-between gap-5">
          <Link href="/">
            <BiArrowBack className="text-2xl" />
          </Link>
          <h5 className="text-lg font-semibold">Cài đặt người dùng</h5>
          <div className="invisible h-5 w-5"></div>
        </header>
        <UserProfile />
        <RecentOrder />
      </Container>
    </PageWrapper>
  );
}

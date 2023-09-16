import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideBar } from "./Sidebar";

export const PageWrapper = ({
  children,
  showSideBar,
  showHeader,
  showFooter,
}) => {
  return (
    <>
      {showHeader && <Header />}
      <main>{children}</main>
      {showFooter && <Footer />}
      {showSideBar && <SideBar />}
    </>
  );
};

import type { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

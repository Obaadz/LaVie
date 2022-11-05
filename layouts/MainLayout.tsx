import type { ReactNode } from "react";
import Header from "../components/header";

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;

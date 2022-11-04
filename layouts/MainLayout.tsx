import type { ReactNode } from "react";

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  return <>{children}</>;
};

export default MainLayout;

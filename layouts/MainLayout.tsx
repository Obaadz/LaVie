import { ReactNode, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { setBodyBackgroundColor } from "../pages/_app";

type props = {
  children: ReactNode;
};

const MainLayout = ({ children }: props) => {
  useEffect(() => {
    setBodyBackgroundColor("#fffefe");

    return function cleanup() {
      setBodyBackgroundColor("unset");
    };
  });

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;

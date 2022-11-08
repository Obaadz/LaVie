import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode, Suspense } from "react";
import Header from "../components/header";
import usePageLoading from "../hooks/usePageLoading";
import { StyledNav } from "./styles";
type props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: props) => {
  const router = useRouter();
  const isPageLoading = usePageLoading(500);

  return (
    <>
      <Header />
      <StyledNav>
        <div className="container mt-5">
          <ul className="d-flex list-unstyled w-100 justify-content-evenly fs-4 border-bottom">
            <li>
              <Link
                className={`px-5 pb-2 nav-link ${
                  router.pathname === "/signup" ? "border-bottom active" : ""
                }`}
                href="/signup"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                className={`px-5 pb-2 nav-link ${
                  router.pathname === "/login" ? "border-bottom active" : ""
                }`}
                href="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </StyledNav>
      <main>
        <div className="container">
          {isPageLoading ? "Loading..." : children}
        </div>
      </main>
    </>
  );
};

export default AuthLayout;

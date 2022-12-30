import Image from "next/image";
import Link from "next/link";
import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import logo from "../../images/logo.png";
import AuthBtn from "./AuthBtn";
import { StyledHeader, StyledNav } from "./styles";

const Header: FC = () => {
  const [headerHeight, setHeaderHeight] = useState(76);
  const headerRef: MutableRefObject<HTMLElement | undefined> = useRef();

  function getHeaderHeight() {
    return headerRef?.current?.clientHeight || 76;
  }

  useEffect(() => {
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const currentHeaderHeight = getHeaderHeight();

      if (headerHeight !== currentHeaderHeight) setHeaderHeight(currentHeaderHeight);
    });

    resizeObserver.observe(headerRef.current);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  });
  return (
    <>
      <StyledHeader ref={headerRef} className="position-fixed vw-100 shadow-sm">
        <StyledNav className="navbar navbar-expand-lg bg-light">
          <div className="container ">
            <Link className="navbar-brand" href="/">
              <Image src={logo} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link fw-semibold px-4 active"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-4" href="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-4" href="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-4" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-semibold px-4" href="/blog">
                    Community
                  </Link>
                </li>
              </ul>

              <AuthBtn />
            </div>
          </div>
        </StyledNav>
      </StyledHeader>
      <div style={{ height: headerHeight }}></div>
    </>
  );
};

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;

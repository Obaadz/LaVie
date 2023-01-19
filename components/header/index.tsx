import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import { StyledHeader } from "./styles";

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
        <Navbar />
      </StyledHeader>
      <div style={{ height: headerHeight }}></div>
    </>
  );
};

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;

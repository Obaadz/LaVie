import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import logo from "../../images/logo.png";
import AuthBtn from "./AuthBtn";
import NavItem, { NavItemProps } from "./NavItem";
import { StyledNav } from "./styles";

const navLinks: NavItemProps[] = [
  { title: "Home", href: "/", isActive: true },
  {
    title: "Shop",
  },
  { title: "Blog" },
  { title: "About" },
  { title: "Community", href: "/blog" },
];

const navItems = navLinks.map((navItem) => (
  <NavItem
    key={navItem.title}
    title={navItem.title}
    href={navItem.href}
    isActive={navItem.isActive}
  />
));

const Navbar: FC = () => {
  return (
    <StyledNav className="navbar navbar-expand-lg bg-light">
      <div className="container">
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">{navItems}</ul>
          <AuthBtn />
        </div>
      </div>
    </StyledNav>
  );
};

export default Navbar;

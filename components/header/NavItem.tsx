import Link from "next/link";
import { FC } from "react";

type Props = {
  title: string;
  href?: string;
  isActive?: boolean;
};

const NavItem: FC<Props> = ({ title, href, isActive }) => {
  return (
    <li className="nav-item">
      <Link
        className={`nav-link fw-semibold px-4 ${isActive ? "active" : ""}`}
        aria-current="page"
        href={href ? href : "/" + title.toLowerCase()}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
export type { Props as NavItemType };

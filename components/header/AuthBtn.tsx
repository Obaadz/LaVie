import Link from "next/link";
import { StyledAuthBtn, StyledBtn } from "./styles";

const AuthBtn = () => {
  return (
    <StyledAuthBtn>
      <Link href="/signup">
        <StyledBtn className="btn btn-success px-5 px-lg-4 ms-4 mb-3 mb-lg-1 ms-lg-0">
          Sign Up
        </StyledBtn>
      </Link>
      <div className="nav-link">
        Or{" "}
        <Link href="/login" className="text-decoration-none">
          Sign In
        </Link>
      </div>
    </StyledAuthBtn>
  );
};

export default AuthBtn;

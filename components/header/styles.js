import styled from "styled-components";

export const StyledHeader = styled.header`
  font-family: "Poppins", sans-serif;
`;

export const StyledNav = styled.nav`
  --bs-navbar-color: rgb(0 0 0);
  --bs-navbar-hover-color: rgb(var(--secondary-color));
  --bs-navbar-active-color: rgb(var(--primary-color));
`;

export const StyledBtn = styled.button`
  --bs-btn-bg: rgb(var(--primary-color));
  --bs-btn-hover-bg: rgba(var(--primary-color), 0);
  --bs-btn-hover-color: rgb(var(--primary-color));
  --bs-btn-active-bg: rgb(var(--primary-color));
`;

export const StyledAuthBtn = styled.div`
  position: relative;

  .nav-link {
    --bs-link-color: rgb(var(--primary-color));
    --bs-link-hover-color: #6f6f6f;
    position: absolute;
    text-align: center;
    font-size: small;
    left: 0;
    transform: translateX(40%);

    @media (max-width: 991px) {
      & {
        bottom: -10px;
        transform: translateX(120%);
      }
    }
  }
  .nav-link::before {
    content: "";
    position: absolute;
    height: 1px;
    width: 60%;
    background-color: #000;
    left: -65%;
    top: 50%;
  }
  .nav-link::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 60%;
    background-color: #000;
    right: -65%;
    top: 50%;
  }
`;

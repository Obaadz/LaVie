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

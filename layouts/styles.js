import styled from "styled-components";

export const StyledNav = styled.nav`
  font-family: "Poppins", sans-serif;
  a {
    --bs-border-color: rgb(var(--primary-color));

    &.active {
      --bs-nav-link-color: rgb(var(--primary-color));
      --bs-nav-link-hover-color: rgb(var(--primary-color));
    }
  }
`;

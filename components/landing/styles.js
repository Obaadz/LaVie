import styled from "styled-components";

export const StyledLanding = styled.section`
  font-family: "Poppins", sans-serif;
  padding-top: 1rem;
  overflow: hidden;

  h1 {
    color: rgb(var(--primary-color));
  }

  p {
    color: #000000b5;
    line-height: 1.5;
  }
`;

export const StyledBtn = styled.button`
  --bs-btn-bg: rgb(var(--primary-color));
  --bs-btn-hover-bg: rgba(var(--primary-color), 0);
  --bs-btn-hover-color: rgb(var(--primary-color));
  --bs-btn-active-bg: rgb(var(--primary-color));
`;

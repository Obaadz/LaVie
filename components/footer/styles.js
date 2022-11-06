import styled from "styled-components";

export const StyledFooter = styled.footer`
  --bs-primary-rgb: var(--primary-color);
  --bs-secondary-rgb: 151, 151, 151;
  --bs-light-rgb: 250, 250, 250;
  --bs-nav-link-color: rgb(var(--bs-secondary-rgb));
  --bs-nav-link-hover-color: rgb(var(--secondary-color));
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  .form-control:focus {
    box-shadow: 0 0 0 0.25rem rgb(151 151 151 / 25%);
  }

  .social .nav-link {
    --bs-nav-link-color: rgb(0 0 0 / 90%);
    --bs-nav-link-hover-color: rgb(0 0 0 / 60%);
  }
`;

export const StyledBtn = styled.button`
  --bs-btn-color: rgb(var(--bs-secondary-rgb));
  --bs-btn-border-color: rgb(var(--bs-secondary-rgb));
  --bs-btn-hover-bg: rgb(var(--primary-color));
  --bs-btn-active-bg: rgb(var(--primary-color));
`;

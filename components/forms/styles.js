import styled from "styled-components";

export const StyledForm = styled.form`
  --bs-link-color: rgb(var(--primary-color));
  --bs-link-hover-color: #6f6f6f;
  font-family: "Poppins", sans-serif;

  button {
    --bs-btn-bg: rgb(var(--primary-color));
    --bs-btn-border-color: rgb(var(--primary-color));
    --bs-btn-hover-bg: rgba(var(--primary-color), 0);
    --bs-btn-hover-color: rgb(var(--primary-color));
    --bs-btn-hover-border-color: rgba(var(--secondary-color));
    --bs-btn-active-border-color: rgb(var(--primary-color));
    --bs-btn-active-bg: rgb(var(--primary-color));
  }

  label {
    font-weight: 500;
    color: #6f6f6f;
  }

  .form-control:focus,
  button:focus {
    box-shadow: 0 0 0 0.25rem rgb(151 151 151 / 25%);
  }
`;

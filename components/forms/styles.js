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
    --bs-btn-disabled-bg: rgb(var(--primary-color));
    --bs-btn-disabled-border-color: rgb(var(--primary-color));
  }

  label {
    font-weight: 500;
    color: #6f6f6f;
  }

  .form-control:focus,
  button:focus {
    box-shadow: 0 0 0 0.25rem rgb(151 151 151 / 25%);
  }
  .error-span {
    user-select: none;
    left: 20px;
    color: #ff0018;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .error {
    position: relative;
    label {
      color: #ff0018;
    }

    .form-control:focus,
    .form-control {
      box-shadow: 0 0 0 0.125rem #ff0018;
    }

    .error-span {
      opacity: 1;
    }
  }
`;

export const StyledOAuthHeader = styled.div`
  font-family: "Poppins", sans-serif;
  position: relative;
  color: rgb(var(--primary-color));
  font-size: small;
  text-align: center;
  user-select: none;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20vw;
    height: 1px;
    top: 50%;
    background-color: #000;
  }

  &::before {
    right: 100%;
  }
  &::after {
    left: 100%;
  }
`;

export const StyledOAuth = styled.div`
  font-family: "Poppins", sans-serif;
  a {
    color: rgb(var(--primary-color));
    border: 1px solid rgb(var(--primary-color));
    text-decoration: none;
    background-color: #fff;
    transition: color 0.3s, border 0.3s;

    &:hover {
      color: rgba(var(--secondary-color));
      border-color: rgba(var(--secondary-color));
    }
  }
`;

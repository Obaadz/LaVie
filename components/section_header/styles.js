import styled from "styled-components";

export const StyledSectionHeader = styled.h2`
  position: relative;
  font-weight: 600;
  color: black;
  width: max-content;
  max-width: 15ch;

  @media (min-width: 767px) {
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      border: 1px solid black;
      top: 40%;
      right: -60px;
    }

    &.two-lines::after {
      top: 20%;
      right: 25%;
    }
  }
`;

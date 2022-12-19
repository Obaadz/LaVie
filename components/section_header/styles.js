import styled from "styled-components";

export const StyledSectionHeader = styled.h2`
  position: relative;
  font-weight: 600;
  color: black;
  max-width: 10ch;

  &::after {
    content: "";
    position: absolute;
    width: 20%;
    border: 1px solid black;
    top: 20%;
    right: -10%;
  }
`;

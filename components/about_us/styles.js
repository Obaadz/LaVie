import styled from "styled-components";

export const StyledAboutUs = styled.section`
  font-family: "Poppins", sans-serif;

  p {
    color: #7d7b7bc7;
  }

  .image-content {
    position: relative;
    border: rgb(var(--primary-color)) 2px solid;
    border-radius: 10px;

    img {
      position: relative;
      left: 20px;
      top: -20px;
    }

    @media (max-width: 767px) {
      img {
        left: 10px;
        top: -10px;
      }
    }
  }
`;

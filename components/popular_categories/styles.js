import styled from "styled-components";

export const StyledPopularCategories = styled.section`
  font-family: "Poppins", sans-serif;

  @media (max-width: 767px) {
    .carousel-inner .carousel-item > div {
      display: none;
    }
    .carousel-inner .carousel-item > div:first-child {
      display: block;
    }
  }

  .carousel-inner .carousel-item.active,
  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev {
    display: flex;
  }

  /* medium and up screens */
  @media (min-width: 768px) {
    .carousel-inner .carousel-item-end.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(25%);
    }

    .carousel-inner .carousel-item-start.active,
    .carousel-inner .carousel-item-prev {
      transform: translateX(-25%);
    }
  }

  .carousel-inner .carousel-item-end,
  .carousel-inner .carousel-item-start {
    transform: translateX(0);
  }
`;

/*

            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-between">
                <div className="d-grid gap-3 text-center">
                  <Image src={category2} width={200} height={268} alt="..." />
                  <h3>Seeds</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category3} width={200} height={268} alt="..." />
                  <h3>Low Light Plants</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category4} width={200} height={268} alt="..." />
                  <h3>Bright Light Plants</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category1} width={200} height={268} alt="..." />
                  <h3>Tools</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-between">
                <div className="d-grid gap-3 text-center">
                  <Image src={category3} width={200} height={268} alt="..." />
                  <h3>Low Light Plants</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category4} width={200} height={268} alt="..." />
                  <h3>Bright Light Plants</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category1} width={200} height={268} alt="..." />
                  <h3>Tools</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category2} width={200} height={268} alt="..." />
                  <h3>Seeds</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="w-100 d-flex justify-content-between">
                <div className="d-grid gap-3 text-center">
                  <Image src={category4} width={200} height={268} alt="..." />
                  <h3>Bright Light Plants</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category1} width={200} height={268} alt="..." />
                  <h3>Tools</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category2} width={200} height={268} alt="..." />
                  <h3>Seeds</h3>
                </div>
                <div className="d-grid gap-3 text-center">
                  <Image src={category3} width={200} height={268} alt="..." />
                  <h3>Low Light Plants</h3>
                </div>
              </div>
            </div>

            */

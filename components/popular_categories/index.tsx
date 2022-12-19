import Image from "next/image";
import category1 from "../../images/category1.png";
import category2 from "../../images/category2.png";
import category3 from "../../images/category3.png";
import category4 from "../../images/category4.png";
import { FC, useEffect } from "react";
import SectionHeader from "../section_header";
import { StyledPopularCategories } from "./styles";

const PopularCategories: FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./multiple_carousel.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <StyledPopularCategories className="py-5">
      <div className="container">
        <SectionHeader title="Popular Categories" />
      </div>
      <div className="container-fluid">
        <div id="recipeCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col-md-3">
                <div className="card border-0 text-center gap-2">
                  <div className="card-img">
                    <Image
                      src={category1}
                      className="img-fluid"
                      width={200}
                      height={268}
                      alt="Tools"
                    />
                  </div>
                  <h3 className="card-title">Tools</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card border-0 text-center gap-2">
                  <div className="card-img">
                    <Image
                      src={category2}
                      className="img-fluid"
                      width={200}
                      height={268}
                      alt="Seeds"
                    />
                  </div>
                  <h3 className="card-title">Seeds</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card border-0 text-center gap-2">
                  <div className="card-img">
                    <Image
                      src={category3}
                      className="img-fluid"
                      width={200}
                      height={268}
                      alt="Low Light Plants"
                    />
                  </div>
                  <h3 className="card-title">Low Light Plants</h3>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col-md-3">
                <div className="card border-0 text-center gap-2">
                  <div className="card-img">
                    <Image
                      src={category4}
                      className="img-fluid"
                      width={200}
                      height={268}
                      alt="Bright Light Plants"
                    />
                  </div>
                  <h3 className="card-title">Bright Light Plants</h3>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            className="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </StyledPopularCategories>
  );
};

export default PopularCategories;

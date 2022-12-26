import Image from "next/image";
import seller_image1 from "../../images/seller_image1.png";
import seller_image2 from "../../images/seller_image2.png";
import seller_image3 from "../../images/seller_image3.png";
import seller_image4 from "../../images/seller_image4.jpeg";
import { FC, useEffect } from "react";
import SectionHeader from "../section_header";
import { StyledBestSeller } from "./styles";

const BestSeller: FC = () => {
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
    <StyledBestSeller className="py-5">
      <div className="container">
        <SectionHeader title="Best seller" />
      </div>
      <div className="container-fluid">
        <div id="recipeCarousel2" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <div className="col col-md-3">
                <div className="card border-0 text-center">
                  <div className="card-img">
                    <Image
                      src={seller_image1}
                      className="img-fluid"
                      width={200}
                      height={200}
                      alt="Tools"
                    />
                  </div>
                  <h3 className="card-title mt-2 mb-1">SPIDER PLANT</h3>
                  <p>190 EGP</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col col-md-3 pt-md-5 mt-md-5">
                <div className="card border-0 text-center">
                  <div className="card-img">
                    <Image
                      src={seller_image2}
                      className="img-fluid"
                      width={200}
                      height={200}
                      alt="Seeds"
                    />
                  </div>
                  <h3 className="card-title mt-2 mb-1">JUNIPER BONSAI</h3>
                  <p>100 EGP</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col col-md-3">
                <div className="card border-0 text-center">
                  <div className="card-img">
                    <Image
                      src={seller_image3}
                      className="img-fluid"
                      width={200}
                      height={200}
                      alt="Low Light Plants"
                    />
                  </div>
                  <h3 className="card-title mt-2 mb-1">SNAKE PLANT</h3>
                  <p>100 EGP</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="col col-md-3 pt-md-5 mt-md-5">
                <div className="card border-0 text-center">
                  <div className="card-img">
                    <Image
                      src={seller_image4}
                      className="img-fluid"
                      width={200}
                      height={200}
                      alt="Low Light Plants"
                    />
                  </div>
                  <h3 className="card-title mt-2 mb-1">CHOCO PLANT</h3>
                  <p>150 EGP</p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev bg-transparent w-aut"
            href="#recipeCarousel2"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </a>
          <a
            className="carousel-control-next bg-transparent w-aut"
            href="#recipeCarousel2"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </StyledBestSeller>
  );
};

export default BestSeller;

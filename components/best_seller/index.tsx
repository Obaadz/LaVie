import Image from "next/image";
import seller_image1 from "../../images/seller_image1.png";
import seller_image2 from "../../images/seller_image2.png";
import seller_image3 from "../../images/seller_image3.png";
import seller_image4 from "../../images/seller_image4.jpeg";
import { FC } from "react";
import SectionHeader from "../section_header";
import { StyledBestSeller } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import dynamic from "next/dynamic";

const BestSeller: FC = () => {
  return (
    <StyledBestSeller className="py-5">
      <div className="container">
        <SectionHeader title="Best seller" />
      </div>
      <div className="container-fluid">
        <Swiper
          spaceBetween={25}
          slidesPerView={2}
          loop={true}
          autoplay={true}
          breakpoints={{
            768: {
              spaceBetween: 50,
              slidesPerView: 4,
            },
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="card border-0 text-center">
              <div className="card-img">
                <Image
                  src={seller_image1}
                  className="img-fluid"
                  width={200}
                  height={200}
                  alt="Spider plant"
                />
              </div>
              <h3 className="card-title mt-2 mb-1">SPIDER PLANT</h3>
              <p>190 EGP</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card border-0 text-center mt-md-5">
              <div className="card-img">
                <Image
                  src={seller_image2}
                  className="img-fluid"
                  width={200}
                  height={200}
                  alt="Juniper bonsai"
                />
              </div>
              <h3 className="card-title mt-2 mb-1">JUNIPER BONSAI</h3>
              <p>100 EGP</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card border-0 text-center">
              <div className="card-img">
                <Image
                  src={seller_image3}
                  className="img-fluid"
                  width={200}
                  height={200}
                  alt="Snake Plants"
                />
              </div>
              <h3 className="card-title mt-2 mb-1">SNAKE PLANT</h3>
              <p>100 EGP</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card border-0 text-center mt-md-5">
              <div className="card-img">
                <Image
                  src={seller_image4}
                  className="img-fluid"
                  width={200}
                  height={200}
                  alt="Choco planet"
                />
              </div>
              <h3 className="card-title mt-2 mb-1">CHOCO PLANT</h3>
              <p>150 EGP</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledBestSeller>
  );
};

export default dynamic(() => Promise.resolve(BestSeller), {
  ssr: false,
});

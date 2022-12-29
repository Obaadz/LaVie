import Image from "next/image";
import category1 from "../../images/category1.png";
import category2 from "../../images/category2.png";
import category3 from "../../images/category3.png";
import category4 from "../../images/category4.png";
import { FC } from "react";
import SectionHeader from "../section_header";
import { StyledPopularCategories } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import dynamic from "next/dynamic";

const PopularCategories: FC = () => {
  return (
    <StyledPopularCategories className="py-5">
      <div className="container">
        <SectionHeader title="Popular Categories" isTwoLines={true} />
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </StyledPopularCategories>
  );
};

export default dynamic(() => Promise.resolve(PopularCategories), {
  ssr: false,
});

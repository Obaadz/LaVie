import Image from "next/image";
import about_us from "../../images/about_us.png";
import { FC } from "react";
import SectionHeader from "../section_header";
import { StyledAboutUs } from "./styles";

const AboutUs: FC = () => {
  return (
    <StyledAboutUs className="py-5">
      <div className="container">
        <SectionHeader title="About us" />
        <div className="row gap-4">
          <div className="col col-lg-6">
            <p>
              Welcome to La Vie, your number one source for planting. We're dedicated to
              giving you the very best of plants, with a focus on dependability, customer
              service and uniqueness. Founded in 2020, La Vie has come a long way from its
              beginnings in a home office our passion for helping people and give them
              some advices about how to plant and take care of plants. We now serve
              customers all over Egypt, and are thrilled to be a part of the eco-friendly
              wing
            </p>
          </div>
          <div className="d-flex col-lg justify-content-center justify-content-lg-end">
            <div className="image-content">
              <Image src={about_us} alt="About us" height={375} />
            </div>
          </div>
        </div>
      </div>
    </StyledAboutUs>
  );
};

export default AboutUs;

import Image from "next/image";
import mobile_app from "../../images/mobile_app.png";
import mobile_app_google_play from "../../images/mobile_app_google_play.png";
import mobile_app_apple_store from "../../images/mobile_app_apple_store.png";
import { FC } from "react";
import SectionHeader from "../section_header";
import { StyledBtn, StyledMobileApp } from "./styles";

const MobileApp: FC = () => {
  return (
    <StyledMobileApp className="py-5">
      <div className="container">
        <div className="row d-flex flex-column flex-lg-row text-center gap-4">
          <div className="col p-md-5 p-lg-0">
            <Image
              src={mobile_app}
              alt="Mobile application"
              className="w-100 h-100"
            />
          </div>
          <div className="d-flex flex-column justify-content-center col text-start">
            <SectionHeader title="Mobile Application" />
            <p>
              You can install La Vie mobile application and enjoy with new features, earn
              more points and get discounts. Also you can scan QR codes in your plant{"'"}
              s pots so that you can get discount on everything in the website up to 70%
            </p>
            <span className="fs-6 mb-4">install by:</span>
            <div className="d-flex flex-wrap gap-2 gap-md-3">
              <StyledBtn className="btn px-4">
                <Image src={mobile_app_google_play} alt="Play store" height={25} />
                <span className="ms-3">Play Store</span>
              </StyledBtn>
              <StyledBtn className="btn px-4">
                <Image src={mobile_app_apple_store} alt="Play store" height={25} />
                <span className="ms-3">App Store</span>
              </StyledBtn>
            </div>
          </div>
        </div>
      </div>
    </StyledMobileApp>
  );
};

export default MobileApp;

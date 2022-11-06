import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { StyledBtn, StyledFooter } from "./styles";
import logo from "../../images/logo.png";
import { GrFacebookOption, GrInstagram, GrTwitter } from "react-icons/gr";

const Footer: FC = () => {
  return (
    <StyledFooter className="bg-light">
      <div className="container d-flex flex-wrap py-5 justify-content-between">
        <section className="col-lg-3 col-md-5">
          <Image src={logo} alt="Logo" />
          <p className="text-uppercase text-secondary mt-2">
            <span className="text-primary">LA VIE</span> We{"'"}re dedicated to
            giving you the very best of plants, with a focus on dependability
          </p>
        </section>
        <section className="col-lg-2 col-md-5">
          <h3 className="fw-semibold fs-5 text-primary text-uppercase">
            sections
          </h3>
          <ul className="d-flex flex-column list-unstyled gap-2 text-secondary">
            <li>
              <Link className="text-decoration-none nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none nav-link" href="/category">
                Category
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none nav-link" href="/news">
                New
              </Link>
            </li>
            <li>
              <Link className="text-decoration-none nav-link" href="/contact">
                Request To Be Seller
              </Link>
            </li>
          </ul>
        </section>
        <section className="col-lg-2 col-md-5">
          <h3 className="fw-semibold fs-5 text-primary text-uppercase">
            CONTACT US
          </h3>
          <ul className="d-flex flex-column list-unstyled gap-2 text-secondary">
            <li>Phone 01244522323</li>
            <li>Phone 01331920394</li>
            <li>Email : rawan@gmail.com</li>
            <li>
              <address>Address : 6 October city ,Giza ,egypt</address>
            </li>
          </ul>
        </section>
        <section className="col-lg-3 col-md-5">
          <h3 className="fw-semibold fs-5 text-primary text-uppercase">
            SIGN FOR OUR NEWLETEER AND GET A 10% DISCOUNT
          </h3>
          <form className="d-flex input-group-sm">
            <input
              type="email"
              placeholder="Your Email Address"
              aria-label="Enter Your Mail"
              className="w-100 form-control"
            />
            <StyledBtn className="btn btn-outline-success px-3 ms-2 text-uppercase">
              Submit
            </StyledBtn>
          </form>
          <h3 className="fw-semibold fs-5 text-primary text-uppercase mt-4">
            OUR SOCIAL
          </h3>
          <ul className="social d-flex list-unstyled gap-3">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <GrFacebookOption />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <GrInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                <GrTwitter />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </StyledFooter>
  );
};

export default Footer;

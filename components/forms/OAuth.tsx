import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import { StyledOAuth, StyledOAuthHeader } from "./styles";

const OAuth = () => {
  return (
    <section>
      <div className="px-md-5 d-flex justify-content-center">
        <StyledOAuthHeader className="px-1 mt-2">
          or continue with
        </StyledOAuthHeader>
      </div>
      <StyledOAuth className="px-md-5 w-75 mx-auto mt-2 d-flex justify-content-between flex-column flex-lg-row gap-3 gap-lg-0">
        <a
          className="py-2 px-3 px-md-4 rounded-1"
          href="https://google.com"
          target="_blank"
          rel="noreferrer"
        >
          <FcGoogle />
          <span className="ms-2">Continue With Google</span>
        </a>
        <a
          className="py-2 px-3 px-md-4 rounded-1"
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <TfiFacebook color="#337fff" />
          <span className="ms-2">Continue With Facebook</span>
        </a>
      </StyledOAuth>
    </section>
  );
};

export default OAuth;

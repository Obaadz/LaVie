import Image from "next/image";
import last_blogs1 from "../../images/last_blogs1.png";
import last_blogs2 from "../../images/last_blogs2.png";
import last_blogs3 from "../../images/last_blogs3.png";
import { FC, useEffect } from "react";
import SectionHeader from "../section_header";
import { StyledLastBlogs } from "./styles";

const LastBlogs: FC = () => {
  return (
    <StyledLastBlogs className="py-5">
      <div className="container">
        <SectionHeader title="Blogs" />
        <div className="card-group row flex-column flex-md-row gap-4 justify-content-center align-items-center text-center text-lg-start gap-md-2 gap-lg-5">
          <div className="card shadow-sm col-10 col-lg-3 px-5 px-md-0">
            <Image
              src={last_blogs1}
              className="card-img-top"
              width={200}
              height={200}
              alt="blogs image"
            />
            <div className="card-header pb-0">2 days ago</div>
            <div className="card-body">
              <h5 className="card-title">5 Simple Tips treat plant </h5>
              <p className="card-text">
                leaf, in botany, any usually flattened green outgrowth from the stem of
              </p>
            </div>
          </div>
          <div className="card shadow-sm col-10 col-lg-3 px-5 px-md-0">
            <Image
              src={last_blogs2}
              className="card-img-top"
              width={200}
              height={200}
              alt="blogs image"
            />{" "}
            <div className="card-header pb-0">2 days ago</div>
            <div className="card-body">
              <h5 className="card-title">5 Simple Tips treat plant </h5>
              <p className="card-text">
                leaf, in botany, any usually flattened green outgrowth from the stem of
              </p>
            </div>
          </div>
          <div className="card shadow-sm col-10 col-lg-3 px-5 px-md-0">
            <Image
              src={last_blogs3}
              className="card-img-top"
              width={200}
              height={200}
              alt="blogs image"
            />{" "}
            <div className="card-header pb-0">2 days ago</div>
            <div className="card-body">
              <h5 className="card-title">5 Simple Tips treat plant </h5>
              <p className="card-text">
                leaf, in botany, any usually flattened green outgrowth from the stem of
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledLastBlogs>
  );
};

export default LastBlogs;

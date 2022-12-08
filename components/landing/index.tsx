import Image from "next/image";
import big_tree from "../../images/big_tree.webp";
import type { FC } from "react";
import { StyledBtn, StyledLanding } from "./styles";

const Landing: FC = () => {
  return (
    <StyledLanding>
      <div className="row align-items-center">
        <div className="col-5 tree d-none d-lg-block">
          <Image src={big_tree} alt="tree" width={400} />
        </div>
        <div className="col px-4 px-lg-0 pe-lg-5 mb-5 text-center text-lg-start">
          <h1>Perfect way to plant in house</h1>
          <p>
            leaf, in botany, any usually flattened green outgrowth from the stem
            of a vascular plant. As the primary sites of photosynthesis, leaves
            manufacture food for plants, which in turn ultimately nourish and
            sustain all land animals.
          </p>
          <StyledBtn className="btn btn-success fw-bold px-5 px-lg-4">
            Explore Now
          </StyledBtn>
        </div>
      </div>
    </StyledLanding>
  );
};

export default Landing;

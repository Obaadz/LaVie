import type { FC } from "react";
import { StyledSectionHeader } from "./styles";
type Props = {
  title: String;
};

const SectionHeader: FC<Props> = ({ title }) => {
  return <StyledSectionHeader className="ps-5 pb-3">{title}</StyledSectionHeader>;
};

export default SectionHeader;

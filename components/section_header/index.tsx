import type { FC } from "react";
import { StyledSectionHeader } from "./styles";
type Props = {
  title: String;
  isTwoLines?: Boolean;
};

const SectionHeader: FC<Props> = ({ title, isTwoLines }) => {
  return (
    <StyledSectionHeader className={`${isTwoLines && "two-lines"} pb-3`}>
      {title}
    </StyledSectionHeader>
  );
};

export default SectionHeader;

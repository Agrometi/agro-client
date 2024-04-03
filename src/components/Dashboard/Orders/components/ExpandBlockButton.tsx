import { getTimeString } from "@/utils";

import * as Styled from "./styles/expandBlockButton.styled";
import { ArrowTriangleIcon } from "@/components/Layouts/Icons";

type ExpandBlockButtonT = {
  year: number;
  month: number;
  total: number;
  isOpen: boolean;
  onToggle: () => void;
};

const ExpandBlockButton: React.FC<ExpandBlockButtonT> = ({
  year,
  month,
  total,
  isOpen,
  onToggle,
}) => {
  return (
    <Styled.ExpandBlockButton $isOpen={isOpen} onClick={onToggle}>
      <span>
        {getTimeString(
          new Date(`${month}-01-${year}`).toString(),
          "monthYearConfig"
        )}
        &nbsp; ({total})
      </span>

      <ArrowTriangleIcon />
    </Styled.ExpandBlockButton>
  );
};

export default ExpandBlockButton;

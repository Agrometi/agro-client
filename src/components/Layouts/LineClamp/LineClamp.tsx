import { Text } from "@/components/Layouts";
import styled from "styled-components";

type LineClampT = {
  text: string;
  clamp?: number;
  showTitle?: boolean;
  onClick?: () => void;
  showEmptyLines?: boolean;
  sx?: React.CSSProperties;
  component?: keyof JSX.IntrinsicElements;
};

const LineClampedBox = styled.div<{ $clamp: number }>`
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: ${({ $clamp }) => $clamp};
  width: 100%;
`;

const LineClamp: React.FC<LineClampT> = ({
  text,
  sx = {},
  clamp = 1,
  showTitle = false,
  component = "div",
  onClick = () => {},
  showEmptyLines = false,
}) => {
  return (
    <LineClampedBox
      style={sx}
      as={component}
      $clamp={clamp}
      data-line-clamp
      onClick={onClick}
      title={showTitle ? text : ""}
    >
      <Text text={text} showEmptyLines={showEmptyLines} />
    </LineClampedBox>
  );
};

export default LineClamp;

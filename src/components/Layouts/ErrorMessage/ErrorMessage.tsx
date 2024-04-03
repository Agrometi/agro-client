import styled, { css } from "styled-components";

type StyledMessageT = {
  $size: "sm" | "md";
  $type: "normal" | "stand";
  $align: "start" | "center";
};

const StyledMessage = styled.p<StyledMessageT>`
  color: ${({ theme }) => theme.colors.red} !important;
  width: 100%;
  text-align: ${({ $align }) => $align};
  grid-column: 1/6;

  font-size: ${({ theme, $size }) =>
    $size === "sm" ? theme.fontSize.sm : theme.fontSize.md};

  ${({ theme, $type }) =>
    $type === "normal"
      ? ""
      : css`
          font-size: ${theme.fontSize.lg};
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
`;

type ErrorMessageT = {
  message: string;
  size?: StyledMessageT["$size"];
  type?: StyledMessageT["$type"];
  align?: StyledMessageT["$align"];
};

const ErrorMessage: React.FC<ErrorMessageT> = ({
  message,
  type = "normal",
  align = "start",
  size = "sm",
}) => {
  return (
    <StyledMessage $type={type} $align={align} $size={size} data-error-message>
      {message}
    </StyledMessage>
  );
};

export default ErrorMessage;

import * as Styled from "./button.styled";

type ButtonT = {
  fillType?: "filled" | "outlined";
  show?: "danger" | "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button: React.FC<ButtonT> = ({
  children,
  show = "primary",
  fillType = "filled",
  ...props
}) => {
  return (
    <Styled.Button $show={show} $fillType={fillType} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;

import * as Styled from "./form.styled";
import { ErrorMessage } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";

type TextFieldT = {
  message: string;
  label?: string;
  hasError: boolean;
  type?: "text" | "password" | "number";
  fieldProps: HookFormTextFieldT;
} & React.ComponentProps<"input">;

const TextField: React.FC<TextFieldT> = ({
  label,
  message,
  hasError,
  fieldProps,
  type = "text",
  ...props
}) => {
  return (
    <Styled.TextField data-text-field>
      {label && <label htmlFor={fieldProps.name}>{label}</label>}

      <input
        {...props}
        type={type}
        {...fieldProps}
        id={fieldProps.name}
        className="text-field__input"
      />

      {hasError && <ErrorMessage message={message} />}
    </Styled.TextField>
  );
};

export default TextField;

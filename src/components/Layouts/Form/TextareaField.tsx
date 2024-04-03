import * as Styled from "./form.styled";
import { ErrorMessage } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";

type TextareaFieldT = {
  label?: string;
  message: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
} & React.ComponentProps<"textarea">;

const TextareaField: React.FC<TextareaFieldT> = ({
  label,
  message,
  hasError,
  fieldProps,
  ...props
}) => {
  return (
    <Styled.TextareaField>
      {label && <label htmlFor={fieldProps.name}>{label}</label>}

      <textarea
        {...props}
        {...fieldProps}
        className={`text-field__input ${props.className || ""}`}
      />

      {hasError && <ErrorMessage message={message || ""} />}
    </Styled.TextareaField>
  );
};

export default TextareaField;

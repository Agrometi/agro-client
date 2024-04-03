import { useState } from "react";

import * as Styled from "./form.styled";
import EyeButton from "./components/EyeButton";
import { ErrorMessage } from "@/components/Layouts";

import { HookFormTextFieldT } from "@/interface/form.types";

type TextFieldPasswordT = {
  message: string;
  label?: string;
  hasError: boolean;
  fieldProps: HookFormTextFieldT;
};

const TextFieldPassword: React.FC<TextFieldPasswordT> = ({
  label,
  message,
  hasError,
  fieldProps,
}) => {
  const [inputType, setInputType] = useState<"text" | "password">("password");

  const onToggleType = (toggle: boolean) =>
    setInputType(() => (toggle ? "password" : "text"));

  return (
    <Styled.TextFieldPassword>
      {label && <label htmlFor={fieldProps.name}>{label}</label>}

      <div className="password-field__wrapper">
        <input
          type={inputType}
          {...fieldProps}
          id={fieldProps.name}
          className="text-field__input"
        />

        <EyeButton shown={inputType === "password"} toggleType={onToggleType} />
      </div>

      {hasError && <ErrorMessage message={message} />}
    </Styled.TextFieldPassword>
  );
};

export default TextFieldPassword;

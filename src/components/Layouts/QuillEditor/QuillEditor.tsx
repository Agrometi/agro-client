import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { quillConfig as quill } from "@/utils";

import { ErrorMessage } from "@/components/Layouts";
import * as Styled from "./quill.styles";

type QuillEditorT = {
  readonly?: boolean;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  hasError?: boolean;
  message?: string;
};

const QuillEditor: React.FC<QuillEditorT> = ({
  readonly = false,
  value = "",
  setValue,
  hasError,
  message,
}) => {
  const onChange = (value: string) => {
    setValue && setValue(value);
  };

  return (
    <Styled.QuillContainer>
      <ReactQuill
        {...quill}
        id="quill"
        value={value}
        onChange={onChange}
        readOnly={readonly}
        theme={readonly ? "bubble" : quill.theme}
      />

      {hasError && <ErrorMessage message={message || ""} />}
    </Styled.QuillContainer>
  );
};

export default QuillEditor;

import { useEffect } from "react";
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

  useEffect(() => {
    const quillDoc = document.querySelector(".quill");

    if (!quillDoc) return;

    const imgContainers = quillDoc.querySelectorAll("p:has(img)");

    Array.from(imgContainers).forEach((el) => {
      if (el.children.length === 1)
        el.setAttribute("className", "img-container");
      else if (el.children.length > 1)
        el.setAttribute("className", "multiple-img-container");
      // el.setAttribute(
      //   "style",
      //   "display:grid;grid-template-columns:repeat(2,1fr)"
      // );
    });
  }, [value]);

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

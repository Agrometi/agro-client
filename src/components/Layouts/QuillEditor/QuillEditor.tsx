import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { quillConfig as quill } from "@/utils";

import { ErrorMessage, ModalSlider } from "@/components/Layouts";
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

  const [sliderImages, setSliderImages] = useState<Array<string>>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(NaN);

  useEffect(() => {
    if (!readonly) return;

    const quillEl = document.querySelector(".quill");
    if (!quillEl) return;

    const imageElements = quillEl.querySelectorAll("img");

    const imgSources = Array.from(imageElements)
      .map((imgEl) => imgEl.getAttribute("src") || "")
      .filter((src) => src !== "");

    setSliderImages(() => [...imgSources]);
  }, [readonly, value]);

  useEffect(() => {
    const quillEl = document.querySelector(".quill");

    if (!quillEl) return;

    const imageElements = quillEl.querySelectorAll("img");

    const onImageClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLElement;

      const imgSrc =
        target.tagName === "IMG" && target.getAttribute("src")
          ? target.getAttribute("src")
          : "";

      if (!imgSrc) return;

      const activeImgIndex = sliderImages.findIndex((img) => img === imgSrc);
      setActiveSlideIndex(activeImgIndex);
    };

    imageElements.forEach((el) => el.addEventListener("click", onImageClick));

    return () => {
      imageElements.forEach((el) =>
        el.removeEventListener("click", onImageClick)
      );
    };
  }, [sliderImages, activeSlideIndex]);

  return (
    <>
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

      {readonly && sliderImages.length > 0 && !isNaN(activeSlideIndex) && (
        <ModalSlider
          images={sliderImages}
          startIndex={activeSlideIndex}
          onClose={() => setActiveSlideIndex(NaN)}
        />
      )}
    </>
  );
};

export default QuillEditor;

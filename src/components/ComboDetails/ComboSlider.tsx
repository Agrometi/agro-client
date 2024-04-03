import { useState, useEffect } from "react";

import * as Styled from "./comboSlider.styled";
import { CloseIcon, ArrowLeftIcon } from "@/components/Layouts/Icons";

type ComboSliderT = {
  images: Array<string>;
  startIndex: number;
  onClose: () => void;
};

const ComboSlider: React.FC<ComboSliderT> = ({
  images,
  onClose,
  startIndex,
}) => {
  const [activeIndex, setActiveIndex] = useState(NaN);

  const onNextSlide = () =>
    setActiveIndex((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));

  const onPreviousSlide = () =>
    setActiveIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    if (!images || images.length < 1) return;

    setActiveIndex(startIndex);
  }, [startIndex, images]);

  return !isNaN(activeIndex) && activeIndex >= 0 ? (
    <Styled.ComboSlider>
      <button className="slider__arrow-btn left" onClick={onPreviousSlide}>
        <ArrowLeftIcon />
      </button>

      <div className="image-wrapper">
        <figure>
          <img
            src={images[activeIndex]}
            alt=""
            title=""
            width="100%"
            loading="eager"
          />
        </figure>
      </div>

      <button className="slider__arrow-btn right" onClick={onNextSlide}>
        <ArrowLeftIcon />
      </button>

      <button onClick={onClose} className="slider__close-btn">
        <CloseIcon />
      </button>
    </Styled.ComboSlider>
  ) : (
    <></>
  );
};

export default ComboSlider;

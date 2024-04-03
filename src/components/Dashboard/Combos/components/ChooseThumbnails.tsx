import { memo } from "react";

import { useCreateComboContext } from "@/Providers/useProviders";

import * as Styled from "./styles/chooseThumbnails.styled";
import { ArrowLeftIcon } from "@/components/Layouts/Icons";

type ChooseThumbnailsT = {
  hidden: boolean;
};

const ChooseThumbnails: React.FC<ChooseThumbnailsT> = memo(({ hidden }) => {
  const {
    existingAssets,
    onDoneSelectMedia,
    addedExistingAssets,
    onToggleExistingAsset,
  } = useCreateComboContext();

  return (
    <Styled.ChooseThumbnails style={{ display: hidden ? "none" : "flex" }}>
      <div className="assets-box--head">
        <button
          onClick={onDoneSelectMedia}
          className="assets-box--head__back-btn"
        >
          <ArrowLeftIcon />
        </button>

        <span>
          არჩეულია &nbsp;
          <strong>
            {addedExistingAssets.length}/{existingAssets.length}
          </strong>
        </span>
      </div>

      {existingAssets.length > 0 ? (
        <div className="assets-box__list-wrapper">
          <div className="assets-box__list">
            {existingAssets.map((src) =>
              src.endsWith(".webp") ? (
                <img
                  key={src}
                  src={src}
                  alt={src}
                  title={src}
                  width="100%"
                  loading="lazy"
                  onClick={() => onToggleExistingAsset(src)}
                  className={
                    addedExistingAssets.includes(src) ? "selected" : ""
                  }
                />
              ) : (
                <video
                  key={src}
                  src={src}
                  width="100%"
                  loop={true}
                  muted={true}
                  autoPlay={true}
                  onClick={() => onToggleExistingAsset(src)}
                  className={
                    addedExistingAssets.includes(src) ? "selected" : ""
                  }
                />
              )
            )}
          </div>
        </div>
      ) : (
        <p className="added-products__assets-msg">
          დამატებული პროდუქტები არ ფიქსირდება
        </p>
      )}

      <button className="assets-box__done-btn" onClick={onDoneSelectMedia}>
        დასრულება
      </button>
    </Styled.ChooseThumbnails>
  );
});

export default ChooseThumbnails;

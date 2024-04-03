import { useState, useEffect } from "react";

import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import ReactImageMagnify from "react-image-magnify";

import * as Styled from "./productSlider.styled";
import { PlayIcon } from "@/components/Layouts/Icons";

type ProductSliderT = {
  assets: Array<string>;
};

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 4,
  },
};

const ProductSlider: React.FC<ProductSliderT> = ({ assets }) => {
  const [activeAsset, setActiveAsset] = useState("");

  const onChangeAsset = (src: string) => setActiveAsset(src);

  useEffect(() => {
    setActiveAsset(assets[0]);
  }, [assets]);

  return (
    <Styled.ProductSlider>
      {activeAsset &&
        (activeAsset.endsWith(".webp") ? (
          <ReactImageMagnify
            {...{
              smallImage: {
                width: 550,
                height: 400,
                src: activeAsset,
                isFluidWidth: true,
                alt: "Wristwatch by Ted Baker London",
              },
              largeImage: {
                width: 800,
                height: 800,
                src: activeAsset,
              },
            }}
            enlargedImagePosition="over"
            className="magnify-app--box"
            imageClassName="magnify-app--box__img"
          />
        ) : (
          <figure className="active-slide__video-fig">
            <video src={activeAsset} muted={true} autoPlay={true} loop={true} />
          </figure>
        ))}

      <Carousel
        responsive={responsive}
        infinite={true}
        centerMode={true}
        transitionDuration={300}
        slidesToSlide={2}
      >
        {assets.map((asset) => (
          <figure
            key={asset}
            onClick={() => onChangeAsset(asset)}
            className={`slider-thumbnail__fig ${
              activeAsset === asset ? "active" : ""
            }`}
          >
            {asset.endsWith(".webp") ? (
              <img src={asset} alt="" />
            ) : (
              <>
                <PlayIcon />
                <video src={asset} />
              </>
            )}
          </figure>
        ))}
      </Carousel>
    </Styled.ProductSlider>
  );
};

export default ProductSlider;

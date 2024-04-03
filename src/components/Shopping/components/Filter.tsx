import { useState, memo } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { useFilterContext } from "@/Providers/useProviders";

import { SelectField } from "@/components/Layouts";
import * as Styled from "./styles/filter.styled";

type FilterT = {
  boxType: "grid" | "flex";
};

const Filter: React.FC<FilterT> = memo(({ boxType }) => {
  const {
    filter,
    priceRange,
    onPriceRangeChange,
    category,
    onClearCategory,
    onSelectCategory,
    size,
    sizeStatus,
    onClearSize,
    onSelectSize,
  } = useFilterContext();

  const [showFilter, setShowFilter] = useState(false);

  return (
    <Styled.Filter
      className={`all-products__filter ${showFilter ? "expanded" : "closed"} ${
        boxType === "grid" ? "grid-box" : "flex-box"
      }`}
    >
      <button
        className="expand-filter__btn"
        onClick={() => setShowFilter((prev) => !prev)}
      >
        {showFilter ? "ფილტრის დახურვა" : "ფილტრი"}
      </button>

      <div className="price-filter--box">
        <RangeSlider
          value={priceRange}
          min={filter.minPrice}
          max={filter.maxPrice}
          onInput={onPriceRangeChange}
        />

        <div className="price-filter--box__value">
          <p>
            <span>მინ:</span>
            &nbsp;
            <span>{priceRange[0]}</span>
          </p>

          <p>
            <span>მაქს:</span>
            &nbsp;
            <span>{priceRange[1]}</span>
          </p>
        </div>
      </div>

      <SelectField
        value={category}
        placeholder="კატეგორია"
        onSelect={onSelectCategory}
        onCleanUpField={onClearCategory}
        options={filter.categories.map((category) => ({
          title: category.title,
          value: category._id,
        }))}
      />

      {category.value && (
        <SelectField
          value={size}
          placeholder="ზომა"
          onSelect={onSelectSize}
          onCleanUpField={onClearSize}
          loading={sizeStatus.loading}
          options={filter.sizes.map((size) => ({ title: size, value: size }))}
        />
      )}
    </Styled.Filter>
  );
});

export default Filter;

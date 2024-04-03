import { memo } from "react";

import { comboStore } from "@/store";

import ChosenItemCard from "./ChosenItemCard";
import * as Styled from "./styles/chosenItemsRow.styled";

type AddedItemsRowT = {};

const ChosenItemsRow: React.FC<AddedItemsRowT> = memo(() => {
  const addedProducts = comboStore.use.addedProducts();

  const addedProductsSize = new Set(addedProducts.map((product) => product._id))
    .size;

  const priceSum = addedProducts.reduce(
    (acc, p) => (acc += p.price * p.size.selectedCount),
    0
  );

  const totalProductsCount = addedProducts.reduce(
    (acc, p) => (acc += p.size.selectedCount),
    0
  );

  return (
    <Styled.ChosenItemsRow>
      <div className="added-items__list-head">
        <span>
          დამატებულია {addedProductsSize} პროდუქტი ({totalProductsCount})
        </span>

        <div>
          <span>ჯამური ფასი:</span>
          &nbsp;
          <span>{priceSum}</span>
        </div>
      </div>

      <div className="added-items__list-wrapper">
        <div className="added-items__list">
          {[...addedProducts]
            .sort((a, b) => b._id.toString().localeCompare(a._id.toString()))
            .map((product) => (
              <ChosenItemCard
                className="added-item"
                product={product}
                key={`${product._id}-${product.size.size}`}
              />
            ))}
        </div>
      </div>
    </Styled.ChosenItemsRow>
  );
});

export default ChosenItemsRow;

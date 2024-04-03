import React, { useEffect } from "react";

import { comboStore } from "@/store";
import { useSizeChange } from "@/hooks/utils";

import * as Styled from "./styles/itemToChooseCard.styled";
import { PackageCheckIcon } from "@/components/Layouts/Icons";
import { LineClamp, Button, Counter } from "@/components/Layouts";

import { ProductT } from "@/interface/db/product.types";

type ItemToChooseCardT = {
  product: ProductT;
};

const ItemToChooseCard: React.FC<ItemToChooseCardT> = ({ product }) => {
  const addProduct = comboStore.use.addProduct();
  const addedProducts = comboStore.use.addedProducts();

  const {
    size,
    setSize,
    onQuantityChange,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = useSizeChange(product.sizes);

  /** Watch Size change and reset size state based on change*/
  const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenSize = product.sizes.find((size) => size === e.target.value);

    if (!chosenSize) return;

    const inAddedProductsIndex = addedProducts.findIndex(
      (addedProduct) =>
        addedProduct._id === product._id &&
        addedProduct.size.size === chosenSize
    );

    if (inAddedProductsIndex >= 0) {
      const addedProductSize = addedProducts[inAddedProductsIndex].size;

      setSize(() => ({
        size: chosenSize,
        selectedCount: addedProductSize.selectedCount,
      }));
    } else {
      setSize(() => ({
        size: chosenSize,
        selectedCount: 1,
      }));
    }
  };

  /**
   * add product to store to access globally.
   * quantity manipulation on added products effects directly on the store state.
   * added product quantity is bind bidirectional way between itemsToChoose and chosenItems (controlled by useEffects bellow)
   */
  const onAddProduct = () => {
    if (size.selectedCount === 0) return;
    const { sizes, ...sizeOmittedProduct } = product;
    addProduct({ ...sizeOmittedProduct, size });
  };

  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));
  const isSelected = addedProducts.some((p) => p._id === product._id);
  const isSelectedCurrentSize = addedProducts.some(
    (p) => p._id === product._id && size.size === p.size.size
  );

  /**
   * if current product is already added and quantity is manipulated from chosenItems
   * this will effects on itemsToChoose as well in the case to detect available product count of specific size
   */
  useEffect(() => {
    if (isSelectedCurrentSize) {
      const selectedCurrentSizeIndex = addedProducts.findIndex(
        (p) => p._id === product._id && size.size === p.size.size
      );

      setSize((prev) => ({
        ...prev,
        size: addedProducts[selectedCurrentSizeIndex].size.size,
        selectedCount:
          addedProducts[selectedCurrentSizeIndex].size.selectedCount,
      }));
    } else {
      const nativeSize = product.sizes.find(
        (nativeSize) => nativeSize === size.size
      );

      if (nativeSize)
        setSize((prev) => ({
          ...prev,
          size: nativeSize,
          selectedCount: 1,
        }));
    }
  }, [isSelectedCurrentSize, addedProducts]);

  return (
    <Styled.ItemToChooseCard className={isSelected ? "selected" : ""}>
      {isSelectedCurrentSize && (
        <PackageCheckIcon className="package-checked" />
      )}

      <figure className="item--fig">
        <img
          src={thumbnail}
          alt={product.title}
          title={product.title}
          width="100"
          loading="lazy"
        />
      </figure>

      <div className="item--details">
        <LineClamp clamp={2} component="h4" text={product.title} />

        <div>
          <span>
            <strong>ფასი:</strong>
          </span>
          &nbsp;
          <span>{product.price}₾</span>
        </div>

        <div className="item--actions">
          <div className="size-box">
            <span>
              <strong>ზომა:</strong>
            </span>
            &nbsp;
            <select name="size" value={size.size} onChange={onSizeChange}>
              {product.sizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="total-quantity--box">
            <span>
              <strong>მაქს.</strong>
              &nbsp;
            </span>
            <span
              className={`size-quantity ${size.quantity === 0 ? "danger" : ""}`}
            >
              {size.quantity}
            </span>
          </div> */}

          <Counter
            value={size.selectedCount}
            onChangeCount={onQuantityChange}
            onDecreaseCount={onDecreaseQuantity}
            onIncreaseCount={onIncreaseQuantity}
          />

          <Button
            onClick={onAddProduct}
            className="add-btn"
            disabled={size.selectedCount === 0}
            show={size.selectedCount === 0 ? "danger": "primary" }
          >
            ADD
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ItemToChooseCard;

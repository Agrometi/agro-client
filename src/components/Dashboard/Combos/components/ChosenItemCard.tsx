import React from "react";

import { comboStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/itemToChooseCard.styled";
import { LineClamp, Button, Counter } from "@/components/Layouts";
import { DeleteIcon } from "@/components/Layouts/Icons";

import { SelectedProductT } from "@/interface/store/combo.store.types";

type ChosenItemCardT = {
  product: SelectedProductT;
  className?: string;
};

const ChosenItemCard: React.FC<ChosenItemCardT> = ({ product, className }) => {
  const { setMultipleParams, getParam, removeMultipleParams } =
    useSearchParams();

  const removeProduct = comboStore.use.removeProduct();
  const changeAddedProductCount = comboStore.use.changeAddedProductCount();
  const increaseAddedProductCount = comboStore.use.increaseAddedProductCount();
  const decreaseAddedProductCount = comboStore.use.decreaseAddedProductCount();

  const onIncreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();

    increaseAddedProductCount({
      productId: product._id,
      size: product.size.size,
    });
  };

  const onDecreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();

    decreaseAddedProductCount({
      productId: product._id,
      size: product.size.size,
    });
  };

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeAddedProductCount({
      count: +e.target.value,
      productId: product._id,
      size: product.size.size,
    });

  const reviewedProductId = getParam("product");
  const reviewedProductSize = getParam("product-size");

  const onRemoveProduct = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeProduct({ productId: product._id, size: product.size.size });

    if (
      reviewedProductId === product._id &&
      reviewedProductSize === product.size.size
    )
      removeMultipleParams(["product", "product-size"]);
  };

  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));

  const onItemReview = () =>
    setMultipleParams([
      { key: "product", value: product._id },
      { key: "product-size", value: product.size.size },
    ]);

  return (
    <Styled.ItemToChooseCard onClick={onItemReview} className={className || ""}>
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
            <strong>ჯამური ფასი:</strong>
          </span>
          &nbsp;
          <span>{product.price * product.size.selectedCount}₾</span>
        </div>

        <div className="item--actions">
          <div className="size-box">
            <span>
              <strong>ზომა:</strong>
            </span>
            &nbsp;
            <span>{product.size.size}</span>
          </div>

          {/* <div className="total-quantity--box">
            <span>
              <strong>მაქს. რაოდენობა:</strong>
              &nbsp;
            </span>
            <span
              className={`size-quantity ${
                product.size.quantity === 0 ? "danger" : ""
              }`}
            >
              {product.size.quantity}
            </span>
          </div> */}

          <Counter
            value={product.size.selectedCount}
            onChangeCount={onQuantityChange}
            onIncreaseCount={onIncreaseQuantity}
            onDecreaseCount={onDecreaseQuantity}
          />

          <Button
            show="danger"
            onClick={onRemoveProduct}
            className="add-btn danger"
            disabled={product.size.selectedCount === 0}
          >
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </Styled.ItemToChooseCard>
  );
};

export default ChosenItemCard;

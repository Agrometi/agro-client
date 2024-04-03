import { memo, useEffect, useState } from "react";

import { comboStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

import { Text } from "@/components/Layouts";
import * as Styled from "./styles/comboActiveItem.styled";

import { SelectedProductT } from "@/interface/store/combo.store.types";

type ComboActiveItemT = {};

const ComboActiveItem: React.FC<ComboActiveItemT> = memo(() => {
  const { getParam } = useSearchParams();
  const addedProducts = comboStore.use.addedProducts();

  const [product, setProduct] = useState<SelectedProductT | undefined>(
    undefined
  );

  const reviewedProductId = getParam("product");
  const reviewedProductSize = getParam("product-size");

  useEffect(() => {
    if ((!reviewedProductId || !reviewedProductSize) && product)
      return setProduct(undefined);

    const candidateProduct = addedProducts.find(
      (product) =>
        product._id === reviewedProductId &&
        product.size.size === reviewedProductSize
    );

    if (!candidateProduct) return;

    setProduct(candidateProduct);
  }, [reviewedProductSize, reviewedProductId]);

  const thumbnail = product?.assets?.find((asset) => asset?.endsWith(".webp"));

  return (
    <Styled.ComboActiveItem>
      {product ? (
        <>
          <figure className="active-item--fig">
            <img
              src={thumbnail}
              alt={product.title}
              title={product.title}
              width="100%"
              loading="lazy"
            />
          </figure>

          <p className="product-title">{product.title}</p>

          <Text className="product-description" text={product.description} />

          <div className="grid-box">
            <div className="grid-box__sub">
              <span>ფასი:</span>
              &nbsp;
              <span>{product.price}</span>
            </div>

            <div className="grid-box__sub">
              <span>ჯამური ფასი:</span>
              &nbsp;
              <span>{product.price * product.size.selectedCount}</span>
            </div>

            <div className="grid-box__sub">
              <span>ზომა:</span>
              &nbsp;
              <span>{product.size.size}</span>
            </div>

            {/* <div className="grid-box__sub">
              <span>მაქს. რაოდენობა:</span>
              &nbsp;
              <span>{product.size.quantity}</span>
            </div> */}

            <div className="grid-box__sub">
              <span>შერჩეული რაოდენობა:</span>
              &nbsp;
              <span>{product.size.selectedCount}</span>
            </div>

            {/* <div className="grid-box__sub">
              <span>ხელმისაწვდომია:</span>
              &nbsp;
              <span>{product.size.quantity - product.size.selectedCount}</span>
            </div> */}
          </div>
        </>
      ) : (
        <figure className="empty-stand">
          <img src="/assets/agro-products.jpg" alt="" width="100%" />
        </figure>
      )}
    </Styled.ComboActiveItem>
  );
});

export default ComboActiveItem;

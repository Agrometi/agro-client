import { useEffect } from "react";

import { useCart } from "@/hooks/utils";
import { useSizeChange } from "@/hooks/utils";

import { CloseIcon, CheckIcon } from "@/components/Layouts/Icons";
import { LineClamp, Counter } from "@/components/Layouts";

import { CartProductT } from "@/interface/store/shoppingCart.store.types";

type ShoppingCartItemT = {
  product: CartProductT;
};

const ShoppingCartItem: React.FC<ShoppingCartItemT> = ({ product }) => {
  const {
    size,
    setSize,
    onDecreaseQuantity,
    onIncreaseQuantity,
    onQuantityChange,
  } = useSizeChange([product.size.size], false);

  const { onRemove, onSetQuantity } = useCart();

  const onRemoveItem = () =>
    onRemove({
      productId: product._id,
      size: product.size.size,
      productType: product.productType,
    });

  const onProductQuantityChange = (count: number) =>
    onSetQuantity({
      size: size.size,
      quantity: count,
      productId: product._id,
      productType: product.productType,
    });

  useEffect(() => {
    setSize((prev) => ({ ...prev, ...product.size }));
  }, []);

  const isProductType = product.productType === "product";

  return (
    <li>
      <div className="remove-btn">
        <button onClick={onRemoveItem}>
          <CloseIcon />
        </button>
      </div>

      <figure className="product-fig">
        <img
          src={product.thumbnail}
          alt={product.title}
          title={product.title}
          width={120}
          height={65}
          loading="lazy"
        />
      </figure>

      <div className="product-title">
        <LineClamp
          clamp={2}
          showTitle={true}
          text={product.title}
          sx={{ textAlign: "center", fontWeight: 600 }}
        />
      </div>

      <div className={isProductType ? "is-unavailable" : "is-available"}>
        <p>{!isProductType ? <CheckIcon /> : <CloseIcon />}</p>
      </div>

      <div className="product-price">
        <p>{product.price}₾</p>
      </div>

      <div className={`product-size ${!isProductType ? "is-unavailable" : ""}`}>
        {!isProductType ? <CloseIcon /> : <p>{product.size.size}</p>}
      </div>

      <div className="product-counter">
        <Counter
          value={size.selectedCount}
          onChangeCount={(e) => {
            const count = onQuantityChange(e);
            onProductQuantityChange(count);
          }}
          onDecreaseCount={() => {
            const count = onDecreaseQuantity();
            onProductQuantityChange(count);
          }}
          onIncreaseCount={() => {
            const count = onIncreaseQuantity();
            onProductQuantityChange(count);
          }}
        />
      </div>
    </li>
  );
};

export default ShoppingCartItem;

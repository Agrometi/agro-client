import getOrderedProductNestedField from "./functions/getOrderedProductNestedField";
import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

type OrderReviewTableItemT = {
  product: GroupedOrdersListedOrderCommonProductT;
};

const OrderReviewTableItem: React.FC<OrderReviewTableItemT> = ({ product }) => {
  const checkIsDeletedProduct = (
    product: GroupedOrdersListedOrderCommonProductT
  ): boolean =>
    (product.productType === "PRODUCT" && !product.product) ||
    (product.productType === "COMBO" && !product.combo);

  const isDeletedProduct = checkIsDeletedProduct(product);

  const priceSum = isDeletedProduct
    ? 0
    : product.productType === "PRODUCT"
    ? product.quantity *
      (getOrderedProductNestedField(product, "price") as number) *
      Number(product.size as string)
    : product.quantity *
      (getOrderedProductNestedField(product, "price") as number);

  const productPriceString = `${
    product.sizeUnit ? `1${product.sizeUnit} -` : ""
  } ${getOrderedProductNestedField(product, "price")}₾`;

  const productTitle = isDeletedProduct ? (
    <span style={{ color: "red", fontWeight: "600" }}>წაშლილი პროდუქტი</span>
  ) : (
    getOrderedProductNestedField(product, "title")
  );

  return (
    <div className="invoice-body__grid-col">
      <p>{productTitle}</p>
      <p>
        {product.productType === "COMBO" ? <>&mdash;</> : product.size}&nbsp;
        {product.sizeUnit}
      </p>
      <p>{product.quantity}</p>
      <p>{isDeletedProduct ? <>&mdash;</> : productPriceString}</p>
      <p>{isDeletedProduct ? <>&mdash;</> : priceSum + "₾"}</p>
    </div>
  );
};

export default OrderReviewTableItem;

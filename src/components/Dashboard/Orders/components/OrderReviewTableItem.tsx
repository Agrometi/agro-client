import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

type OrderReviewTableItemT = {
  product: GroupedOrdersListedOrderCommonProductT;
};

const OrderReviewTableItem: React.FC<OrderReviewTableItemT> = ({ product }) => {
  const priceSum =
    product.productType === "PRODUCT"
      ? product.quantity * product.price * Number(product.size as string)
      : product.quantity * product.price;

  const productPriceString = `${
    product.sizeUnit ? `1${product.sizeUnit} -` : ""
  } ${product.price}₾`;

  return (
    <div className="invoice-body__grid-col">
      <p>{product.title}</p>
      <p>
        {product.productType === "COMBO" ? <>&mdash;</> : product.size}&nbsp;
        {product.sizeUnit}
      </p>
      <p>{product.quantity}</p>
      <p>{productPriceString}</p>
      <p>{priceSum + "₾"}</p>
    </div>
  );
};

export default OrderReviewTableItem;

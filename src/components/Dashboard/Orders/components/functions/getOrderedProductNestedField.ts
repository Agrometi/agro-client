import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

const getOrderedProductNestedField = (
  product: GroupedOrdersListedOrderCommonProductT,
  key: string
) => {
  const isProductType = product?.productType === "PRODUCT";
  const nestedProduct = isProductType ? product?.product : product?.combo;
  return nestedProduct?.[key as keyof typeof nestedProduct];
};

export default getOrderedProductNestedField;

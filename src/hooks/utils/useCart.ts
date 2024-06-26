import {
  RemoveProductParamsT,
  SetProductQuantityParamsT,
} from "@/interface/store/shoppingCart.store.types";
import { shoppingCartStore } from "@/store";
import { ComboT } from "@/interface/db/combo.types";
import { ProductT } from "@/interface/db/product.types";

type OnAddProductArgsT = {
  size: number;
  sizeUnit: string;
  quantity: number;
  productType: "combo" | "product";
  product: ProductT | Partial<ComboT>;
};

export default function useCart() {
  const add = shoppingCartStore.use.addProduct();
  const remove = shoppingCartStore.use.removeProduct();
  const setQuantity = shoppingCartStore.use.setQuantity();

  const onAdd = ({ product, ...params }: OnAddProductArgsT) => {
    const selectedSize: { size: number; selectedCount: number } =
      params.productType === "product"
        ? {
            selectedCount: params.quantity,
            size: (product as ProductT).sizes.find((s) => s === params.size)!,
          }
        : { selectedCount: params.quantity, size: NaN };

    add({
      _id: product._id!,
      sizeUnit: params.sizeUnit,
      size: selectedSize,
      title: product.title!,
      price: product.price!,
      thumbnail: product.assets![0],
      productType: params.productType,
      description: product.description || "",
    });
  };

  const onRemove = (params: RemoveProductParamsT) => remove(params);

  const onSetQuantity = (params: SetProductQuantityParamsT) =>
    setQuantity(params);

  return { onAdd, onRemove, onSetQuantity };
}

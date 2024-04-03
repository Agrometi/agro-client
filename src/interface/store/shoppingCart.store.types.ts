type ShoppingCartStateT = {
  products: Array<CartProductT>;
};

type CartProductT = {
  _id: string;
  price: number;
  title: string;
  thumbnail: string;
  productType: "combo" | "product";
  size: { size: string; selectedCount: number };
};

type RemoveProductParamsT = {
  size: string;
  productId: string;
  productType: "combo" | "product";
};

type SetProductQuantityParamsT = {
  size: string;
  quantity: number;
  productId: string;
  productType: "combo" | "product";
};

type ShoppingCartActionsT = {
  addProduct: (params: CartProductT) => void;
  removeProduct: (params: RemoveProductParamsT) => void;
  setQuantity: (params: SetProductQuantityParamsT) => void;
  cleanUpCart: () => void;
};

type ShoppingCartStoreT = ShoppingCartStateT & ShoppingCartActionsT;

export type {
  CartProductT,
  ShoppingCartStateT,
  ShoppingCartStoreT,
  RemoveProductParamsT,
  SetProductQuantityParamsT,
};

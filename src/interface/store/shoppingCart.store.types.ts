type ShoppingCartStateT = {
  products: Array<CartProductT>;
};

type CartProductT = {
  _id: string;
  price: number;
  title: string;
  thumbnail: string;
  productType: "combo" | "product";
  sizeUnit: string;
  size: { size: number; selectedCount: number };
};

type RemoveProductParamsT = {
  size: number;
  productId: string;
  productType: "combo" | "product";
};

type SetProductQuantityParamsT = {
  size: number;
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

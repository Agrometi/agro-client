type ComboT = {
  _id: string;
  title: string;
  description: string;
  price: number;
  assets: Array<string>;
  products: Array<{
    product: {
      _id: string;
      title: string;
      description: string;
      price: number;
      assets: Array<string>;
      sizes: Array<string>;
    };
    size: {
      size: string;
      quantity: number;
    };
  }>;
  createdAt: string;
};

type ComboShortT = {
  _id: string;
  title: string;
  description: string;
  price: string;
  assets: Array<string>;
  products: [{ product: string; size: { size: string; quantity: number } }];
};

export type { ComboT, ComboShortT };

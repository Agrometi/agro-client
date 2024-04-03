import { produce } from "immer";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";

import {
  ShoppingCartStateT,
  ShoppingCartStoreT,
} from "@/interface/store/shoppingCart.store.types";
import { createSelectors } from "./helpers";

const initialState: ShoppingCartStateT = {
  products: [],
};

const useShoppingCartStore = create<ShoppingCartStoreT>()(
  devtools(
    immer(
      persist(
        (set, get) => ({
          ...initialState,

          addProduct(params) {
            const candidateProductIndex = getCandidateProductIndex({
              get,
              candidateProductId: params._id,
              productType: params.productType,
              candidateProductSize: params.size.size,
            });

            set((state) =>
              produce(state, (draft) => {
                if (candidateProductIndex >= 0) {
                  const product = draft.products[candidateProductIndex];

                  product.size.selectedCount += params.size.selectedCount;
                } else draft.products.push(params);
              })
            );
          },

          removeProduct(params) {
            const candidateProductIndex = getCandidateProductIndex({
              get,
              productType: params.productType,
              candidateProductSize: params.size,
              candidateProductId: params.productId,
            });

            set((state) =>
              produce(state, (draft) => {
                draft.products.splice(candidateProductIndex, 1);
              })
            );
          },

          setQuantity(params) {
            const candidateProductIndex = getCandidateProductIndex({
              get,
              productType: params.productType,
              candidateProductSize: params.size,
              candidateProductId: params.productId,
            });

            set((state) =>
              produce(state, (draft) => {
                draft.products[candidateProductIndex].size.selectedCount =
                  params.quantity;
              })
            );
          },

          cleanUpCart() {
            set(() => ({ products: initialState.products }));
          },
        }),
        {
          name: "agro-cart",
          partialize: (state) => ({
            products: state.products,
          }),
        }
      )
    ),
    {
      name: "agro-cart",
    }
  )
);

export default createSelectors(useShoppingCartStore);

const getCandidateProductIndex = (params: {
  get: () => ShoppingCartStoreT;
  productType: "combo" | "product";
  candidateProductId: string;
  candidateProductSize: string;
}): number => {
  const currentProducts = params.get().products;

  const isProductType = params.productType === "product";

  const candidateProductIndex = isProductType
    ? currentProducts.findIndex(
        (product) =>
          product._id === params.candidateProductId &&
          product.size.size === params.candidateProductSize
      )
    : currentProducts.findIndex(
        (product) => product._id === params.candidateProductId
      );

  return candidateProductIndex;
};

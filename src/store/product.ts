import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { PRODUCT_PER_PAGE } from "@/config/config";
import { getStatus, createSelectors } from "./helpers";
import { axiosPrivateQuery, axiosPrivateFormDataQuery } from "@/services/axios";

import {
  ProductStateT,
  ProductStoreT,
} from "@/interface/store/product.store.types";
import { ProductT } from "@/interface/db/product.types";
import {
  GetAllProductsResponseT,
  ProductsFilterResponseT,
} from "@/interface/API/products.api.types";

const initialState: ProductStateT = {
  product: {
    _id: "",
    title: "",
    description: "",
    category: {
      _id: "",
      query: "",
      title: "",
    },
    assets: [],
    price: NaN,
    sizes: [],
  },

  readSingleStatus: getStatus("IDLE"),

  products: [],
  currentPage: 0,
  hasMore: false,
  readStatus: getStatus("IDLE"),

  productsFilter: {
    minPrice: 0,
    maxPrice: 1,
    sizes: [],
    categories: [],
  },

  productsFilterStatus: getStatus("IDLE"),
  productsSizeFilterStatus: getStatus("IDLE"),

  relatedProducts: [],
  relatedStatus: getStatus("IDLE"),

  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
};

const useProductStore = create<ProductStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async create(data) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          const requestBody = {
            ...data,
            assets: [],
            new_assets: data.assets,
            category: data.category.value,
            sizes: data.sizes.map((s) => s.size),
          };

          await axiosPrivateFormDataQuery.post("/products", requestBody);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async update({ data, params }) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          const requestBody = {
            title: data.title,
            price: data.price,
            description: data.description,
            category: data.category.value,
            sizes: data.sizes.map((s) => s.size),
            assets_to_delete: data.assets_to_delete,
            assets: data.assets.filter((asset) => typeof asset === "string"),
            new_assets: data.assets.filter((asset) => asset instanceof File),
          };

          await axiosPrivateFormDataQuery.put(
            `/products/${params.productId}`,
            requestBody
          );

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async delete(params) {
        try {
          set(() => ({ deleteStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.delete(`/products/${params.productId}`);

          set((state) => ({
            products: state.products.filter(
              (product) => product._id !== params.productId
            ),
            deleteStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ deleteStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async get(params) {
        try {
          set(() => ({ readSingleStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ProductT> = await axiosPrivateQuery.get(
            `/products/${params.productId}`
          );

          set(() => ({
            product: data,
            readSingleStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readSingleStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUp() {
        set(() => ({
          product: initialState.product,
          readSingleStatus: initialState.readSingleStatus,
        }));
      },

      async getAll(args) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { currentPage, hasMore, data } = await getProductsQuery({
            page: args.page,
            queryStr: args.query || "",
            limit: PRODUCT_PER_PAGE,
          });

          set(() => ({
            hasMore,
            currentPage,
            products: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getAllPaginated(args) {
        try {
          const { currentPage, hasMore, data } = await getProductsQuery({
            page: args.page,
            queryStr: args.query || "",
            limit: args.limit || PRODUCT_PER_PAGE,
          });

          set(() => ({
            hasMore,
            currentPage,
            products: [...get().products, ...data],
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpAll() {
        set(() => ({
          hasMore: initialState.hasMore,
          currentPage: initialState.currentPage,
          products: initialState.products,
          readStatus: initialState.readStatus,
        }));
      },

      async getProductsFilter() {
        try {
          set(() => ({ productsFilterStatus: getStatus("PENDING") }));

          const {
            data: { minPrice, maxPrice, categories },
          }: AxiosResponse<ProductsFilterResponseT> =
            await axiosPrivateQuery.get("/products/filter");

          const currentFilter = get().productsFilter;

          set(() => ({
            productsFilterStatus: getStatus("SUCCESS"),
            productsFilter: {
              ...currentFilter,
              minPrice,
              maxPrice,
              categories,
            },
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ productsFilterStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getProductsSizeFilter(params) {
        try {
          set(() => ({ productsSizeFilterStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<string>> =
            await axiosPrivateQuery.get(
              `/products/filter/${params.categoryId}`
            );

          const currentFilter = get().productsFilter;

          set(() => ({
            productsSizeFilterStatus: getStatus("SUCCESS"),
            productsFilter: { ...currentFilter, sizes: data },
          }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ productsSizeFilterStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpProductsFilter() {
        set(() => ({
          productsFilter: initialState.productsFilter,
          productsSizeFilterStatus: initialState.productsSizeFilterStatus,
        }));
      },

      async getAllRelated(params) {
        try {
          set(() => ({ relatedStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<ProductT>> =
            await axiosPrivateQuery.get(
              `/products/${params.productId}/${params.categoryId}`
            );

          set(() => ({
            relatedProducts: data,
            relatedStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ relatedStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpAllRelated() {
        set(() => ({
          relatedStatus: initialState.relatedStatus,
          relatedProducts: initialState.relatedProducts,
        }));
      },
    })),
    { name: "agro_products" }
  )
);

export default createSelectors(useProductStore);

async function getProductsQuery(params: {
  queryStr: string;
  page: number;
  limit: number;
}): Promise<GetAllProductsResponseT> {
  try {
    const queryStrings = [
      params.queryStr.replace("?", ""),
      `page=${params.page}&limit=${params.limit}`,
    ];

    const queryStr = queryStrings.join(params.queryStr ? "&" : "");

    const { data }: AxiosResponse<GetAllProductsResponseT> =
      await axiosPrivateQuery.get(`/products?${queryStr}`);

    return data;
  } catch (error: any) {
    const message = logger(error);
    throw new Error(message);
  }
}

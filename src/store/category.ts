import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { AxiosResponse } from "axios";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";
import { getStatus, createSelectors } from "./helpers";
import { CATEGORIES_PER_PAGE } from "@/config/config";

import {
  CategoryStateT,
  CategoryStoreT,
} from "@/interface/store/category.store.types";
import { CategoryT } from "@/interface/db/category.types";
import { GetAllCategoriesResponseT } from "@/interface/API/category.api.types";

const initialState: CategoryStateT = {
  hasMore: false,
  currentPage: 0,
  categories: [],
  readStatus: getStatus("IDLE"),
  createStatus: getStatus("IDLE"),
  deleteStatus: getStatus("IDLE"),
};

const useCategoryStore = create<CategoryStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async create(data) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post("/categories", data);

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

          await axiosPrivateQuery.patch(
            `/categories/${params.categoryId}`,
            data
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

          await axiosPrivateQuery.delete(`/categories/${params.categoryId}`);

          set((state) => ({
            categories: state.categories.filter(
              (category) => category._id !== params.categoryId
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
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<CategoryT> =
            await axiosPrivateQuery.get(`${params.categoryId}`);
          console.log(data);

          set(() => ({ readStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getAll(args) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { currentPage, hasMore, data } = await getCategoriesQuery({
            page: args.page,
            queryStr: args.query || "",
            limit: CATEGORIES_PER_PAGE,
          });

          set(() => ({
            hasMore,
            currentPage,
            categories: data,
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
          const { currentPage, hasMore, data } = await getCategoriesQuery({
            page: args.page!,
            queryStr: args.query || "",
            limit: CATEGORIES_PER_PAGE,
          });

          set(() => ({
            hasMore,
            currentPage,
            categories: [...get().categories, ...data],
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
          categories: initialState.categories,
          readStatus: initialState.readStatus,
        }));
      },
    })),
    { name: "agro_categories" }
  )
);

export default createSelectors(useCategoryStore);

async function getCategoriesQuery(params: {
  queryStr: string;
  page: number;
  limit: number;
}): Promise<GetAllCategoriesResponseT> {
  try {
    const queryStrings = [
      params.queryStr.replace("?", ""),
      `page=${params.page}&limit=${params.limit}`,
    ];

    const queryStr = queryStrings.join(params.queryStr ? "&" : "");

    const { data }: AxiosResponse<GetAllCategoriesResponseT> =
      await axiosPrivateQuery.get(`/categories?${queryStr}`);

    return data;
  } catch (error: any) {
    const message = logger(error);
    throw new Error(message);
  }
}

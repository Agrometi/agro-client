import { LoadingStatusT } from "@/interface/store/common.types";
import { CategoryT } from "@/interface/db/category.types";
import * as CategoryAPI_T from "@/interface/API/category.api.types";

type CategoryStateT = {
  hasMore: boolean;
  currentPage: number;
  categories: Array<CategoryT>;
  readStatus: LoadingStatusT;
  createStatus: LoadingStatusT;
  deleteStatus: LoadingStatusT;
};

type CategoryActionsT = {
  create: (data: CategoryAPI_T.CreateCategoryArgsT) => Promise<void>;

  update: (args: CategoryAPI_T.UpdateCategoryArgsT) => Promise<void>;

  delete: (params: CategoryAPI_T.DeleteCategoryArgsT) => Promise<void>;

  get: (params: CategoryAPI_T.GetCategoryArgsT) => Promise<void>;

  getAll: (args: CategoryAPI_T.GetAllCategoriesArgsT) => Promise<void>;

  getAllPaginated: (args: CategoryAPI_T.GetAllCategoriesArgsT) => Promise<void>;

  cleanUpAll: () => void;
};

type CategoryStoreT = CategoryStateT & CategoryActionsT;

export type { CategoryStateT, CategoryStoreT };

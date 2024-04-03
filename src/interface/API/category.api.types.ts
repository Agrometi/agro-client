import { CategoryT } from "@/interface/db/category.types";
import { CategorySchemaT } from "@/utils/validations/dashboard/CategorySchema";

type GetAllCategoriesArgsT = {
  page: number;
  query?: string;
};

type GetAllCategoriesResponseT = {
  hasMore: boolean;
  currentPage: number;
  data: Array<CategoryT>;
};

type CreateCategoryArgsT = CategorySchemaT;

type UpdateCategoryArgsT = {
  data: CategorySchemaT;
  params: { categoryId: string };
};

type DeleteCategoryArgsT = {
  categoryId: string;
};

type GetCategoryArgsT = {
  categoryId: string;
};

export type {
  GetAllCategoriesResponseT,
  GetAllCategoriesArgsT,
  CreateCategoryArgsT,
  UpdateCategoryArgsT,
  DeleteCategoryArgsT,
  GetCategoryArgsT,
};

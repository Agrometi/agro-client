import { ProductT } from "@/interface/db/product.types";
import { ProductSchemaT } from "@/utils/validations/dashboard/ProductSchema";
import { CategoryT } from "../db/category.types";

type GetAllProductsArgsT = {
  page: number;
  query?: string;
  limit?: number;
};

type GetAllProductsResponseT = {
  hasMore: boolean;
  currentPage: number;
  data: Array<ProductT>;
};

type GetAllRelatedArgsT = {
  productId: string;
  categoryId: string;
};

type CreateProductArgsT = ProductSchemaT;

type UpdateProductArgsT = {
  data: ProductSchemaT;
  params: { productId: string };
};

type DeleteProductArgsT = { productId: string };

type GetProductArgsT = { productId: string };

type GetProductsSizeFilterArgsT = { categoryId: string };

type ProductsFilterResponseT = {
  minPrice: number;
  maxPrice: number;
  categories: Array<CategoryT>;
};

export type {
  GetAllProductsResponseT,
  GetAllProductsArgsT,
  CreateProductArgsT,
  UpdateProductArgsT,
  DeleteProductArgsT,
  GetProductArgsT,
  GetAllRelatedArgsT,
  ProductsFilterResponseT,
  GetProductsSizeFilterArgsT,
};

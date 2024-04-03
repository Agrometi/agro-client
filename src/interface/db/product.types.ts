import { CategoryT } from "@/interface/db/category.types";

type ProductT = {
  _id: string;
  title: string;
  description: string;
  sizes: Array<string>;
  price: number;
  assets: Array<string>;
  category: CategoryT;
};

type ProductsFilterT = {
  minPrice: number;
  maxPrice: number;
  sizes: Array<string>;
  categories: Array<CategoryT>;
};

export type { ProductT, ProductsFilterT };

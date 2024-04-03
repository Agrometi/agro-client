import { useEffect } from "react";

import { productStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

export default function useGetProductsFilterQuery() {
  const { getParam } = useSearchParams();

  const selectedCategory = getParam("category");

  const filter = productStore.use.productsFilter();
  const status = productStore.use.productsFilterStatus();
  const cleanUp = productStore.use.cleanUpProductsFilter();
  const get = productStore.use.getProductsFilter();
  const getSizeFilter = productStore.use.getProductsSizeFilter();
  const sizeStatus = productStore.use.productsSizeFilterStatus();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    getSizeFilter({ categoryId: selectedCategory });
  }, [selectedCategory]);

  return { status, filter, sizeStatus };
}

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { productStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { GetAllProductsArgsT } from "@/interface/API/products.api.types";

export default function useGetProductsQuery(
  runOnMount = false,
  filter = false
) {
  const { search } = useLocation();
  const { getParam } = useSearchParams();

  const searchParam = getParam("search");
  const sortParam = getParam("sort");
  const categoryParam = getParam("category");
  const sizeParam = getParam("size");
  const maxPriceParam = getParam("price[gte]");
  const minPriceParam = getParam("price[lte]");

  const status = productStore.use.readStatus();
  const getAll = productStore.use.getAll();
  const getAllPaginated = productStore.use.getAllPaginated();

  const data = productStore.use.products();
  const hasMore = productStore.use.hasMore();
  const currentPage = productStore.use.currentPage();
  const total = data.length;

  const cleanUpAll = productStore.use.cleanUpAll();

  const getPaginatedProductsQuery = async (
    params?: GetAllProductsArgsT | undefined
  ) => {
    await getAllPaginated(
      params ? params : { page: currentPage + 1, query: search || "" }
    );
  };

  useEffect(() => {
    if (!runOnMount || filter) return;
    getAll({ page: 1 });
  }, [runOnMount]);

  useEffect(() => {
    if (!runOnMount || !filter) return;

    const timeoutId = setTimeout(() => {
      getAll({ page: 1, query: search });
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    runOnMount,
    searchParam,
    sortParam,
    categoryParam,
    sizeParam,
    maxPriceParam,
    minPriceParam,
  ]);

  useEffect(() => {
    return () => {
      cleanUpAll();
    };
  }, []);

  return {
    data,
    total,
    status,
    hasMore,
    cleanUpAll,
    getPaginatedProductsQuery,
  };
}

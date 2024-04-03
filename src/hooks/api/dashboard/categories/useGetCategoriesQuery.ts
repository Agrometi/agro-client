import { useEffect } from "react";

import { categoryStore } from "@/store";

export default function useGetCategoriesQuery() {
  const status = categoryStore.use.readStatus();
  const getAll = categoryStore.use.getAll();
  const getAllPaginated = categoryStore.use.getAllPaginated();

  const data = categoryStore.use.categories();
  const hasMore = categoryStore.use.hasMore();
  const currentPage = categoryStore.use.currentPage();
  const total = data.length;

  const cleanUpAll = categoryStore.use.cleanUpAll();

  const getPaginatedCategoriesQuery = async () => {
    await getAllPaginated({
      page: currentPage + 1,
    });
  };

  useEffect(() => {
    getAll({ page: 1 });

    return () => {
      cleanUpAll();
    };
  }, []);

  return { status, data, hasMore, total, getPaginatedCategoriesQuery };
}

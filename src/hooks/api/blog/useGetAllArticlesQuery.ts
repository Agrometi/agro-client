/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { blogStore } from "@/store";

export default function useGetAllArticlesQuery(staticSearch?: string) {
  const { search } = useLocation();

  const getAllArticles = blogStore.use.getAllArticles();
  const getPaginatedArticles = blogStore.use.getPaginatedArticles();

  const status = blogStore.use.allArticlesStatus();

  const hasMore = blogStore.use.hasMore();
  const currentPage = blogStore.use.currentPage();

  const data = blogStore.use.articles();
  const total = data.length;

  const cleanUpArticles = blogStore.use.cleanUpArticles();

  const getQueryString = () =>
    staticSearch
      ? search
        ? search.concat(`&${staticSearch}`)
        : staticSearch
      : search || "";

  const getArticlesQuery = async () => {
    getPaginatedArticles({ query: getQueryString(), page: currentPage + 1 });
  };

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      await getAllArticles({ query: getQueryString(), page: 1 });
    }, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, staticSearch]);

  useEffect(() => {
    return () => {
      cleanUpArticles();
    };
  }, []);

  return { data, hasMore, total, getArticlesQuery, status };
}

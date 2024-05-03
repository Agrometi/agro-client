/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { blogStore } from "@/store";

export default function useArticleQuery() {
  const { articleId } = useParams();

  const getArticle = blogStore.use.getArticle();

  const status = blogStore.use.articleStatus();
  const article = blogStore.use.article();

  const cleanUpArticle = blogStore.use.cleanUpArticle();

  useEffect(() => {
    if (!articleId) return;

    getArticle({ articleId });
  }, [articleId]);

  useEffect(() => {
    return () => {
      cleanUpArticle();
    };
  }, []);

  return { status, article };
}

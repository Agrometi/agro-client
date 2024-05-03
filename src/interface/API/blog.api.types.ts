import { ArticleT } from "@/interface/db/blog.types";

type CreateArticleArgsT = {
  title: string;
  body: string;
  category: string;
};

type UpdateArticleArgsT = CreateArticleArgsT & {
  articleId: string;
};

type DeleteArticleArgsT = {
  articleId: string;
};

type GetArticleArgsT = {
  articleId: string;
};

type GetArticleResponseT = ArticleT;

type GetAllArticlesArgsT = {
  query: string;
  page: number;
};

type GetAllArticlesResponseT = {
  data: Array<ArticleT>;
  currentPage: number;
  hasMore: boolean;
};

export type {
  CreateArticleArgsT,
  UpdateArticleArgsT,
  DeleteArticleArgsT,
  GetArticleArgsT,
  GetArticleResponseT,
  GetAllArticlesArgsT,
  GetAllArticlesResponseT,
};

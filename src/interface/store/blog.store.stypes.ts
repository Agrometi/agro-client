import { ArticleT } from "@/interface/db/blog.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import * as BlogAPI_T from "@/interface/API/blog.api.types";

type ArticleStateT = {
  hasMore: boolean;
  currentPage: number;
  article: ArticleT;
  articles: Array<ArticleT>;

  createArticleStatus: LoadingStatusT;
  deleteArticleStatus: LoadingStatusT & { articleId: string };
  articleStatus: LoadingStatusT;
  allArticlesStatus: LoadingStatusT;
};

type ArticleActionsT = {
  // LOCALS
  cleanUpArticle: () => void;
  cleanUpArticles: () => void;
  // API
  createArticle: (args: BlogAPI_T.CreateArticleArgsT) => Promise<void>;
  updateArticle: (args: BlogAPI_T.UpdateArticleArgsT) => Promise<void>;
  deleteArticle: (args: BlogAPI_T.DeleteArticleArgsT) => Promise<void>;
  getArticle: (args: BlogAPI_T.GetArticleArgsT) => Promise<void>;
  getAllArticles: (args: BlogAPI_T.GetAllArticlesArgsT) => Promise<void>;
  getPaginatedArticles: (args: BlogAPI_T.GetAllArticlesArgsT) => Promise<void>;
};

type ArticleStoreT = ArticleStateT & ArticleActionsT;

export type { ArticleStateT, ArticleStoreT };

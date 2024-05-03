import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import { AxiosResponse } from "axios";

import { ARTICLES_PER_PAGE } from "@/config/config";
import { createSelectors, getStatus } from "./helpers";
import { axiosPrivateQuery } from "@/services/axios";

import * as BlogAPI_T from "@/interface/API/blog.api.types";
import { ArticleT } from "@/interface/db/blog.types";

import {
  ArticleStateT,
  ArticleStoreT,
} from "@/interface/store/blog.store.stypes";

const initialState: ArticleStateT = {
  hasMore: false,
  currentPage: 0,

  article: {
    _id: "",
    title: "",
    category: "",
    body: "",
    createdAt: "",
  },
  articleStatus: getStatus("IDLE"),

  articles: [],
  allArticlesStatus: getStatus("IDLE"),

  createArticleStatus: getStatus("IDLE"),
  deleteArticleStatus: { ...getStatus("IDLE"), articleId: "" },
};

const useArticlesStore = create<ArticleStoreT>()(
  devtools(
    immer((set, get) => ({
      ...initialState,

      async createArticle(args) {
        try {
          set(() => ({ createArticleStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(`/blog`, {
            title: args.title,
            body: args.body,
            category: args.category,
          });

          set(() => ({ createArticleStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createArticleStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async updateArticle(args) {
        try {
          set(() => ({ createArticleStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.put(`/blog/${args.articleId}`, {
            title: args.title,
            body: args.body,
            category: args.category,
          });

          set(() => ({ createArticleStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ createArticleStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async deleteArticle(args) {
        try {
          set(() => ({
            deleteArticleStatus: {
              ...getStatus("PENDING"),
              articleId: args.articleId,
            },
          }));

          await axiosPrivateQuery.delete(`/blog/${args.articleId}`);

          set(() => ({
            articles: get().articles.filter(
              (article) => article._id !== args.articleId
            ),
            deleteArticleStatus: {
              ...getStatus("SUCCESS"),
              articleId: "",
            },
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({
            deleteArticleStatus: {
              ...getStatus("FAIL"),
              articleId: args.articleId,
              message,
            },
          }));
          throw error;
        }
      },

      async getArticle(args) {
        try {
          set(() => ({ articleStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<ArticleT> = await axiosPrivateQuery.get(
            `/blog/${args.articleId}`
          );

          set(() => ({ articleStatus: getStatus("SUCCESS"), article: data }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ articleStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpArticle() {
        set(() => ({
          article: initialState.article,
          articleStatus: getStatus("IDLE"),
        }));
      },

      async getAllArticles(args) {
        try {
          set(() => ({ allArticlesStatus: getStatus("PENDING") }));

          const queryStrings = [
            args.query.replace("?", ""),
            `page=${args.page}&limit=${ARTICLES_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<BlogAPI_T.GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(`/blog?${queryStr}`);

          set(() => ({
            hasMore,
            currentPage,
            articles: data,
            allArticlesStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({ allArticlesStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getPaginatedArticles(args) {
        try {
          const queryStrings = [
            args.query.replace("?", ""),
            `page=${args.page}&limit=${ARTICLES_PER_PAGE}`,
          ];

          const queryStr = queryStrings.join(args.query ? "&" : "");

          const {
            data: { data, currentPage, hasMore },
          }: AxiosResponse<BlogAPI_T.GetAllArticlesResponseT> =
            await axiosPrivateQuery.get(`/articles?${queryStr}`);

          set(() => ({
            hasMore,
            currentPage,
            articles: [...get().articles, ...data],
          }));
        } catch (error: any) {
          const message = error.response?.data?.message || error?.message;
          set(() => ({
            allArticlesStatus: getStatus("FAIL", message),
          }));
          throw error;
        }
      },

      cleanUpArticles() {
        set(() => ({
          hasMore: initialState.hasMore,
          currentPage: initialState.currentPage,
          articles: initialState.articles,
          allArticlesStatus: getStatus("IDLE"),
        }));
      },
    }))
  )
);

export default createSelectors(useArticlesStore);

/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";
import { useQuill } from "@/hooks/utils";
import { useDeleteArticleQuery } from "@/hooks/api/blog";

import {
  LineClamp,
  Dropdown,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./articleCard.styled";

import { ArticleT } from "@/interface/db/blog.types";

type ArticleCardT = {
  article: ArticleT;
  allowActions?: boolean;
};

const ArticleCard: React.FC<ArticleCardT> = ({
  article,
  allowActions = false,
}) => {
  const navigate = useNavigate();

  const { getShortContent } = useQuill();
  const { description, thumbnail } = getShortContent(article.body);

  const { onStartDelete, status } = useDeleteArticleQuery();

  const dropdownConfig = useMemo(
    () => [
      {
        label: "განახლება",
        value: "",
        authorized: false,
        danger: false,
        onSelect: () =>
          navigate(PATHS.dashboard_create_article_page, { state: { article } }),
      },
      {
        label: "წაშლა",
        value: "",
        authorized: false,
        danger: true,
        onSelect: () => onStartDelete(article._id),
      },
    ],
    [article]
  );

  return (
    <Styled.ArticleCard
      to={
        allowActions
          ? DYNAMIC_ROUTES.dashboard_article_page(article._id)
          : DYNAMIC_ROUTES.article_page(article._id)
      }
      data-article-card
    >
      {thumbnail && (
        <figure className="article-card__fig">
          <img
            src={thumbnail}
            alt={article.title}
            width="100%"
            height="100%"
            title={article.title}
            loading="lazy"
          />
        </figure>
      )}

      {allowActions && (
        <div className="article-card__head">
          <Dropdown
            Button={
              <svg
                width="30"
                height="10"
                viewBox="-4 4 30 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M14 10.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-5 0a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                />
              </svg>
            }
            data={dropdownConfig}
            buttonClass="card-dropdown__trigger-btn"
            dropdownClass="article-card__dropdown-window"
          />
        </div>
      )}

      <LineClamp component="h2" clamp={2} text={article.title} />

      <div className="card-description__wrapper">
        <LineClamp clamp={thumbnail ? 5 : 13} text={description} />
      </div>

      {status.loading && status.articleId === article._id && (
        <RelativeSpinner />
      )}

      {status.error && status.articleId === article._id && (
        <ErrorMessage message={status.message} align="center" />
      )}
    </Styled.ArticleCard>
  );
};

export default ArticleCard;

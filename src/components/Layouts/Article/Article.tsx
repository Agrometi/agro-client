import { useArticleQuery, useDeleteArticleQuery } from "@/hooks/api/blog";

import Helmet from "@/SEO/Helmet";

import {
  Header,
  QuillEditor,
  ErrorMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import ArticleHead from "./ArticleHead";
import * as Styled from "./article.styled";
import { DYNAMIC_ROUTES } from "@/config/paths";
import Unknown from "@/components/Unknown/Unknown";

type ArticleT = {
  root: "dashboard" | "client";
};

const Article: React.FC<ArticleT> = ({ root }) => {
  const { article, status } = useArticleQuery();
  const { onStartDelete, status: deletionStatus } = useDeleteArticleQuery();

  const message = status.message || deletionStatus.message;

  return (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          title={`Agrometi | ${
            article.category === "projects" ? "პროექტები" : "ბლოგი"
          } | ${article.title}`}
          canonical={DYNAMIC_ROUTES.article_page(article._id)}
        />
      )}

      <Header />

      <Styled.Article>
        {status.status === "PENDING" ? (
          <RelativeSpinner />
        ) : status.status === "FAIL" ? (
          <Unknown fixed={false} />
        ) : (
          <>
            <h2 className="article-title">{article.title}</h2>

            <ArticleHead
              article={article}
              root={root}
              onDelete={onStartDelete}
            />

            <QuillEditor readonly={true} value={article.body} />
          </>
        )}

        {deletionStatus.loading && <RelativeSpinner />}

        {deletionStatus.error && <ErrorMessage message={message} />}
      </Styled.Article>
    </>
  );
};

export default Article;

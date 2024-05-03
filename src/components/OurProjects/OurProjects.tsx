import { useGetAllArticlesQuery } from "@/hooks/api/blog";

import {
  InfiniteScroll,
  ArticleCard,
  ErrorMessage,
  EmptyMessage,
  RelativeSpinner,
} from "@/components/Layouts";

import * as Styled from "./ourProjects.styled";

const OurProjects: React.FC = () => {
  const { data, status, hasMore, total, getArticlesQuery } =
    useGetAllArticlesQuery("category=projects");

  return (
    <Styled.OurProjects>
      <div className="articles-list">
        {status.status === "SUCCESS" && (
          <InfiniteScroll
            total={total}
            hasMore={hasMore}
            onNext={getArticlesQuery}
            showLastMessage={false}
          >
            {data.map((article) => (
              <ArticleCard key={article._id} article={article} />
            ))}
          </InfiniteScroll>
        )}

        {status.status === "SUCCESS" && data.length === 0 && (
          <EmptyMessage message="დამატებული სტატიები არ მოიძებნება" />
        )}

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}
      </div>
    </Styled.OurProjects>
  );
};

export default OurProjects;

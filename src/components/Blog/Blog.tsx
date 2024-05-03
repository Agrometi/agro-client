import { useGetAllArticlesQuery } from "@/hooks/api/blog";
import { useSearchField } from "@/hooks/utils";

import {
  InfiniteScroll,
  ArticleCard,
  SearchField,
  ErrorMessage,
  EmptyMessage,
  RelativeSpinner,
} from "@/components/Layouts";
import * as Styled from "./blog.styled";

const Blog: React.FC = () => {
  const { data, status, hasMore, total, getArticlesQuery } =
    useGetAllArticlesQuery("category=blog");

  const { search, setSearch } = useSearchField();

  return (
    <Styled.Blog>
      <div className="articles-head">
        <SearchField value={search} onChange={setSearch} />
      </div>

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
    </Styled.Blog>
  );
};

export default Blog;

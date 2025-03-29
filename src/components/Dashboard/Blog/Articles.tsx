import { useEffect } from "react";

import { useGetAllArticlesQuery } from "@/hooks/api/blog";
import { useSearchField, useSearchParams } from "@/hooks/utils";

import {
  Dropdown,
  ArticleCard,
  SearchField,
  ErrorMessage,
  InfiniteScroll,
  RelativeSpinner,
  EmptyMessage,
} from "@/components/Layouts";
import { ArrowTriangleIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/articles.styled";

const categoryOptions = [
  { label: "ბლოგი", value: "blog" },
  { label: "პროექტები", value: "projects" },
];

const Articles: React.FC = () => {
  const { data, status, hasMore, total, getArticlesQuery } =
    useGetAllArticlesQuery();

  const { search, setSearch } = useSearchField();

  const { getParam, setParam } = useSearchParams();
  const currentCategory = getParam("category");

  const onCategoryChange = (value: string) => setParam("category", value);
  useEffect(() => {
    if (!currentCategory) setParam("category", categoryOptions[0].value);
  }, []);

  return (
    <Styled.Articles>
      <div className="articles-head">
        <Dropdown
          Button={
            <span className="category-btn">
              {categoryOptions.find(
                (option) => option.value === currentCategory
              )?.label || "კატეგორია"}

              <ArrowTriangleIcon />
            </span>
          }
          data={categoryOptions.map((option) => ({
            ...option,
            active: currentCategory === option.value,
            onSelect: () => onCategoryChange(option.value),
          }))}
          dropdownClass="category-dropdown"
        />

        <SearchField value={search} onChange={setSearch} />
      </div>

      <div className="articles-list">
        {status.status === "SUCCESS" && data.length > 0 && (
          <InfiniteScroll
            total={total}
            hasMore={hasMore}
            onNext={getArticlesQuery}
            showLastMessage={false}
          >
            {data.map((article) => (
              <ArticleCard
                key={article._id}
                article={article}
                allowActions={true}
              />
            ))}
          </InfiniteScroll>
        )}

        {status.status === "SUCCESS" && data.length === 0 && (
          <EmptyMessage message="დამატებული სტატიები არ მოიძებნება" />
        )}

        {status.loading && <RelativeSpinner />}

        {status.error && <ErrorMessage message={status.message} />}
      </div>
    </Styled.Articles>
  );
};

export default Articles;

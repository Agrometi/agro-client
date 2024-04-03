import { useGetCategoriesQuery } from "@/hooks/api/dashboard/categories";
import { useDeleteCategoryQuery } from "@/hooks/api/dashboard/categories";

import {
  StandSpinner,
  ErrorMessage,
  InfiniteScroll,
} from "@/components/Layouts";
import CategoryCard from "./components/CategoryCard";
import * as Styled from "./styles/yourCategories.styled";

const YourCategories: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedCategoriesQuery } =
    useGetCategoriesQuery();

  const { deleteCategoryQuery, status: deleteStatus } =
    useDeleteCategoryQuery();

  const loading = status.loading || deleteStatus.loading;

  const errorMessage = status.error
    ? status.message
    : deleteStatus.error
    ? deleteStatus.message
    : "";

  return (
    <Styled.YourCategories>
      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getPaginatedCategoriesQuery}
        >
          {data.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              deleteCategoryQuery={deleteCategoryQuery}
            />
          ))}
        </InfiniteScroll>
      )}

      {loading && <StandSpinner />}

      {errorMessage && <ErrorMessage message={errorMessage} align="center" />}
    </Styled.YourCategories>
  );
};

export default YourCategories;

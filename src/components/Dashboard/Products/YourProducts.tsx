import { useGetProductsQuery } from "@/hooks/api/products";
import { useDeleteProductQuery } from "@/hooks/api/dashboard/products";

import {
  StandSpinner,
  InfiniteScroll,
  ErrorMessage,
} from "@/components/Layouts";
import ProductCard from "./components/ProductCard";
import * as Styled from "./styles/yourProducts.styled";

const YourProducts: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedProductsQuery } =
    useGetProductsQuery(true);

  const { onDeleteQuery, status: deleteStatus } = useDeleteProductQuery();

  const loading = status.loading || deleteStatus.loading;

  const errorMessage = status.error
    ? status.message
    : deleteStatus.error
    ? deleteStatus.message
    : "";

  return (
    <Styled.YourProducts>
      {status.status === "SUCCESS" && (
        <InfiniteScroll
          total={total}
          hasMore={hasMore}
          onNext={getPaginatedProductsQuery}
        >
          {data.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onDelete={onDeleteQuery}
            />
          ))}
        </InfiniteScroll>
      )}

      {loading && <StandSpinner />}

      {errorMessage && <ErrorMessage message={errorMessage} align="center" />}
    </Styled.YourProducts>
  );
};

export default YourProducts;

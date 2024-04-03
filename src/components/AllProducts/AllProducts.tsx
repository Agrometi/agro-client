import { useGetProductsQuery } from "@/hooks/api/products";

import {
  ProductCard,
  StandSpinner,
  ErrorMessage,
  InfiniteScroll,
} from "@/components/Layouts";
import * as Styled from "./allProducts.styled";

const AllProducts: React.FC = () => {
  const { data, getPaginatedProductsQuery, hasMore, status, total } =
    useGetProductsQuery(true, true);

  return (
    <Styled.AllProducts>
      <InfiniteScroll
        total={total}
        hasMore={hasMore}
        onNext={getPaginatedProductsQuery}
        showLastMessage={status.status === "SUCCESS"}
      >
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </InfiniteScroll>

      {status.loading && <StandSpinner />}

      {status.error && <ErrorMessage message={status.message} align="center" />}
    </Styled.AllProducts>
  );
};

export default AllProducts;

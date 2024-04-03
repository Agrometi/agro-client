import { useGetRelatedProductsQuery } from "@/hooks/api/products";

import * as Styled from "./relatedProducts.styled";
import { ProductCard, Spinner, ErrorMessage } from "@/components/Layouts";

type RelatedProductsT = {
  productId: string;
  categoryId: string;
};

const RelatedProducts: React.FC<RelatedProductsT> = ({
  productId,
  categoryId,
}) => {
  const { data, status } = useGetRelatedProductsQuery(productId, categoryId);

  return (
    <Styled.RelatedProducts>
      <p>მსგავსი პროდუქცია</p>

      {status.status === "SUCCESS" && (
        <div className="related-list">
          {data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

      {status.loading && <Spinner />}

      {status.error && <ErrorMessage message={status.message} />}
    </Styled.RelatedProducts>
  );
};

export default RelatedProducts;

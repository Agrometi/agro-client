import { useEffect } from "react";

import { useGetProductsQuery } from "@/hooks/api/products";

import SectionTitle from "./SectionTitle";
// import ProductsFilter from "./ProductsFilter";
import { ProductCard } from "@/components/Layouts";
import * as Styled from "./styles/productsWeSell.styled";

const ProductsWeSell: React.FC = () => {
  const { getPaginatedProductsQuery, data, cleanUpAll } = useGetProductsQuery();

  useEffect(() => {
    getPaginatedProductsQuery({ page: 1, limit: 6 });

    return () => {
      cleanUpAll();
    };
  }, []);

  return (
    <Styled.ProductsWeSell>
      <div className="products-head">
        <SectionTitle subTitle="პროდუქტები" title="პროდუქტები" />

        {/* <ProductsFilter /> */}
      </div>

      <ul className="products-list">
        {data.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </ul>
    </Styled.ProductsWeSell>
  );
};

export default ProductsWeSell;

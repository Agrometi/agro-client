import { Link } from "react-router-dom";

import * as Styled from "./styles/filter.styled";

type ProductsFilterT = {};

const ProductsFilter: React.FC<ProductsFilterT> = () => {
  return (
    <Styled.Filter>
      <li>
        <Link to={""} className="active">
          gardening
        </Link>
      </li>
      <li>
        <Link to={""}>herbs</Link>
      </li>
      <li>
        <Link to={""}>vegetables</Link>
      </li>
    </Styled.Filter>
  );
};

export default ProductsFilter;

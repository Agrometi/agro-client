import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";
import { useCart } from "@/hooks/utils";

import * as Styled from "./productCard.styled";
import { ShoppingCartIcon } from "@/components/Layouts/Icons";

import { ProductT } from "@/interface/db/product.types";

type ProductCardT = {
  product: ProductT;
};

const ProductCard: React.FC<ProductCardT> = ({ product }) => {
  const { onAdd } = useCart();

  const onAddToCart = () =>
    onAdd({
      product,
      quantity: 1,
      size: product.sizes[0],
      productType: "product",
    });

  return (
    <Styled.ProductCard>
      {/* <div className="card-header">
        <button>
          <HeartIcon />
        </button>

        <span>sale!</span>
      </div> */}

      <figure className="card-fig">
        <img
          src={product.assets[0]}
          alt={product.title}
          title={product.title}
          width="100%"
          height="200"
        />
      </figure>

      <div className="card-details">
        <div className="flex-col">
          <Link
            target="_blank"
            to={DYNAMIC_ROUTES.product_page(product._id)}
            className="card-title"
          >
            {product.title}
          </Link>

          <div className="card-price--size">
            <span className="card-price">{product.price}₾</span>

            <span className="card-size">
              <span>ზომა:</span>
              &nbsp;
              <span>{product.sizes[0]}</span>
            </span>
          </div>
        </div>

        <button className="card-shopping--btn" onClick={onAddToCart}>
          <ShoppingCartIcon />
        </button>
      </div>
    </Styled.ProductCard>
  );
};

export default ProductCard;

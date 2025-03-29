import { Link } from "react-router-dom";

import { DYNAMIC_ROUTES } from "@/config/paths";
import { useCart } from "@/hooks/utils";

import * as Styled from "./productCard.styled";
import { ShoppingCartIcon } from "@/components/Layouts/Icons";

import { ProductT } from "@/interface/db/product.types";

type ProductCardT = {
  product: ProductT;
  as?: string;
};

const ProductCard: React.FC<ProductCardT> = ({ product, as = "li" }) => {
  const { onAdd } = useCart();

  const onAddToCart = () =>
    onAdd({
      product,
      quantity: 1,
      productType: "product",
      size: product.sizes[0],
      sizeUnit: product.sizeUnit,
    });

  return (
    <Styled.ProductCard as={as}>
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
          height={200}
        />
      </figure>

      <div className="card-details">
        <div className="flex-col">
          <h2>
            <Link
              target="_blank"
              to={DYNAMIC_ROUTES.product_page(product._id)}
              className="card-title"
            >
              {product.title}
            </Link>
          </h2>

          <div className="card-price--size">
            <span className="card-price">
              1&nbsp;{product.sizeUnit}&nbsp;&mdash;&nbsp;{product.price}₾
            </span>

            <span className="card-size">
              <span>ზომა:</span>
              &nbsp;
              <span>
                {product.sizes[0]}
                {product.sizeUnit}
              </span>
            </span>
          </div>
        </div>

        <button
          className="card-shopping--btn"
          onClick={onAddToCart}
          title="დაამატეთ პროდუქტი კალათაში"
          aria-label="დაამატეთ პროდუქტი კალათაში"
        >
          <ShoppingCartIcon />
        </button>
      </div>
    </Styled.ProductCard>
  );
};

export default ProductCard;

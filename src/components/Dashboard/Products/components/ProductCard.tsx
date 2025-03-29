import { Link, useNavigate } from "react-router-dom";

import { useAppUIContext } from "@/Providers";
import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";
import { useCheckProductParticipatingCombos } from "@/hooks/api/dashboard/products";

import * as Styled from "./productCard.styled";
import { LineClamp, Button, RelativeSpinner } from "@/components/Layouts";
import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import { ProductT } from "@/interface/db/product.types";

type ProductCardT = {
  product: ProductT;
  onDelete: (productId: string) => Promise<void>;
  setWarning: React.Dispatch<
    React.SetStateAction<{
      warning: boolean;
      combos: Array<{ _id: string; title: string }>;
      productTitle: string;
      productId: string;
    }>
  >;
};

const ProductCard: React.FC<ProductCardT> = ({
  product,
  onDelete,
  setWarning,
}) => {
  const navigate = useNavigate();

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_add_product_page}?product=${product._id}`, {
      state: { product },
    });

  const { check, loading } = useCheckProductParticipatingCombos();

  const onStartDelete = async () => {
    const combos = await check(product._id);

    if (Array.isArray(combos) && combos.length > 0)
      setWarning((prev) => ({
        ...prev,
        warning: true,
        combos,
        productId: product._id,
        productTitle: product.title,
      }));
    else
      activateDialog({
        target: "პროდუქტის",
        message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
        onConfirm: () => onDelete(product._id),
        title: "პროდუქტის წაშლა",
        type: "danger",
      });
  };

  const thumbnail = product.assets.find((asset) => asset?.endsWith(".webp"));

  return (
    <Styled.ProductCard>
      <figure className="card-fig">
        <img
          src={thumbnail}
          alt={product.title}
          title={product.title}
          width="100%"
          height="200"
          loading="lazy"
        />
      </figure>

      <div className="card-details">
        <Link to={DYNAMIC_ROUTES.dashboard_product_details_page(product._id)}>
          <LineClamp text={product.title} clamp={2} component="span" />
        </Link>

        <LineClamp text={product.description} clamp={4} component="div" />

        <div className="flex-box footer">
          <div className="flex-box__sub">
            <span>ფასი:</span>
            &nbsp;
            <span>
              1 {product.sizeUnit} &mdash;{" "}
              {product.price.toFixed(2).toLocaleString()}₾
            </span>
          </div>

          {/* <div className="flex-box__sub">
            <span className="sale">SALE</span>
          </div> */}
        </div>

        <div className="flex-box">
          <Button show="danger" onClick={onStartDelete}>
            <DeleteIcon />
            წაშლა
          </Button>

          <Button onClick={onEdit}>
            <EditIcon />
            რედაქტირება
          </Button>
        </div>
      </div>

      {loading && <RelativeSpinner />}
    </Styled.ProductCard>
  );
};

export default ProductCard;

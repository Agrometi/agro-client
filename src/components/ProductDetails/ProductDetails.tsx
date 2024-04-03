import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useCart } from "@/hooks/utils";
import { useSizeChange } from "@/hooks/utils";
import { useGetProductQuery } from "@/hooks/api/products";
import { useAppUIContext } from "@/Providers/useProviders";
import { useDeleteProductQuery } from "@/hooks/api/dashboard/products";

import {
  Button,
  Counter,
  ErrorMessage,
  StandSpinner,
  RelativeSpinner,
} from "@/components/Layouts";

import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import * as Styled from "./productDetails.styled";
import ProductSlider from "./components/ProductSlider";
import RelatedProducts from "./components/RelatedProducts";

type ProductDetailsT = {
  isOnDashboard?: boolean;
};

const ProductDetails: React.FC<ProductDetailsT> = ({ isOnDashboard }) => {
  const navigate = useNavigate();

  const { data, status } = useGetProductQuery();
  const { onDeleteQuery, status: deleteStatus } = useDeleteProductQuery();

  const { activateDialog } = useAppUIContext();

  const {
    size,
    onSizeChange,
    onQuantityChange,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = useSizeChange(data.sizes);

  const onEdit = () =>
    navigate(`${PATHS.dashboard_add_product_page}?product=${data._id}`, {
      state: { product: data },
    });

  const onDeleteCombo = async () => {
    await onDeleteQuery(data._id);
    navigate(PATHS.dashboard_your_products_page);
  };

  const onStartDelete = () =>
    activateDialog({
      type: "danger",
      target: "პროდუქტის",
      title: "პროდუქტის წაშლა",
      onConfirm: () => onDeleteCombo(),
      message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
    });

  const { onAdd } = useCart();

  const onAddToCart = () =>
    onAdd({
      product: data,
      size: size.size,
      productType: "product",
      quantity: size.selectedCount,
    });

  const hasError = status.error || deleteStatus.error;
  const errorMessage = status.message || deleteStatus.message;

  return (
    <Styled.ProductDetails>
      {status.status === "SUCCESS" && (
        <div className="details-wrapper">
          <ProductSlider assets={data.assets} />

          <div className="details">
            <p className="details-title">{data.title}</p>

            <div className="details-category">
              <span>კატეგორია:</span>
              &nbsp;
              <span>{data.category.title}</span>
            </div>

            <p className="details-price">150₾</p>

            <p className="details-description">{data.description}</p>

            <div className="details-actions">
              <div className="details-actions__size">
                <label>ზომა:</label>
                &nbsp;
                <select name="size" onChange={onSizeChange}>
                  {data.sizes.map((size) => (
                    <option value={size} key={size}>
                      {size}
                    </option>
                  ))}
                </select>
                &nbsp;
                {/* {size.size && <span>{size.quantity}</span>} */}
              </div>

              {isOnDashboard ? (
                <div className="dashboard-actions">
                  <Button onClick={onEdit}>
                    <EditIcon />
                  </Button>

                  <Button show="danger" onClick={onStartDelete}>
                    <DeleteIcon />
                  </Button>
                </div>
              ) : (
                <>
                  <div className="details-actions__quantity">
                    <label>რაოდენობა:</label>
                    &nbsp;
                    <Counter
                      value={size.selectedCount}
                      onChangeCount={onQuantityChange}
                      onDecreaseCount={onDecreaseQuantity}
                      onIncreaseCount={onIncreaseQuantity}
                    />
                  </div>

                  <Button
                    className="details-actions__add-btn"
                    show="secondary"
                    onClick={onAddToCart}
                  >
                    დამატება
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {status.loading && <RelativeSpinner />}
      {deleteStatus.loading && <StandSpinner />}

      {hasError && <ErrorMessage message={errorMessage} />}

      {!isOnDashboard && (
        <RelatedProducts productId={data._id} categoryId={data.category._id} />
      )}
    </Styled.ProductDetails>
  );
};

export default ProductDetails;

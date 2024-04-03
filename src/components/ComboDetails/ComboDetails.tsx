import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "@/hooks/utils";
import { DYNAMIC_ROUTES, PATHS } from "@/config/paths";
import { useGetComboQuery } from "@/hooks/api/combos";
import { useAppUIContext } from "@/Providers/useProviders";
import { useDeleteComboQuery } from "@/hooks/api/dashboard/combos";

import {
  Button,
  Counter,
  LineClamp,
  StandSpinner,
  ErrorMessage,
} from "@/components/Layouts";

import {
  OpenInNewIcon,
  ShoppingCartIcon,
  EditIcon,
  DeleteIcon,
} from "@/components/Layouts/Icons";

import ComboSlider from "./ComboSlider";
import * as Styled from "./comboDetails.styled";

type ComboDetailsT = {
  isOnDashboard?: boolean;
};

const ComboDetails: React.FC<ComboDetailsT> = ({ isOnDashboard = false }) => {
  const navigate = useNavigate();

  const { data, status } = useGetComboQuery();
  const { deleteComboQuery, status: deleteStatus } = useDeleteComboQuery();

  const [sliderStartIndex, setSliderStartIndex] = useState<number | undefined>(
    undefined
  );

  const onOpenSlider = (index: number) => setSliderStartIndex(index);

  const onCloseSlider = () => setSliderStartIndex(NaN);

  const { activateDialog } = useAppUIContext();

  const onEdit = () =>
    navigate(`${PATHS.dashboard_create_combo_page}?combo=${data._id}`, {
      state: { combo: data },
    });

  const onDeleteCombo = async () => {
    await deleteComboQuery(data._id);
    navigate(PATHS.dashboard_combos_page);
  };

  const onStartDelete = () =>
    activateDialog({
      type: "danger",
      target: "ნაკრების",
      title: "ნაკრების წაშლა",
      onConfirm: () => onDeleteCombo(),
      message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
    });

  const [quantity, setQuantity] = useState(1);

  const onChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuantity(() => (+e.target.value <= 0 ? 1 : +e.target.value));

  const onQuantityIncrease = () => setQuantity((prev) => prev + 1);

  const onQuantityDecrease = () =>
    setQuantity((prev) => (prev === 1 ? 1 : prev - 1));

  const { onAdd } = useCart();

  const onAddToCart = () =>
    onAdd({
      size: "",
      quantity,
      product: data,
      productType: "combo",
    });

  const hasError = status.error || deleteStatus.error;
  const loading = status.loading || deleteStatus.loading;
  const errorMessage = status.message || deleteStatus.message;

  return (
    <>
      {status.status === "SUCCESS" && (
        <>
          <ComboSlider
            images={data.assets}
            onClose={onCloseSlider}
            startIndex={sliderStartIndex ?? NaN}
          />

          <Styled.ComboDetails>
            <div className="gallery-box">
              {data.assets.map((image, index) => (
                <figure key={image} onClick={() => onOpenSlider(index)}>
                  <img src={image} alt={image} title={image} loading="eager" />
                </figure>
              ))}
            </div>

            <div className="combo-details__wrapper">
              <div className="combo-price">{data.price}₾</div>

              <p className="combo-title">{data.title}</p>

              <p className="combo-description">{data.description}</p>

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
                <div className="client-actions">
                  <Counter
                    value={quantity}
                    onChangeCount={onChangeQuantity}
                    onDecreaseCount={onQuantityDecrease}
                    onIncreaseCount={onQuantityIncrease}
                  />

                  <Button
                    show="secondary"
                    className="add-to--cart__btn"
                    onClick={onAddToCart}
                  >
                    <ShoppingCartIcon />
                    კალათაში დამატება
                  </Button>
                </div>
              )}

              <p className="sub-title">ნაკრებში შედის:</p>

              <div className="contained-products">
                {data.products.map((product) => (
                  <div
                    key={`${product.product._id}-${product.size.size}`}
                    className="contained-products__item"
                  >
                    <figure>
                      <img src={product.product.assets[0]} alt="" />
                    </figure>

                    <div className="contained-product__item-details">
                      <LineClamp
                        clamp={2}
                        component="h4"
                        showTitle={true}
                        text={product.product.title}
                      />

                      <div className="contained-product__item-details-grid">
                        <div>
                          <span>ზომა:</span>
                          &nbsp;
                          <span>{product.size.size}</span>
                        </div>

                        <div>
                          <span>რაოდენობა:</span>
                          &nbsp;
                          <span>{product.size.quantity}</span>
                        </div>

                        <div>
                          <span>ფასი:</span>
                          &nbsp;
                          <span>{product.product.price}₾</span>
                        </div>

                        <div>
                          <span>ჯამური ფასი:</span>
                          &nbsp;
                          <span>
                            {product.product.price * product.size.quantity}₾
                          </span>
                        </div>
                      </div>

                      <Link
                        target="_blank"
                        title="პროდუქტის ნახვა"
                        referrerPolicy="no-referrer"
                        className="view-product__btn"
                        to={DYNAMIC_ROUTES.product_page(product.product._id)}
                      >
                        <OpenInNewIcon />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Styled.ComboDetails>
        </>
      )}

      {loading && <StandSpinner />}

      {hasError && <ErrorMessage message={errorMessage} />}
    </>
  );
};

export default ComboDetails;

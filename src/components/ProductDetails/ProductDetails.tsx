import { useNavigate } from "react-router-dom";

import Helmet from "@/SEO/Helmet";
import generateProductSchema from "@/SEO/product-schema";
import { PATHS, DYNAMIC_ROUTES } from "@/config/paths";

import { useCart } from "@/hooks/utils";
import { useSizeChange } from "@/hooks/utils";
import { useGetProductQuery } from "@/hooks/api/products";
import { useAppUIContext } from "@/Providers";
import { useDeleteProductQuery } from "@/hooks/api/dashboard/products";

import {
  Button,
  Counter,
  Header,
  ErrorMessage,
  StandSpinner,
  RelativeSpinner,
} from "@/components/Layouts";

import { DeleteIcon, EditIcon } from "@/components/Layouts/Icons";

import * as Styled from "./productDetails.styled";
import ProductSlider from "./components/ProductSlider";
import RelatedProducts from "./components/RelatedProducts";
import Unknown from "@/components/Unknown/Unknown";

type ProductDetailsT = {
  isOnDashboard?: boolean;
};

const ProductDetails: React.FC<ProductDetailsT> = ({ isOnDashboard }) => {
  const navigate = useNavigate();

  const { data, status } = useGetProductQuery();
  const { onDeleteQuery, singleStatus: deleteStatus } = useDeleteProductQuery();

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
      sizeUnit: data.sizeUnit,
      size: size.size,
      productType: "product",
      quantity: size.selectedCount,
    });

  const errorMessage = status.message || deleteStatus.message;

  const priceSum = size.size * data.price * size.selectedCount;

  return (
    <>
      {status.status === "SUCCESS" && (
        <Helmet
          schema={generateProductSchema({
            name: data.title,
            description: data.description,
            price: data.price,
            url: window.location.href,
            image: data.assets[0],
          })}
          title={`Agrometi | პროდუქტები | ${data.title}`}
          canonical={DYNAMIC_ROUTES.product_page(data._id)}
        />
      )}

      <Header />

      <Styled.ProductDetails>
        {status.status === "SUCCESS" && (
          <div className="details-wrapper">
            <ProductSlider assets={data.assets} alt={data.title} />

            <div className="details">
              <h2 className="details-title">{data.title}</h2>

              <div className="details-category">
                <span>კატეგორია:</span>
                &nbsp;
                <span>{data.category.title}</span>
              </div>

              <p className="details-price">
                <span>ფასი:</span>
                &nbsp;
                <span>
                  1&nbsp;{data.sizeUnit}
                  &nbsp;&mdash;&nbsp;{data.price}₾
                </span>
              </p>

              <p className="details-description">{data.description}</p>

              <div className="details-actions">
                <div className="details-actions__size">
                  <label>ზომა:</label>
                  &nbsp;
                  <select
                    name="size"
                    onChange={onSizeChange}
                    aria-label="აირჩიეთ პროდუქტის რაოდენობა"
                  >
                    {data.sizes.map((size) => (
                      <option value={size} key={size}>
                        {size}&nbsp;{data.sizeUnit}
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

                    {!isNaN(priceSum) && (
                      <div className="details-actions__total-price">
                        {priceSum}₾
                      </div>
                    )}

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

        {status.status === "FAIL" && <Unknown fixed={false} />}

        {status.loading && <RelativeSpinner />}
        {deleteStatus.loading && <StandSpinner />}

        {deleteStatus.error && <ErrorMessage message={errorMessage} />}

        {!isOnDashboard && (
          <RelatedProducts
            productId={data._id}
            categoryId={data.category._id}
          />
        )}
      </Styled.ProductDetails>
    </>
  );
};

export default ProductDetails;

import { useNavigate } from "react-router-dom";

import {
  useGetOrderQuery,
  useTreeTrunkOrderQuery,
} from "@/hooks/api/dashboard/orders";
import { PATHS } from "@/config/paths";
import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";
import getOrderedProductNestedField from "./functions/getOrderedProductNestedField";

import * as Styled from "./styles/orderReview.styled";
import OrderReviewTableItem from "./OrderReviewTableItem";
import { Spinner, ErrorMessage, Button } from "@/components/Layouts";

const OrderReview: React.FC = () => {
  const navigate = useNavigate();

  const { getParam } = useSearchParams();

  const reviewingOrderId = getParam("review-order");
  const isReviewingOrder = reviewingOrderId !== null;

  const { status, data } = useGetOrderQuery();
  const { onTreeTrunk, status: treeTrunkStatus } = useTreeTrunkOrderQuery();

  const onGetInvoice = async () => {
    await onTreeTrunk(data._id, "SUCCESS");

    const products = data.products
      .filter(
        (product) =>
          (product.productType === "COMBO" && product.combo) ||
          (product.productType === "PRODUCT" && product.product)
      )
      .map((product) => {
        const price = getOrderedProductNestedField(product, "price") as number;

        const title = getOrderedProductNestedField(product, "title") as string;

        const assets = getOrderedProductNestedField(
          product,
          "assets"
        ) as Array<string>;

        const description = getOrderedProductNestedField(
          product,
          "description"
        ) as string;

        const priceSum =
          product.productType === "PRODUCT"
            ? product.quantity * price * Number(product.size as string)
            : product.quantity * price;

        const thumbnail = assets?.[0];

        return {
          id: product._id,
          size: product.size,
          sizeUnit: product.sizeUnit,
          quantity: product.quantity,
          title,
          price,
          priceSum,
          description,
          thumbnail,
        };
      });

    navigate(PATHS.dashboard_generate_invoice_page, {
      state: {
        invoice: {
          orderId: Date.now(),
          invoiceNumber: data.invoiceNumber,
          customerName: data.customerName,
          customerAddress: data.customerAddress,
          customerId: data.customerId,
          customerPhone: data.customerPhone,
          createdAt: data.createdAt,
          products,
        },
      },
    });
  };

  return (
    <Styled.OrderReview>
      {isReviewingOrder ? (
        <div className="invoice">
          {status.loading && <Spinner />}

          {status.error && <ErrorMessage message={status.message} />}

          {status.status === "SUCCESS" && (
            <>
              <div
                className={`order-status ${
                  data.status === "SUCCESS"
                    ? "succeed"
                    : data.status === "REJECTED"
                    ? "rejected"
                    : "pending"
                } `}
              />

              <header className="invoice-header">
                <div className="invoice-header__left">
                  <figure className="invoice-logo__small">
                    <img src="/assets/logo-small.webp" alt="agro-ornament" />
                  </figure>

                  <div className="invoice-info">
                    <p>
                      <span>შეკვეთის თარიღი:</span>
                      &nbsp;
                      <span>
                        {getTimeString(data.createdAt, "dayMonthYearConfig")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="invoice-header__right">
                  <figure className="invoice-logo__text">
                    <img src="/assets/text-logo.webp" alt="agro-ornament" />
                  </figure>
                </div>
              </header>

              <div className="invoice-sub--head">
                <div>
                  <p>კომაპანია:</p>
                  <p>AGRO-ORNAMENT</p>
                  <p>კომპანიის მისამართი და ZIP კოდი</p>
                  <p>ტელ. ნომერი</p>
                </div>

                <div>
                  <p>მომხმარებელი:</p>
                  <p>{data.customerName}</p>
                  <p>{data.customerAddress}</p>
                  <p>{data.customerPhone}</p>
                  <p>{data.customerId}</p>
                </div>
              </div>

              <div className="invoice-body">
                <div className="invoice-body__grid-col">
                  <p>პროდუქტი</p>
                  <p>ზომა</p>
                  <p>რაოდენობა</p>
                  <p>ფასი</p>
                  <p>ჯამი</p>
                </div>

                {data.products.map((product) => (
                  <OrderReviewTableItem key={product._id} product={product} />
                ))}
              </div>

              <div className="invoice-footer">
                <span>{data.totalPrice}₾</span>
              </div>

              {treeTrunkStatus.loading ? (
                <p style={{ textAlign: "center" }}>პროცესშია...</p>
              ) : (
                <div className="invoice-actions">
                  {data.status !== "REJECTED" && (
                    <Button
                      show="danger"
                      onClick={() => onTreeTrunk(data._id, "REJECTED")}
                    >
                      შეკვეთის გაუქმება
                    </Button>
                  )}

                  {(data.status === "REJECTED" ||
                    data.status === "SUCCESS") && (
                    <Button
                      show="primary"
                      onClick={() => onTreeTrunk(data._id, "PENDING")}
                      style={{ backgroundColor: "orange" }}
                    >
                      გადაიყვანე მომლოდინე რეჟიმში
                    </Button>
                  )}

                  {data.status !== "SUCCESS" && (
                    <Button show="secondary" onClick={onGetInvoice}>
                      ინვოისის მომზადება
                    </Button>
                  )}
                </div>
              )}

              {/* <div className="invoice-total"></div> */}
            </>
          )}
        </div>
      ) : (
        <figure className="invoice-fig">
          <img src="/assets/invoice.jpg" alt="" />
        </figure>
      )}
    </Styled.OrderReview>
  );
};

export default OrderReview;

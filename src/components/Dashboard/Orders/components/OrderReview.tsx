import { useNavigate } from "react-router-dom";

import {
  useGetOrderQuery,
  useTreeTrunkOrderQuery,
} from "@/hooks/api/dashboard/orders";
import { PATHS } from "@/config/paths";
import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/orderReview.styled";
import { Spinner, ErrorMessage, Button } from "@/components/Layouts";

import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

const OrderReview: React.FC = () => {
  const navigate = useNavigate();

  const { getParam } = useSearchParams();

  const reviewingOrderId = getParam("review-order");
  const isReviewingOrder = reviewingOrderId !== null;

  const { status, data } = useGetOrderQuery();
  const { onTreeTrunk, status: treeTrunkStatus } = useTreeTrunkOrderQuery();

  const getNestedField = (
    product: GroupedOrdersListedOrderCommonProductT,
    key: string
  ) => {
    const isProductType = product.productType === "PRODUCT";
    const nestedProduct = isProductType ? product.product : product.combo;
    return nestedProduct[key as keyof typeof nestedProduct];
  };

  const onGetInvoice = async () => {
    await onTreeTrunk(data._id, "SUCCESS");

    const products = data.products.map((product) => ({
      id: product._id,
      size: product.size,
      quantity: product.quantity,
      title: getNestedField(product, "title") as string,
      price: getNestedField(product, "price") as number,
      description: (getNestedField(product, "description") as string) || "",
      thumbnail: (getNestedField(product, "assets") as Array<string>)[0],
    }));

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
                    {/* <p>
                      <span>ინვოისის ნომერი:</span>
                      &nbsp;
                      <span>1</span>
                    </p> */}

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
                  <div className="invoice-body__grid-col" key={product._id}>
                    <p>{getNestedField(product, "title")}</p>
                    <p>{product.size}</p>
                    <p>{product.quantity}</p>
                    <p>{getNestedField(product, "price")}</p>
                    <p>
                      {product.quantity *
                        (getNestedField(product, "price") as number)}
                    </p>
                  </div>
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

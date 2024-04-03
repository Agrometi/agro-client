import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  useGetOrderQuery,
  useTreeTrunkOrderQuery,
} from "@/hooks/api/dashboard/orders";
import { PATHS } from "@/config/paths";
import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";

import * as Styled from "./styles/orderReview.styled";
import { Spinner, ErrorMessage, Button, Modal } from "@/components/Layouts";

import { GroupedOrdersListedOrderCommonProductT } from "@/interface/db/order.types";

const OrderReview: React.FC = () => {
  const navigate = useNavigate();

  const { getParam, setParam, removeParam } = useSearchParams();

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

  const isOpenInvoiceProductsList = getParam("invoice-list") === "1";

  const [invoiceProductsList, setInvoiceProductsList] = useState<
    Array<{
      id: string;
      title: string;
      size: string;
      quantity: number;
      price: number;
      thumbnail: string;
      description: string;
    }>
  >([]);

  const openInvoiceProductsList = () => {
    setParam("invoice-list", "1");

    setInvoiceProductsList(() =>
      data.products.map((product) => ({
        description: "",
        id: product._id,
        size: product.size,
        quantity: product.quantity,
        title: getNestedField(product, "title") as string,
        price: getNestedField(product, "price") as number,
        thumbnail: (getNestedField(product, "assets") as Array<string>)[0],
      }))
    );
  };

  const closeInvoiceProductsList = () => {
    removeParam("invoice-list");
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const dataSize = e.currentTarget.dataset.size;
    const dataId = e.currentTarget.dataset.id;
    const value = e.target.value;

    setInvoiceProductsList((prev) => {
      const candidateIndex = prev.findIndex(
        (product) => product.id === dataId && product.size === dataSize
      );

      if (candidateIndex >= 0) {
        const listCopy = [...prev];
        listCopy[candidateIndex].description = value;

        return listCopy;
      } else return prev;
    });
  };

  const onDoneInvoice = async () => {
    await onTreeTrunk(data._id, "SUCCESS");

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
          products: invoiceProductsList,
        },
      },
    });
  };

  return (
    <>
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
                      <Button
                        show="secondary"
                        onClick={openInvoiceProductsList}
                      >
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

      <Modal
        open={isOpenInvoiceProductsList}
        onClose={closeInvoiceProductsList}
      >
        <Styled.DescriptionNoteWindow>
          <div className="description-window__wrapper">
            <div className="description-window__products-list">
              {invoiceProductsList.map((product) => (
                <div>
                  <p>{product.title}</p>

                  {product.size && (
                    <p>
                      <span>ზომა:</span>
                      &nbsp;
                      <span>{product.size}</span>
                    </p>
                  )}

                  <p>
                    <span>რაოდენობა:</span>
                    &nbsp;
                    <span>{product.quantity}</span>
                  </p>

                  <textarea
                    rows={3}
                    value={product.description}
                    onChange={onDescriptionChange}
                    data-id={product.id}
                    data-size={product.size}
                    style={{
                      resize: "none",
                      width: "100%",
                      padding: "1rem",
                    }}
                  />
                </div>
              ))}
            </div>

            <Button
              show="secondary"
              onClick={onDoneInvoice}
              style={{ marginTop: "auto", width: "100%" }}
            >
              ინვოისის დამზადება
            </Button>
          </div>
        </Styled.DescriptionNoteWindow>
      </Modal>
    </>
  );
};

export default OrderReview;

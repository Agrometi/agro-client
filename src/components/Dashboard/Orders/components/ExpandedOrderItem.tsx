import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";

import { Button } from "@/components/Layouts";
import * as Styled from "./styles/orderItem.styled";

import {
  GroupedOrdersListedOrderT,
  GroupedOrdersListedOrderCommonProductT,
} from "@/interface/db/order.types";

type ExpandedOrderItemT = {
  order: Omit<GroupedOrdersListedOrderT, "products">;
  product: GroupedOrdersListedOrderCommonProductT;
};

const ExpandedOrderItem: React.FC<ExpandedOrderItemT> = ({
  order,
  product,
}) => {
  const { setParam, getParam } = useSearchParams();

  const onReviewOrder = () => setParam("review-order", order._id);
  const isOrderInReview = getParam("review-order") === order._id;

  return (
    <Styled.OrderItem className={isOrderInReview ? "active" : ""}>
      <figure className="order-fig">
        <img
          src={product.thumbnail}
          alt={product.title}
          title={product.title}
          width="200"
          loading="lazy"
        />
      </figure>

      <div className="order-details">
        <div className="grid-box">
          <div className="grid-box__sub">
            <span>მომხმარებელი:</span>
            &nbsp;
            <span>{order.customerName}</span>
          </div>

          <div className="grid-box__sub">
            <span>შეკვეთის თარიღი:</span>
            &nbsp;
            <span>
              {getTimeString(
                new Date(order.createdAt).toString(),
                "dayMonthYearConfig"
              )}
            </span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>პროდუქტი:</span>
            &nbsp;
            <span>{product.title}</span>
          </div>

          <div className="grid-box__sub">
            <span>პროდუქტის ფასი:</span>
            &nbsp;
            <span>{product.price}</span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>პროდუქტის ზომა:</span>
            &nbsp;
            {product.productType === "COMBO" || !product.size ? (
              <>&mdash;</>
            ) : (
              <span>{product.size}</span>
            )}
          </div>

          <div className="grid-box__sub">
            <span>პროდუქტის რაოდენობა:</span>
            &nbsp;
            <span>{product.quantity}</span>
          </div>
        </div>

        <div className="grid-box">
          <div className="grid-box__sub">
            <span>სტატუსი:</span>
            &nbsp;
            <span className={`status ${order.status.toLocaleLowerCase()}`}>
              {order.status === "SUCCESS"
                ? "წარმატებული"
                : order.status === "PENDING"
                ? "მომლოდინე"
                : order.status === "REJECTED"
                ? "უარყოფილი"
                : ""}
            </span>
          </div>

          <div className="grid-box__sub">
            <Button
              onClick={onReviewOrder}
              show="secondary"
              className="view-invoice__btn"
            >
              ნახე შეკვეთის ინვოისი
            </Button>
          </div>
        </div>
      </div>
    </Styled.OrderItem>
  );
};

export default ExpandedOrderItem;

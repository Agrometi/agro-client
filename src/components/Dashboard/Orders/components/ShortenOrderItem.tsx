import { getTimeString } from "@/utils";
import { useSearchParams } from "@/hooks/utils";

import { Button } from "@/components/Layouts";

type ShortenOrderItemT = {
  order: any;
};

const ShortenOrderItem: React.FC<ShortenOrderItemT> = ({ order }) => {
  const { setParam, getParam } = useSearchParams();

  const onReviewOrder = () => setParam("review-order", order._id);
  const isOrderInReview = getParam("review-order") === order._id;

  return (
    <li className={isOrderInReview ? "active" : ""}>
      <div>
        <span>დამკვეთის სახელი:</span>
        &nbsp;
        <span>{order.customerName}</span>
      </div>

      <div>
        <span>დამკვეთის მისამართი:</span>
        &nbsp;
        <span>{order.customerAddress}</span>
      </div>

      <div>
        <span>გადასახდელი თანხა:</span>
        &nbsp;
        <span>1450₾</span>
      </div>

      <div>
        <span>შეკვეთის სტატუსი:</span>
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

      <div>
        <span>შეკვეთის მიღების დრო:</span>
        &nbsp;
        <span>
          {getTimeString(
            new Date(order.createdAt).toString(),
            "dayMonthYearConfig"
          )}
        </span>
      </div>

      <Button
        show="secondary"
        onClick={onReviewOrder}
        className="view-invoice__btn"
      >
        ნახე შეკვეთის ინვოისი
      </Button>
    </li>
  );
};

export default ShortenOrderItem;

import { useSearchParams } from "@/hooks/utils";
import { useGetOrdersQuery } from "@/hooks/api/dashboard/orders";

import OrdersBlock from "./OrdersBlock";
import * as Styled from "./styles/orders.styled";

const Orders: React.FC = () => {
  const { data } = useGetOrdersQuery();

  const { getParam, setParam, removeParam } = useSearchParams();

  const isExpanded = getParam("expand") === "1";

  const onToggleExpand = () =>
    isExpanded ? removeParam("expand") : setParam("expand", "1");

  return (
    <Styled.Orders>
      <button onClick={onToggleExpand} className="expand-orders--btn">
        {isExpanded ? "მოკლედ ნახვა" : "ვრცლად ნახვა"}
      </button>

      <div className="orders">
        {data.map((ordersGroup) => (
          <OrdersBlock
            groupedOrders={ordersGroup}
            key={`order-group__${ordersGroup._id.month}-${ordersGroup._id.year}`}
          />
        ))}
      </div>
    </Styled.Orders>
  );
};

export default Orders;

import { Fragment } from "react";

import filterOrdersByStatus from "./functions/filterOrdersByStatus";

import ExpandedOrderItem from "./ExpandedOrderItem";
import * as Styled from "./styles/expandedOrdersList.styled";

import { GroupedOrdersT } from "@/interface/db/order.types";

type ExpandedOrdersListT = {
  groupedOrders: GroupedOrdersT;
};

const ExpandedOrdersList: React.FC<ExpandedOrdersListT> = ({
  groupedOrders,
}) => {
  const filteredOrders =
    groupedOrders.orders.filter(filterOrdersByStatus) || [];

  return (
    <Styled.ExpandedOrdersList>
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => {
          return (
            <Fragment key={order._id}>
              {order.products.map((product) => (
                <ExpandedOrderItem
                  order={order}
                  product={product}
                  key={`${product._id}-${product.size}--${order.createdAt}`}
                />
              ))}
            </Fragment>
          );
        })
      ) : (
        <p style={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}>
          დროის ამ მონაკვეთში შესაბამისი შეკვეთა არ ფიქსირდება
        </p>
      )}
    </Styled.ExpandedOrdersList>
  );
};

export default ExpandedOrdersList;

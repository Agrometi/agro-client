import filterOrdersByStatus from "./functions/filterOrdersByStatus";

import ShortenOrderItem from "./ShortenOrderItem";
import * as Styled from "./styles/shortenOrdersList.styled";

import { GroupedOrdersT } from "@/interface/db/order.types";

type ShortenOrdersListT = {
  groupedOrders: GroupedOrdersT;
};

const ShortenOrdersList: React.FC<ShortenOrdersListT> = ({ groupedOrders }) => {
  const filteredOrders =
    groupedOrders.orders.filter(filterOrdersByStatus) || [];

  return (
    <Styled.ShortenOrdersList>
      {filteredOrders.length > 0 ? (
        filteredOrders.map((order) => (
          <ShortenOrderItem order={order} key={order._id} />
        ))
      ) : (
        <p style={{ textAlign: "center", fontWeight: 600, fontSize: "18px" }}>
          დროის ამ მონაკვეთში შესაბამისი შეკვეთა არ ფიქსირდება
        </p>
      )}
    </Styled.ShortenOrdersList>
  );
};

export default ShortenOrdersList;

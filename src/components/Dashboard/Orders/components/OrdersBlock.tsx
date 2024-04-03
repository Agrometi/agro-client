import { useState } from "react";

import { useSearchParams } from "@/hooks/utils";

import ExpandBlockButton from "./ExpandBlockButton";
import ExpandedOrdersList from "./ExpandedOrdersList";
import ShortenOrdersList from "./ShortenOrdersList";
import * as Styled from "./styles/ordersBlock.styled";

import { GroupedOrdersT } from "@/interface/db/order.types";

type OrdersBlockT = {
  groupedOrders: GroupedOrdersT;
};

const OrdersBlock: React.FC<OrdersBlockT> = ({ groupedOrders }) => {
  const { getParam } = useSearchParams();

  const isExpanded = getParam("expand") === "1";

  const [isOpen, setIsOpen] = useState(true);

  return (
    <Styled.OrdersBlock>
      <ExpandBlockButton
        isOpen={isOpen}
        total={groupedOrders.totalOrders}
        year={groupedOrders.dateRange.year}
        month={groupedOrders.dateRange.month}
        onToggle={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <>
          {isExpanded ? (
            <ExpandedOrdersList groupedOrders={groupedOrders} />
          ) : (
            <ShortenOrdersList groupedOrders={groupedOrders} />
          )}
        </>
      )}
    </Styled.OrdersBlock>
  );
};

export default OrdersBlock;

import * as Styled from "./orders.styled";
import OrdersList from "./components/Orders";
import OrderReview from "./components/OrderReview";
import OrdersFilter from "./components/OrdersFilter";

const Orders: React.FC = () => {
  return (
    <Styled.Orders>
      <OrdersFilter />

      <div className="orders__content-box">
        <OrdersList />

        <OrderReview />
      </div>
    </Styled.Orders>
  );
};

export default Orders;

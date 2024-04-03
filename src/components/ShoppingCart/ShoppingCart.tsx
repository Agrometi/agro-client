import * as Styled from "./shoppingCart.styled";
import ItemsList from "./components/ItemsList";
import ShoppingCartAside from "./components/ShoppingCartAside";
import ShoppingCartHeader from "./components/ShoppingCartHeader";

const ShoppingCart: React.FC = () => {
  return (
    <Styled.ShoppingCart>
      <ShoppingCartHeader />

      <div className="shopping-cart__body">
        <ItemsList />

        <ShoppingCartAside />
      </div>
    </Styled.ShoppingCart>
  );
};

export default ShoppingCart;

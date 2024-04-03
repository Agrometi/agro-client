import * as Styled from "./styles/shoppingCartHeader.styled";

const ShoppingCartHeader: React.FC = () => {
  return (
    <Styled.ShoppingCartHeader>
      <figure className="header-bg">
        <img
          src="https://images.unsplash.com/photo-1592128546260-978059b0f6af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </figure>

      <div className="shopping-cart__header-body">
        <figure>
          <img src="/assets/logo-geo.webp" alt="" width={300} />
        </figure>
      </div>
    </Styled.ShoppingCartHeader>
  );
};

export default ShoppingCartHeader;

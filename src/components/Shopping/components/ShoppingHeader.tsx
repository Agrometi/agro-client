import * as Styled from "./styles/shoppingHeader.styled";

type ShoppingHeaderT = {};

const ShoppingHeader: React.FC<ShoppingHeaderT> = () => {
  return (
    <Styled.ShoppingHeader>
      <figure className="header-bg">
        <img
          width="100%"
          height="100%"
          alt="ნიადაგის ამსახველი ფოტო"
          src="/assets/ground.webp"
        />
      </figure>

      <div className="shopping__header-body">
        <figure>
          <img
            width={300}
            height={82}
            alt="agrometi"
            src="/assets/logo-geo.webp"
          />
        </figure>
      </div>
    </Styled.ShoppingHeader>
  );
};

export default ShoppingHeader;

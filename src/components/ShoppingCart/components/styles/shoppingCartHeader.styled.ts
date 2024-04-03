import styled from "styled-components";

export const ShoppingCartHeader = styled.div`
  width: 100%;
  height: 28vh;
  position: relative;

  .header-bg {
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .shopping-cart__header-body {
    position: absolute;
    inset: 0;

    figure {
      margin: 0 auto;
      width: min(128rem, 100%);
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
`;

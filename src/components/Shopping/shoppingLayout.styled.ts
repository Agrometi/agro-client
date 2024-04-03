import styled from "styled-components";

export const ShoppingLayout = styled.div`
  min-height: 80svh;

  .all-products__body {
    padding: 2rem 1rem;
    width: min(128rem, 100%);
    margin: 0 auto;

    .all-products__content {
      width: 100%;
    }
  }

  .grid-box.all-products__body {
    display: grid;
    grid-template-columns: 1fr max-content;
    grid-template-rows: max-content 1fr;
    gap: 2rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .grid-box.all-products__body {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: auto;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .grid-box.all-products__body {
      gap: 0rem;
    }
  }
`;

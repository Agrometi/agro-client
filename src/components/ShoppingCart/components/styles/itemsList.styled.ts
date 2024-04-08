import styled from "styled-components";

export const ItemsLists = styled.div`
  width: 100%;

  .products-list__head {
    display: grid;
    grid-template-columns: 3rem 12rem repeat(6, 1fr);
    column-gap: 1.5rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
    position: sticky;
    top: 6rem;
    z-index: 9;
    padding: 1.5rem 0;
    background-color: ${({ theme }) => theme.colors.white};

    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .products-list {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    li {
      display: grid;
      grid-template-columns: 3rem 12rem repeat(6, 1fr);
      column-gap: 1.5rem;
      height: 9rem;
      border: 1px solid;
      border-top-color: ${({ theme }) => theme.colors.gray};
      border-bottom-color: ${({ theme }) => theme.colors.gray};
      border-left-color: transparent;
      border-right-color: transparent;
      padding: 1rem;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .product-price {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      .is-available,
      .is-unavailable {
        font-size: ${({ theme }) => theme.fontSize.lg};

        p {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .is-available {
        color: ${({ theme }) => theme.colors.green};
      }

      .is-unavailable {
        color: ${({ theme }) => theme.colors.red};
      }

      .remove-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          width: 3rem;
          height: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: ${({ theme }) => theme.fontSize.lg};
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.blue};
          line-height: 1;
          border-radius: 0.5rem;
        }
      }

      .product-fig {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .empty-cart--msg {
    font-weight: 600;
    padding: 8rem 0;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;

    .products-list__head {
      top: 4.5rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .products-list__head {
      display: none;
    }

    .products-list li {
      height: auto;
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 1rem;

      div {
        justify-content: flex-start;
      }

      .remove-btn {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: max-content;
      }

      .product-fig {
        display: none;
      }

      .product-title {
        grid-row: 1;
        grid-column: 1/-1;
        width: 100%;

        [data-line-clamp] {
          text-align: left !important;
        }
      }

      .product-price {
        grid-row: 2;
        grid-column: 1;
      }

      .total-price {
        grid-row: 2;
        grid-column: 2;
      }

      .product-size {
        grid-row: 3;
        grid-column: 1;
      }

      .product-counter {
        grid-row: 3;
        grid-column: 2;
      }

      .is-available,
      .is-unavailable {
        display: none;
        background-color: red !important;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .products-list li {
      grid-template-columns: 8rem repeat(2, max-content);

      .product-fig {
        height: 8rem;
      }

      .remove-btn button {
        height: 2.5rem;
        width: 2.5rem;
        font-size: ${({ theme }) => theme.fontSize.md};
      }
    }
  }
`;

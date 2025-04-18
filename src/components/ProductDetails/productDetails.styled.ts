import styled from "styled-components";

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80svh;
  padding: 1rem 1rem 4rem 1rem;
  padding-top: 6rem;
  position: relative;

  .details-wrapper {
    width: min(128rem, 100%);
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: 4rem;
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &-title {
      font-size: ${({ theme }) => theme.fontSize.h2};
      font-weight: 600;
    }

    &-category {
      font-size: ${({ theme }) => theme.fontSize.md};

      span:first-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.green};
      }
    }

    &-price {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.md};

      span:first-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }
    }

    &-description {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    .dashboard-actions {
      display: flex;
      align-items: center;
      gap: 3rem;
      margin-left: auto;
    }

    &-actions {
      display: flex;
      align-items: center;
      gap: 3rem;

      div > label {
        font-weight: 600;
      }

      &__quantity,
      &__size {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      &__size select {
        outline: none;
      }

      &__add-btn {
        padding: 1rem 6rem;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    padding-top: 4rem;

    .details {
      &-title {
        font-size: ${({ theme }) => theme.fontSize.h3};
      }

      &-category {
        font-size: ${({ theme }) => theme.fontSize.base};
      }

      &-actions {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        &__add-btn {
          grid-column: span 3;
          width: 100%;
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 2.5rem;

    .details {
      gap: 1.25rem;

      &-title {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }

      &-price {
        font-size: ${({ theme }) => theme.fontSize.base};
      }

      &-actions {
        grid-template-columns: repeat(2, 1fr);
        justify-items: start;
        gap: 1.5rem;

        &__size {
          grid-row: 1;
          grid-column: 1;
        }

        &__total-price {
          grid-row: 1;
          grid-column: 2;
        }

        &__quantity {
          grid-row: 2;
          grid-column: span 2;
        }

        &__add-btn {
          grid-column: span 2;
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .details-wrapper {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .details {
      display: grid;
      grid-template-columns: 1fr repeat(2, max-content) 1fr;
      justify-items: center;
      align-items: center;
      row-gap: 2.5rem;
      column-gap: 4rem;

      &-title {
        grid-row: 1;
        grid-column: 1/-1;
      }

      &-category {
        grid-row: 2;
        grid-column: 2;
      }

      &-price {
        grid-row: 2;
        grid-column: 3;
      }

      &-description {
        grid-row: 3;
        grid-column: 1/-1;
        text-align: center;
      }

      &-actions {
        grid-row: 4;
        grid-column: 1/-1;
        width: 100%;
        column-gap: 3rem;
        row-gap: 2rem;
        justify-items: center;

        &__quantity {
          width: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .details-wrapper {
      gap: 0.5rem;
    }

    .details {
      row-gap: 1.5rem;
      grid-template-columns: repeat(2, 1fr) !important;
      justify-items: flex-start;

      &-title {
        width: 100%;
        grid-row: 1;
        grid-column: span 2;
      }

      &-category {
        grid-row: 2;
        grid-column: span 2;
      }

      &-description {
        text-align: start;
        grid-row: 3;
        grid-column: span 2;
      }

      &-price {
        grid-row: 4;
        grid-column: span 2;
      }

      &-actions {
        grid-row: 5;
        grid-column: span 2;
        justify-items: flex-start;

        &__size,
        &__quantity {
          grid-row: auto;
          grid-column: auto;
        }

        &__add-btn {
          grid-row: auto;
        }
      }
    }
  }
`;

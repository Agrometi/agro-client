import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const OrderReview = styled.div`
  flex: 1;
  padding: 2rem;

  .invoice-fig {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      object-fit: contain;
      max-height: 100%;
      max-width: 70%;
    }
  }

  .invoice {
    overflow-y: auto;
    max-height: 100%;
    position: relative;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .order-status {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    position: absolute;
    left: 0rem;
    top: 0rem;

    &.succeed {
      background-color: ${({ theme }) => theme.colors.green};
    }

    &.rejected {
      background-color: ${({ theme }) => theme.colors.red};
    }

    &.pending {
      background-color: orange;
    }
  }

  .invoice-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_dark};
    padding-bottom: 3rem;

    &__left {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .invoice-logo__small {
        width: 6rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          width: 100%;
          object-fit: contain;
        }
      }

      .invoice-info {
        p span:first-child {
          font-weight: 600;
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;

      .invoice-logo__text {
        width: 16rem;

        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }

  .invoice-sub--head {
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_dark};

    div > p:first-child {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
  }

  .invoice-body {
    display: flex;
    flex-direction: column;
    padding: 0 0 3rem 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray_dark};

    &__grid-col {
      display: grid;
      grid-template-columns: 1fr repeat(4, 10rem);
      column-gap: 2rem;
      padding: 1.2rem 3rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    }

    &__grid-col:first-child {
      padding: 1.2rem 6rem;
      font-weight: 600;
    }

    &__grid-col:not(:first-child) {
      margin: 0 3rem;
    }

    &__grid-col p:not(p:first-child) {
      text-align: center;
    }
  }

  .invoice-footer {
    display: flex;
    justify-content: flex-end;
    padding: 3rem 0;

    span {
      display: flex;
      line-height: 1;
      padding: 1.5rem 5.5rem;
      border-radius: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.lg};
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .invoice-actions {
    display: flex;
    gap: 3rem;
    justify-content: flex-end;
  }
`;

export const DescriptionNoteWindow = styled.div`
  padding: 1rem;

  .description-window__wrapper {
    ${scrollbar};
    overflow-y: auto;
    width: 25vw;
    height: 60vh;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .description-window__products-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

import styled from "styled-components";

export const OrderItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 1.5rem;
  margin-right: 2rem;

  &.active {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  .order-fig {
    width: 15rem;
    min-width: 15rem;
    height: 15rem;
    border-radius: 0.5rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .order-details {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    gap: 0.75rem;
    padding-right: 2rem;
  }

  .grid-box {
    display: grid;
    grid-template-columns: 1fr max-content;
    gap: 5rem;

    &__sub {
      display: flex;
      align-items: center;
      gap: 0.25rem;

      span:first-child {
        font-weight: 500;
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }

      .view-invoice__btn {
        padding: 0.5rem 2rem;
        border-radius: 0.25rem;
      }
    }

    .status {
      &.success {
        color: ${({ theme }) => theme.colors.primary};
      }

      &.rejected {
        color: ${({ theme }) => theme.colors.red};
      }

      &.pending {
        color: orange;
      }
    }
  }
`;

import styled from "styled-components";

export const ItemToChooseCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0 1rem 1rem 1rem;
  position: relative;

  &.added-item {
    cursor: pointer;
  }

  &.selected {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }

  .package-checked {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.colors.green};
  }

  h4[data-line-clamp] {
    text-transform: capitalize;
  }

  .item--fig {
    width: 11rem;
    min-width: 11rem;
    height: 11rem;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .item--details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    strong {
      font-weight: 600;
    }
  }

  .item--actions {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-top: auto;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    strong {
      font-weight: 600;
    }

    .total-quantity--box .size-quantity {
      color: ${({ theme }) => theme.colors.green};

      &.danger {
        color: ${({ theme }) => theme.colors.red};
      }
    }

    .size-box select {
      outline: none;
    }

    .add-btn {
      padding: 0.25rem 1rem;
      border-radius: 0.5rem;
      margin-left: auto;

      &.danger {
        svg {
          font-size: ${({ theme }) => theme.fontSize.xl} !important;
        }
      }
    }
  }
`;

import styled from "styled-components";

export const ComboActiveItem = styled.div`
  flex: 1;
  padding: 2rem;
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .active-item--fig {
    width: 70%;
    height: 25rem;
    align-self: center;
    border-radius: 1rem;
    overflow: hidden;
  }

  .product-title {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
  }

  .product-description {
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_shade};
    text-align: justify;
    hyphens: auto;
  }

  .grid-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &__sub {
      span:first-child {
        font-weight: 500;
      }

      span:last-child {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.green};
      }
    }
  }

  .empty-stand {
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

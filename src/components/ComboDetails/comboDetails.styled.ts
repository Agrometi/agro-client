import styled from "styled-components";

export const ComboDetails = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;
  min-height: 80svh;
  padding: 4rem 1rem;

  .gallery-box {
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 0.4rem;

    figure {
      width: 100%;
      height: 20rem;
      overflow: hidden;
      border-radius: 0.5rem;
      cursor: ne-resize;
    }

    figure img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .combo-details__wrapper {
    margin-top: 4rem;
    position: relative;

    .sub-title {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: 600;
      margin-top: 4rem;
      color: ${({ theme }) => theme.colors.gray_dark};
    }
  }

  .combo-price {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-25%);
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
    width: 7rem;
    height: 7rem;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  .combo-title {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.h3};
    color: ${({ theme }) => theme.colors.gray_dark};
    font-weight: 600;
  }

  .combo-description {
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.gray_shade};
    text-align: center;
    padding: 0 8rem;
    margin-top: 4rem;
  }

  .client-actions {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5rem;

    .add-to--cart__btn {
      display: flex;
      align-items: center;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }

  .dashboard-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
  }

  .contained-products {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    gap: 3rem;
  }

  .contained-products__item {
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0;
      transition: all 0.3s ease;
    }

    figure {
      width: 100%;
      height: 25rem;
      border-radius: inherit;
      overflow: inherit;
      cursor: ne-resize;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .contained-product__item-details {
    position: absolute;
    inset: 0;
    z-index: 9;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.5rem;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s 0.15s ease;

    h4[data-line-clamp] {
      font-weight: 600;
      text-align: center;
    }

    .contained-product__item-details-grid {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .view-product__btn {
      position: absolute;
      bottom: 1rem;
      right: 1.2rem;
      width: 3.5rem;
      height: 3.5rem;
      background-color: ${({ theme }) => theme.colors.blue};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }

  .contained-products__item:hover {
    &::after {
      opacity: 1;
    }

    .contained-product__item-details {
      opacity: 1;
      pointer-events: all;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .gallery-box {
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));

      figure {
        height: 16rem;
      }
    }

    .combo-price {
      width: auto;
      height: auto;
      min-width: 5rem;
      min-height: 5rem;
      aspect-ratio: 1/1;
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    .combo-title {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }

    .contained-products {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      gap: 2rem;
    }

    .contained-products__item {
      position: relative;

      figure {
        height: 20rem;
      }
    }

    .contained-product__item-details {
      justify-content: flex-start;
      gap: 0.75rem;
      padding: 1rem;

      h4[data-line-clamp] {
        text-align: start;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      .contained-product__item-details-grid {
        width: 100%;
        margin-top: 0.5rem;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding-top: 2.5rem;

    .combo-details__wrapper .sub-title {
      font-size: ${({ theme }) => theme.fontSize.lg};
      margin-top: 2.5rem;
    }

    .gallery-box {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));

      figure {
        height: 12rem;
      }
    }

    .combo-description {
      text-align: start;
      font-size: ${({ theme }) => theme.fontSize.sm};
      margin-top: 2.5rem;
      padding: 0 2.5rem;
    }

    .add-to--cart__btn {
      margin-top: 2.5rem;
      width: 100%;
    }

    .contained-products {
      margin-top: 2.5rem;
    }
  }
`;

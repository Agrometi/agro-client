import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  .card-fig {
    width: 100%;
    height: 20rem;
    padding: 0 3rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 3rem;
      border: 5px solid ${({ theme }) => theme.colors.gray};
    }
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    span[data-line-clamp] {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.md};
      text-align: center;
    }

    div[data-line-clamp] {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.sm};
      text-align: justify;
      hyphens: auto;
      -webkit-hyphens: auto;
      -moz-hyphens: auto;
    }

    .flex-box {
      display: flex;
      justify-content: space-between;

      &__sub {
        display: flex;
        gap: 0.25rem;

        span.sale {
          padding: 0.2rem 0.5rem;
          text-transform: capitalize;
          font-size: ${({ theme }) => theme.fontSize.xs};
          background-color: ${({ theme }) => theme.colors.yellow};
        }

        span:first-child {
          text-transform: capitalize;
          font-weight: 500;
        }
      }

      button {
        width: calc(50% - 1rem);
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .card-fig {
      padding: 0 2rem;
      height: 18rem;
    }

    .card-details {
      span[data-line-clamp] {
        font-size: ${({ theme }) => theme.fontSize.base};
      }
    }
  }
`;

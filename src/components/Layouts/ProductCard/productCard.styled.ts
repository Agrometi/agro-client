import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9rem;
  background-color: #fbfafa;
  padding: 2rem;
  padding-top: 6rem;
  border-radius: 1rem;

  /* .card-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    span {
      background-color: ${({ theme }) => theme.colors.yellow};
      padding: 0.2rem 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
      text-transform: capitalize;
    }
  } */

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
    justify-content: space-between;
    align-items: center;

    .flex-col {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .card-title {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    .card-price--size {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray_shade};
      gap: 2rem;
    }

    .card-shopping--btn {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.xxl};
      border-radius: 0.2rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 5rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    gap: 3rem;

    .card-fig {
      padding: 0 2rem;
      height: 18rem;
    }

    .card-details {
      .card-title {
        font-size: ${({ theme }) => theme.fontSize.base};
      }

      button {
        width: 4rem;
        height: 4rem;
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }
`;

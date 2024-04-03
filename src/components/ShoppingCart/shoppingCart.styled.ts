import styled, { keyframes } from "styled-components";

const animatePulse = keyframes`
  0%{
    transform: scale(0.6);
  }
  
  60%{
    transform: scale(1.7);
  }
 
  100%{
    transform: scale(1.5);
  }
`;

export const ShoppingCart = styled.div`
  min-height: 80svh;

  .shopping-cart__body {
    margin: 0 auto;
    width: min(128rem, 100%);
    padding: 2rem 1rem;
    display: flex;
    align-items: flex-start;
    gap: 3rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .shopping-cart__body {
      flex-direction: column;
    }
  }
`;

export const ShoppingCartSuccess = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  figure {
    width: 8rem;
    height: 8rem;
    border: 5px solid ${({ theme }) => theme.colors.primary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3rem;

    img {
      object-fit: contain;
      width: 100%;
      transform: scale(0.6);
      margin-left: 2rem;
      animation: ${animatePulse} 1s ease forwards;
    }
  }

  button {
    margin-top: 3rem;
    line-height: 1;
    padding: 2rem 3rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

import styled from "styled-components";

export const ShoppingCartAside = styled.aside`
  width: 30rem;
  position: sticky;
  top: 10rem;
  padding: 3.5rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p {
    text-align: center;
  }

  button {
    width: 100%;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4.5rem 3rem;
  width: 38rem;

  .phone-num__box {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem;

    label {
      grid-row: 1;
      grid-column: span 2;
      font-weight: 600;
      cursor: pointer;
      font-size: ${({ theme }) => theme.fontSize.sm};
      letter-spacing: 0.3px;
    }

    .phone-prefix {
      grid-column: 1;
      grid-row: 2;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      padding: 1.3rem;
      border-radius: 0.5rem;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    [data-text-field] {
      grid-row: 2;
      grid-column: 2;
      width: 100%;
    }

    [data-error-message] {
      grid-row: 3;
      grid-column: span 2;
    }
  }

  button {
    width: 100%;
  }
`;

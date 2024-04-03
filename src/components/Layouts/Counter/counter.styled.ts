import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input {
    width: 5rem;
    height: 3rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    border-radius: 0.4rem;
    text-align: center;

    &::-webkit-inner-spin-button {
      display: none;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

import styled from "styled-components";

export const AddProduct = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  form {
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
      width: 100%;
    }
  }

  [data-dropdown] {
    .category__toggle-btn {
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      border-radius: 0.5rem;
      padding: 0.75rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }

    .category__dropdown-window {
      width: 100%;
    }
  }

  .size-field__block {
    display: flex;
    gap: 2rem;
    position: relative;

    [data-text-field]:nth-child(2) {
      width: 12rem;
    }

    &.first .remove-field__btn {
      transform: translateY(15%);
    }

    .remove-field__btn {
      width: max-content;
      position: absolute;
      right: -3rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.colors.red};
      display: flex;
    }
  }

  .add-size--field__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: 500;

    svg {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

import styled from "styled-components";

export const ErrorBoundary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: min(128rem, 100%);
  margin: 0 auto;
  padding: 3rem;

  .alarm {
    text-align: center;
    font-size: 2.8rem;
  }

  .alarm__content-box {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .alarm__content-box--title {
    display: flex;
    align-items: center;
    font-weight: 600;

    &.message-title {
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }

  .message {
    color: ${({ theme }) => theme.colors.red};
  }

  .message.at {
    color: ${({ theme }) => theme.colors.green};
  }

  .stack {
    background-color: rgba(0, 0, 0, 0.5);
    color: ${({ theme }) => theme.colors.white};
  }

  .toggle-stack--btn {
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 3rem;
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.red};
    display: block;
    margin: 0 auto;
    margin-top: 4rem;
  }
`;

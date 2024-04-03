import styled from "styled-components";

export const ShortenOrdersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  li {
    /* padding: 0 1rem 1rem 1rem; */
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-right: 2rem;
    padding: 1rem 1.5rem;

    &.active {
      border-radius: 1rem;
      border: 1px solid ${({ theme }) => theme.colors.blue};
    }

    div {
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    div span:first-child {
      font-weight: 600;
    }

    div span:last-child {
      color: ${({ theme }) => theme.colors.gray_dark};
    }

    .status {
      &.success {
        color: ${({ theme }) => theme.colors.primary};
      }

      &.rejected {
        color: ${({ theme }) => theme.colors.red};
      }

      &.pending {
        color: orange;
      }
    }
  }
`;

import styled from "styled-components";

export const YourCategories = styled.ul`
  padding: 3rem 2rem;

  .infinite-scroll-component {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  .category-item {
    width: 24rem;
    height: 13.5rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    padding: 1.5rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 0.4rem;
  }

  p {
    font-weight: 500;
  }

  .category-item__actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    svg {
      font-size: ${({ theme }) => theme.fontSize.xxl} !important;
    }
  }
`;

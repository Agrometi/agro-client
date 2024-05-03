import styled from "styled-components";

export const Articles = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  .articles-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.bg};
    padding: 2rem 3rem;

    [data-search] {
      width: 50rem;
      margin-left: auto;

      div.text-field__adornment,
      input {
        background-color: transparent !important;
      }
    }

    .category-btn {
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
      padding: 1rem 2rem;
      line-height: 1;
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .category-dropdown {
      top: calc(100% + 2.2rem);
    }
  }

  .add-article__btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gray_dark};
    padding: 1rem 1rem;
    width: max-content;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_dark};

    svg {
      font-size: 22px;
      stroke: ${({ theme }) => theme.colors.gray_dark};
    }
  }

  .articles-list .infinite-scroll-component {
    padding: 0.5rem 3rem 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
    gap: 3rem;

    [data-article-card] {
      max-width: 38rem;
    }

    [data-spinner] {
      grid-column: span 4;
    }
  }
`;

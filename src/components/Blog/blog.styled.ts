import styled from "styled-components";

export const Blog = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;
  min-height: 80svh;
  padding: 3rem 1rem;

  .articles-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: ${({ theme }) => theme.colors.bg};
    padding-bottom: 2rem;

    [data-search] {
      width: 50rem;
      margin-left: auto;

      div.text-field__adornment,
      input {
        background-color: transparent !important;
      }
    }
  }

  .articles-list .infinite-scroll-component {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 3rem;
    justify-items: space-between;

    [data-article-card] {
      max-width: 40rem;
    }

    [data-spinner] {
      grid-column: span 4;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .articles-head [data-search] {
      width: 35rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    padding: 1.5rem 1rem;

    .articles-head [data-search] {
      width: 35rem;
    }

    .articles-list .infinite-scroll-component {
      padding: 0.5rem;
      justify-content: center;
      grid-template-columns: repeat(1, 1fr);

      [data-article-card] {
        max-width: 100%;
      }
    }
  }
`;

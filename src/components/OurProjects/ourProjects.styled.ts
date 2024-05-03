import styled from "styled-components";

export const OurProjects = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;
  min-height: 80svh;
  padding: 3rem 1rem;

  .articles-list .infinite-scroll-component {
    padding: 0.5rem 3rem 2rem 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
    gap: 3rem;

    [data-article-card] {
      max-width: 38rem;
    }

    [data-spinner] {
      grid-column: span 4;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    padding: 1.5rem 1rem;

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

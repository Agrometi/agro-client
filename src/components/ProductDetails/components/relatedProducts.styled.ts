import styled from "styled-components";

export const RelatedProducts = styled.div`
  width: min(128rem, 100%);
  margin: 0 auto;
  padding-top: 8rem;

  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;
  }

  .related-list {
    margin-top: 7rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4em;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .related-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    padding-top: 6rem;

    .related-list {
      gap: 2.5rem;
      margin-top: 5rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding-top: 4rem;

    .related-list {
      margin-top: 4rem;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

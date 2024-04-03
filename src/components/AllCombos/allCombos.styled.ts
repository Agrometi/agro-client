import styled from "styled-components";

export const AllCombos = styled.div`
  .infinite-scroll-component {
    padding-top: 4rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .infinite-scroll-component {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .infinite-scroll-component {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

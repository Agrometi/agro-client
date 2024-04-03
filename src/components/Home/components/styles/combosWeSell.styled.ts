import styled from "styled-components";

export const CombosWeSell = styled.div`
  padding: 4rem 1rem;

  .products-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8rem;
    margin-top: 6rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .products-list {
      gap: 5rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .products-list {
      margin-top: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .products-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

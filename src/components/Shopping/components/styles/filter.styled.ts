import styled from "styled-components";

export const Filter = styled.div`
  align-self: flex-start;
  grid-row: span 2;
  grid-column: 2;
  max-width: 35rem;
  min-width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: sticky;
  top: 6rem;
  padding: 4.5rem 1rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  .price-filter--box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    &__value {
      display: flex;
      gap: 4rem;
    }
  }

  .expand-filter__btn {
    display: none;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    top: 4rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1/1;
    grid-row: 2;
    width: 100%;
    max-width: 100%;
    top: 13rem;
    padding: 1rem;
    gap: 2rem;

    .expand-filter__btn {
      display: block;
    }

    &.closed > *:not(.expand-filter__btn) {
      display: none !important;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    top: 14.5rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem;
    position: unset;
  }
`;

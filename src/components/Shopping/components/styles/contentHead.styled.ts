import styled from "styled-components";

export const ContentHead = styled.div`
  grid-column: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 5rem;
  z-index: 9;
  padding: 3rem 1rem 2rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};

  .all-products__content-header--nav {
    display: flex;
    gap: 2rem;

    li a.active {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .all-products__content-header--actions {
    display: flex;
    align-items: center;
    gap: 3rem;

    .sort-btn {
      display: flex;
      align-items: center;

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }

      .sort-btn__content {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: ${({ theme }) => theme.fontSize.base};
      }

      .sort-btn__content svg {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
    }

    .search-box {
      display: flex;
      gap: 1.5rem;

      input {
        width: 25rem;
      }

      button {
        padding: 0 3rem;
        border-radius: 0.5rem;
        text-transform: capitalize;
      }

      button svg {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    top: 4rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: 1/1;
    grid-row: 1;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    gap: 1rem;
    padding-top: 1rem;
    flex-direction: column;
    top: 4.75rem;

    .all-products__content-header--actions,
    .all-products__content-header--nav {
      width: 100%;
      justify-content: flex-start;
    }

    .all-products__content-header--actions .search-box {
      margin-left: auto;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    top: 3.5rem;
    position: unset;

    .all-products__content-header--actions {
      margin-top: 0.5rem;

      .search-box {
        input {
          width: 100%;
        }

        button {
          padding: 0rem 1rem;
        }

        button span {
          display: none;
        }
      }
    }
  }
`;

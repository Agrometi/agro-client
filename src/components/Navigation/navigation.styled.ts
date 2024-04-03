import styled from "styled-components";

export const Navigation = styled.nav`
  position: sticky;
  top: 0rem;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow.bottom_right_sm};

  .nav-row {
    display: flex;
    align-items: center;
    width: min(128rem, 100%);
    margin: 0 auto;
  }

  .nav-row__left {
    flex: 2;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 600;

    .logo-link {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .nav-row__center {
    flex: 4;
    display: flex;
    align-items: center;
    gap: 2rem;
    border: 1px solid;
    border-color: transparent ${({ theme }) => theme.colors.gray};
    padding: 1rem;
    justify-content: space-between;

    .routes-list {
      display: flex;
      align-items: center;
      gap: 2rem;

      li a.active {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    .search-field {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background-color: #fff;
      border-radius: 0.5rem;
      padding: 0 0.5rem;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }

      input {
        border: none;
      }
    }

    .cart-btn {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      color: ${({ theme }) => theme.colors.primary};
      display: flex;
      position: relative;

      span {
        position: absolute;
        width: 2rem;
        height: 2rem;
        right: -0.75rem;
        top: -0.75rem;
        line-height: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.red};
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }
  }

  .nav-row__right {
    flex: 1;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 20rem;

    svg {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    padding: 0 1rem;

    .search-field {
      margin-left: auto;

      [data-text-field] {
        display: none;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};

    .nav-row__left {
      flex: 1;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    .nav-row__center {
      .routes-list {
        gap: 1rem;
      }

      .cart-btn,
      .search-field svg {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
    }

    .nav-row__right svg {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .nav-row__center {
      border-right: none;
      gap: 1rem;
    }

    .nav-row__right {
      display: none;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .nav-row__left {
      width: max-content;
      flex: none;

      img {
        width: 3rem;
      }
    }

    .nav-row__center {
      border: none;
      justify-content: space-between;
    }

    .search-field {
      margin: unset;
      margin-left: auto;
    }
  }
`;

export const NavSocials = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 3rem 0;

  .socials-list {
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
    width: min(128rem, 100%);
    margin: 0 auto;

    li div,
    li a {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    li div span,
    li a span {
      line-height: 1;
      display: flex;
      align-items: center;

      svg {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    padding: 3rem 1rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .socials-list li a {
      gap: 1rem;
    }

    .socials-list li a span svg {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding: 1rem 0.25rem;

    .socials-list {
      gap: 1rem 0.5rem;
    }

    .socials-list li a {
      gap: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }

    .socials-list li a span svg {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

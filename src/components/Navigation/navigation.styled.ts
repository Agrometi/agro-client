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
    flex: 7;
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

    .burger-btn {
      display: none;
    }
  }

  .nav-row__right {
    flex: 1;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    min-width: 21rem;

    svg {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    padding: 0 1rem;

    .nav-row__right {
      display: none;
    }

    .nav-row__center {
      flex: 9;
      border-right-color: transparent;
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

      .cart-btn {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .nav-row__center {
      justify-content: flex-end;
      border: none;
      position: relative;

      .routes-list {
        display: none;
      }

      .routes-list.active {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
        position: absolute;
        width: 25rem;
        height: 95vh;
        z-index: 999;
        top: 100%;
        right: -1rem;
        background-color: ${({ theme }) => theme.colors.white};
        box-shadow: -1.96px 1.96px 2px rgba(0, 0, 0, 0.15);
      }

      .cart-btn {
        order: 1;
      }

      .burger-btn {
        order: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.lg};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    .nav-row__left img {
      width: 3rem;
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
    .socials-list li div,
    .socials-list li a {
      gap: 1rem;
    }

    .socials-list li div span svg,
    .socials-list li a span svg {
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    padding: 1rem 0.25rem;

    .socials-list {
      gap: 1rem 0.5rem;
    }

    .socials-list li div,
    .socials-list li a {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }

    .socials-list li div span svg,
    .socials-list li a span svg {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

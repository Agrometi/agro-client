import styled from "styled-components";

export const AboutUs = styled.div`
  padding: 5rem 1rem 1rem 1rem;
  display: flex;
  justify-content: space-between;

  .about-us__left {
    flex: 1;
    max-width: 50%;
    display: flex;
    flex-direction: column;
    gap: 5rem;

    &-desc {
      color: ${({ theme }) => theme.colors.gray_shade};
    }

    &-email {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSize.md};
      margin-top: 4rem;

      button {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
        width: 5rem;
        height: 5rem;
        font-size: ${({ theme }) => theme.fontSize.xxl};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.2rem;
      }
    }

    &-socials {
      display: flex;
      align-items: center;
      gap: 3rem;

      a {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
        width: 5rem;
        height: 5rem;
        font-size: ${({ theme }) => theme.fontSize.xxl};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.2rem;
      }
    }

    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray_shade};
      margin-top: auto;
      font-weight: 500;

      div {
        display: flex;
        gap: 1.5rem;
      }
    }
  }

  .about-us__right {
    background-color: ${({ theme }) => theme.colors.primary};
    height: 58vh;
    justify-self: flex-end;
    width: 32rem;
    border-radius: 0.2rem;
    padding: 5rem 3rem;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    border-bottom: 7px solid ${({ theme }) => theme.colors.yellow};

    &-title {
      font-size: ${({ theme }) => theme.fontSize.xl};
      letter-spacing: 2px;
      font-weight: 600;
    }

    .date-box {
      display: flex;
      justify-content: space-between;

      span:first-child {
        font-weight: 600;
      }

      span:last-child {
        color: ${({ theme }) => theme.colors.yellow};
      }
    }

    .happy-hours {
      p:last-child {
        padding-left: 1rem;
        font-weight: 600;
      }
    }

    .support-box {
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.gray_dark};
      padding: 3rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-radius: 0.2rem;

      p {
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.lg};
      }

      div {
        color: ${({ theme }) => theme.colors.primary};
        display: flex;
        align-items: center;
        gap: 1rem;

        span {
          display: flex;
          align-items: center;
          line-height: 1;

          svg {
            font-size: ${({ theme }) => theme.fontSize.xl};
          }
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    flex-direction: column;
    gap: 4rem;

    .about-us__left {
      order: 2;
      width: 100%;
      max-width: 100%;
      gap: 2rem;

      .logo {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }

      &-desc {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      &-email {
        margin-top: 2rem;
        font-size: ${({ theme }) => theme.fontSize.base};

        button {
          width: 4rem;
          height: 4rem;
          font-size: ${({ theme }) => theme.fontSize.xl};
        }
      }

      &-socials {
        a {
          width: 4rem;
          height: 4rem;
          font-size: ${({ theme }) => theme.fontSize.xl};
        }
      }
    }

    .about-us__right {
      order: 1;
      width: 100%;

      &-title {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }

      .happy-hours,
      .date-box {
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      .support-box {
        p {
          font-size: ${({ theme }) => theme.fontSize.md};
        }

        div span:last-child {
          font-size: ${({ theme }) => theme.fontSize.sm};
        }
      }
    }
  }
`;

import styled from "styled-components";

export const GetInTouch = styled.div`
  display: flex;
  padding: 6rem 1rem;
  position: relative;
  height: 100vh;

  .left-side {
    flex: 2;
  }

  .right-side {
    flex: 1;
    height: 100%;
    background-color: crimson;

    figure {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .content-box {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    inset: 14rem 15rem 14rem 1rem;
    display: flex;
    gap: 5rem;
    align-items: stretch;
    padding-top: 3rem;

    &__details {
      flex: 3;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      &-description {
        color: ${({ theme }) => theme.colors.gray_shade};
        font-size: ${({ theme }) => theme.fontSize.sm};
      }

      &-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        font-size: ${({ theme }) => theme.fontSize.sm};
        gap: 3rem;

        li {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: ${({ theme }) => theme.colors.gray_shade};

          svg {
            font-size: ${({ theme }) => theme.fontSize.xl};
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }

      &-footer {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        padding: 4rem 3rem;
        border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
        display: flex;
        gap: 3rem;
        align-items: center;
        margin-top: auto;

        .CircularProgressbar {
          width: 12rem;
          max-width: 12rem;
          height: 12rem;
          max-height: 12rem;
        }

        .satisfied-clients {
          display: flex;
          flex-direction: column;

          span:first-child {
            font-size: ${({ theme }) => theme.fontSize.xs};
          }

          span:last-child {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
        }

        .footer-label {
          font-size: ${({ theme }) => theme.fontSize.lg};
          width: 18rem;
        }
      }
    }

    &__form {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .form-fields--wrapper {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .submit-btn {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.primary};
        width: 100%;
        padding: 1rem 0;
        margin-top: auto;
        text-transform: uppercase;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .content-box {
      &__details {
        gap: 2rem;

        &-list {
          gap: 2rem;

          li svg {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
        }

        &-footer {
          gap: 2rem;
          padding: 3rem 2rem;

          .CircularProgressbar {
            width: 10rem;
            max-width: 10rem;
            height: 10rem;
            max-height: 10rem;
          }
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    .content-box {
      padding-top: 1rem;

      &__details {
        &-list {
          gap: 1.5rem;

          li svg {
            font-size: ${({ theme }) => theme.fontSize.md};
          }
        }

        &-footer {
          gap: 1.5rem;
          padding: 2rem 1rem;

          .CircularProgressbar {
            width: 8rem;
            max-width: 8rem;
            height: 8rem;
            max-height: 8rem;
          }
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    height: 120vh;
    padding: 1rem;

    .left-side {
      display: none;
    }

    .content-box {
      inset: 0;
      padding: 5rem 2rem;
      background-color: rgba(299, 299, 299, 0.7);
      backdrop-filter: blur(3px);
      flex-direction: column;
      gap: 3rem;

      &__details {
        &-description {
          color: ${({ theme }) => theme.colors.black} !important;
        }

        &-list li {
          color: ${({ theme }) => theme.colors.black} !important;
        }
      }

      &__form {
        .form-fields--wrapper {
          padding: 0rem;
        }
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    height: 130vh;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 140vh;

    .content-box {
      &__details {
        &-list {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    }
  }
`;

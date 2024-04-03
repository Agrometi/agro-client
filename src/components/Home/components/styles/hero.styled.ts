import styled from "styled-components";

export const Hero = styled.div`
  width: 100%;
  height: 75vh;
  overflow: hidden;
  position: relative;

  .hero-fig {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hero__content-box {
    position: absolute;
    z-index: 9;
    inset: 0;
    width: min(128rem, 100%);
    left: 50%;
    transform: translateX(-50%);
  }

  .hero-stand {
    background-color: ${({ theme }) => theme.colors.white};
    width: 45rem;
    padding: 7rem 4rem 4rem 4rem;
    position: absolute;
    top: 50%;
    right: 10rem;
    transform: translateY(-50%);
    border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 0.2rem;

    p {
      font-weight: 600;
      font-size: ${({ theme }) => theme.fontSize.h3};
      letter-spacing: 1px;

      &.primary {
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 700;
      }
    }

    a {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem 2rem;
      border-radius: 0.2rem;
      display: inline-block;
      margin-top: 4rem;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .hero-stand {
      padding: 4rem;

      p {
        font-size: ${({ theme }) => theme.fontSize.xxl};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .hero-stand {
      padding: 3rem;

      p {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .hero-stand {
      right: auto;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    height: 60vh;

    .hero-stand {
      width: 90%;
    }
  }
`;

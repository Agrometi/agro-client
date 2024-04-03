import styled from "styled-components";

export const ProductSlider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  .react-multi-carousel-list {
    width: 55rem;
    max-width: 100%;
    height: 10rem;

    .slider-thumbnail__fig {
      width: 10rem;
      height: 10rem;
      overflow: hidden;
      position: relative;

      &.active {
        border-radius: 0.5rem;
        border: 3px solid ${({ theme }) => theme.colors.blue};
      }
    }

    .slider-thumbnail__fig video,
    .slider-thumbnail__fig img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      cursor: pointer;
    }

    .slider-thumbnail__fig svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  .active-slide__video-fig,
  .magnify-app--box {
    width: 55rem !important;
    height: 40rem !important;
    display: flex;
  }

  .active-slide__video-fig {
    &:has(video) {
      background-color: ${({ theme }) => theme.colors.gray};
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet}) {
    gap: 1rem;

    .active-slide__video-fig,
    .magnify-app--box {
      width: 45rem !important;
      height: 35rem !important;
    }

    .react-multi-carousel-list {
      width: 45rem;

      .slider-thumbnail__fig {
        width: 8rem;
        height: 8rem;
      }

      button {
        min-width: 3.75rem !important;
        min-height: 3.75rem !important;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    gap: 0.5rem;

    .active-slide__video-fig,
    .magnify-app--box {
      width: 95vw !important;
      min-height: 88vw !important;
      aspect-ratio: 1/1 !important;
    }

    .react-multi-carousel-list {
      width: 95vw;

      .slider-thumbnail__fig {
        width: 7rem;
        height: 7rem;
      }
    }
  }
`;

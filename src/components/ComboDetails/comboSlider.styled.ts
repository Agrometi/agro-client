import styled from "styled-components";

export const ComboSlider = styled.div`
  position: fixed;
  z-index: 999;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;

  .image-wrapper {
    width: 90%;
    height: 90%;
  }

  figure {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  figure img {
    object-fit: contain;
    height: 100%;
    max-width: 100%;
  }

  .slider__arrow-btn {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h2};

    &.right {
      transform: rotate(180deg);
    }
  }

  .slider__close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .image-wrapper {
      width: 100%;
      height: 100%;
    }

    .slider__arrow-btn {
      position: absolute;
      top: 50%;
      width: 5rem;
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.7);

      &.left {
        left: 0;
        transform: translateY(-50%);
      }

      &.right {
        right: 0;
        transform: rotate(180deg) translateY(50%);
      }
    }

    .slider__close-btn {
      top: 0.5rem;
      right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      padding: 0.5rem;
      font-size: ${({ theme }) => theme.fontSize.xxl};
    }
  }
`;

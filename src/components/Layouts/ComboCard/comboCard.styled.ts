import styled, { keyframes } from "styled-components";

const animatePointerEvents = keyframes`
  from{
    pointer-events: none;
  } to{
    pointer-events: all;
  }
`;

export const ComboCard = styled.div`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .combo-assets {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    width: 100%;
    height: 20rem;
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.gray};

    .combo-card__img {
      display: block;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border: 2px solid transparent;
      border-radius: inherit;
      cursor: pointer;
    }

    .view-details__btn {
      position: absolute;
      z-index: 8;
      background-color: rgba(0, 0, 0, 0.7);
      color: ${({ theme }) => theme.colors.white};
      bottom: 1rem;
      right: 1rem;
      padding: 0.5rem 2.5rem;
      border-radius: 10rem;
    }

    &:has(.combo-card__img.hovered) {
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(4rem, 1fr);
      justify-items: center;

      .combo-card__img {
        grid-row: 1;
        position: relative;
        z-index: 8;
        width: 4rem;
        height: 4rem;
        border-radius: 100%;
        margin-top: 0.5rem;
        animation: ${animatePointerEvents} 0.6s 0s forwards;

        &.hovered-thumbnail {
          border-color: ${({ theme }) => theme.colors.blue};
        }
      }

      .combo-card__img.hovered {
        border-radius: 0;
        position: absolute;
        z-index: 7;
        inset: 0;
        width: 100%;
        height: 100%;
        margin-top: 0;
        cursor: auto;
        border-radius: 0.5rem;
      }
    }
  }

  .combo-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h4[data-line-clamp] {
      cursor: pointer;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSize.base};
    }

    div[data-line-clamp] {
      color: ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    &--duplex {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
      }

      div > span:first-child {
        text-transform: capitalize;
        font-weight: 500;
      }

      div > span:last-child {
        color: ${({ theme }) => theme.colors.gray_shade};
      }

      button {
        width: calc(50% - 1rem);
      }
    }
  }
`;

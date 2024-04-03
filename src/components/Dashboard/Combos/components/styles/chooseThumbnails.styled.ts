import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const ChooseThumbnails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: stretch;
  height: 65vh;

  .assets-box--head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: 500;
    }

    span strong {
      color: ${({ theme }) => theme.colors.green};
    }

    &__back-btn {
      color: ${({ theme }) => theme.colors.gray_dark};
      font-size: ${({ theme }) => theme.fontSize.xxl};
      width: max-content;
      display: flex;
      align-items: center;
    }
  }

  .assets-box__list-wrapper {
    max-width: 100%;
    overflow-y: auto;
    ${scrollbar};
  }

  .assets-box__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding-right: 1rem;

    video,
    img {
      width: 100%;
      height: 10rem;
      border-radius: 0.2rem;
      object-fit: cover;
      cursor: pointer;
    }

    video.selected,
    img.selected {
      border: 3px solid ${({ theme }) => theme.colors.blue};
    }
  }

  .added-products__assets-msg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    opacity: 0.8;
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  .assets-box__done-btn {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.green};
    margin-top: auto;
    text-transform: uppercase;
    padding: 1rem 0;
    border-radius: 0.5rem;
  }
`;

import styled from "styled-components";

export const CreateComboForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .chosen-existing--assets__review {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    padding: 1rem;
    border-radius: 0.5rem;
    overflow: hidden;
    justify-content: center;

    figure {
      width: 6.5rem;
      min-width: 6.5rem;
      height: 6.5rem;
      border-radius: 0.5rem;
      position: relative;
      border-radius: 0.5rem;

      video,
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
      }

      span {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSize.lg};
        z-index: 2;
      }

      span::after {
        content: "";
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: -1;
        border-radius: inherit;
      }

      button {
        position: absolute;
        z-index: 3;
        top: -0.5rem;
        right: -0.5rem;
        color: ${({ theme }) => theme.colors.red};
        background-color: ${({ theme }) => theme.colors.white};
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
      }

      &:hover button {
        display: flex;
        pointer-events: all;
      }
    }
  }

  .create-combo__form-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.white};
    padding: 1rem 0;
    border-radius: 0.5rem;
    cursor: pointer;

    &.media {
      background-color: ${({ theme }) => theme.colors.green};
    }

    &.publish {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

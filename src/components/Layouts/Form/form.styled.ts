import styled, { css } from "styled-components";
import { scrollbar } from "@/styles/utils";
import { animateY } from "@/styles/animations";

const commonStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: 600;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
    letter-spacing: 0.3px;
  }

  p {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding-left: 0.75rem;
  }

  .text-field__input {
    border-radius: 0.5rem;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 1rem 0.75rem;
    width: 100%;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.gray_dark};

    &::-webkit-inner-spin-button {
      display: none;
    }
  }
`;

export const TextField = styled.div`
  ${commonStyles};
`;

export const TextFieldPassword = styled.div`
  ${commonStyles};

  input.text-field__input {
    border: none;
    border-radius: none;
  }

  .password-field__wrapper {
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding-right: 0.75rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.white};
  }

  .password-field__eye-btn {
    font-size: 2.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      stroke: ${({ theme }) => theme.colors.gray_dark};
    }
  }
`;

export const TextareaField = styled.div`
  ${commonStyles};

  .text-field__input {
    resize: none;
    ${scrollbar};
  }
`;

export const OTPField = styled.div`
  ${commonStyles};

  .otp-container {
    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem !important;
      height: 5rem;
      border-radius: 0.5rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;

export const SelectField = styled.div`
  ${commonStyles};
  position: relative;
  z-index: 1;

  &.active {
    z-index: 99;
  }

  .text-field__wrapper {
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    background-color: ${({ theme }) => theme.colors.white};

    button {
      display: flex;
      width: max-content;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xl};
      }
    }

    input {
      border: none;
    }
  }

  .dropdown-backdrop {
    position: fixed;
    inset: 0;
    z-index: -1;
  }

  .dropdown-window {
    position: absolute;
    left: 0;
    right: 0;
    padding: 1.5rem;
    border-radius: 0.5rem;
    top: calc(100% + 1.5rem);
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
    border: 1px solid ${({ theme }) => theme.colors.gray};
    ${animateY()};

    &__list {
      overflow-y: auto;
      max-height: 25rem;
      ${scrollbar};
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        cursor: pointer;
        transition: all 0.3s ease;
        text-transform: capitalize;

        &:hover {
          color: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }
`;

export const FileField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.sm};
    letter-spacing: 0.3px;
  }

  .anotation-label {
    font-weight: 500;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    margin-top: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.white};
  }

  .chosen-assets__review-box {
    margin-top: 1rem;
  }

  .chosen-assets__review-box.single {
    display: flex;
    align-items: center;
  }

  .chosen-assets__review-box.multiple {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 2;
    gap: 1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .chosen-assets__review-box--fig {
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 0.5rem;
    position: relative;

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }

    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.colors.blue};
    }

    .remove-asset--btn {
      position: absolute;
      top: -0.75rem;
      right: -0.75rem;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.white};
      pointer-events: none;
      opacity: 0;

      svg {
        font-size: ${({ theme }) => theme.fontSize.md};
      }
    }

    &:hover .remove-asset--btn:not(.hide-remove) {
      opacity: 1;
      pointer-events: all;
    }

    .extra-assets__layout {
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: inherit;
      font-size: ${({ theme }) => theme.fontSize.md};
    }
  }
`;

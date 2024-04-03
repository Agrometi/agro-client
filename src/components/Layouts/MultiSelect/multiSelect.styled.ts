import styled from "styled-components";
import { animateY } from "@/styles/animations";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .multi-select {
    * {
      transition: none;
    }

    .dropdown-container {
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.bg};
    }

    .dropdown-heading {
      cursor: pointer;
    }

    .dropdown-container .dropdown-content {
      .panel-content {
        margin-top: 1.5rem;
        border: 2px solid #4285f4;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 0.5rem;
        box-shadow: ${({ theme }) => theme.boxShadow.space_sm};
        ${animateY()}
      }

      .select-panel {
        padding: 1rem;
      }

      .panel-content input {
        color: ${({ theme }) => theme.colors.gray_dark};
      }

      .select-panel .options {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-top: 0.75rem;
      }

      .select-panel .options li.select-item,
      .select-panel .options li > label.select-item {
        border-radius: 0.5rem;
        transition: all 0.2s ease-out;

        &.selected {
          background-color: ${({ theme }) => theme.colors.blue_shade};
          color: ${({ theme }) => theme.colors.white};
        }

        &:not(.selected):hover {
          background-color: ${({ theme }) => theme.colors.blue_tint};
          color: ${({ theme }) => theme.colors.white};
        }
      }

      input[type="checkbox"] {
        display: none;
      }
    }
  }
`;

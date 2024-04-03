import { css } from "styled-components";

export const themeTransition = css`
  transition: background-color 0.5s ease, color 0.6s ease;
`;

export const scrollbar = css`
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray_dark : theme.colors.gray};
    border-radius: 2rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2rem;
    background-color: ${({ theme }) =>
      theme.mode === "light" ? theme.colors.gray : theme.colors.gray_dark};
  }
`;

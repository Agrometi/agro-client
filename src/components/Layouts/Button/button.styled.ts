import styled, { css } from "styled-components";

type ButtonT = {
  $show?: "danger" | "primary" | "secondary";
  $fillType: "filled" | "outlined";
};

export const Button = styled.button<ButtonT>`
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 2rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  width: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
  }

  ${({ $show, $fillType }) => {
    switch ($show) {
      case "danger":
        return $fillType === "filled"
          ? css`
              background-color: ${({ theme }) => theme.colors.red};

              &:hover {
                background-color: ${({ theme }) => theme.colors.red_shade};
              }
            `
          : css`
              color: ${({ theme }) => theme.colors.red};

              &:hover {
                color: ${({ theme }) => theme.colors.red_shade};
              }
            `;
      case "primary":
        return $fillType === "filled"
          ? css`
              background-color: ${({ theme }) => theme.colors.blue};

              &:hover {
                background-color: ${({ theme }) => theme.colors.blue_shade};
              }
            `
          : css`
              color: ${({ theme }) => theme.colors.blue};

              &:hover {
                color: ${({ theme }) => theme.colors.blue_shade};
              }
            `;
      case "secondary":
        return $fillType === "filled"
          ? css`
              background-color: ${({ theme }) => theme.colors.green};

              &:hover {
                background-color: ${({ theme }) => theme.colors.green_shade};
              }
            `
          : css`
              color: ${({ theme }) => theme.colors.green};

              &:hover {
                color: ${({ theme }) => theme.colors.green_shade};
              }
            `;
      default:
        return css``;
    }
  }}

  svg {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

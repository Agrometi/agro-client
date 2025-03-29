import styled, { css } from "styled-components";

export const Unknown = styled.div<{ $fixed: boolean }>`
  ${({ $fixed }) =>
    $fixed
      ? css`
          height: 100vh;
          width: min(128rem, 100%);
        `
      : css`
          position: absolute;
          inset: 0;
        `};

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
    border: 1px solid ${({ theme }) => theme.colors.gray_light};
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }

  span {
    color: ${({ theme }) => theme.colors.red};
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 600;
  }

  p {
    padding: 2rem 6rem;
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  button {
    letter-spacing: 0.5px;
    margin-top: 3rem;
    padding: 1rem 3rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    color: ${({ theme }) => theme.colors.white};
  }
`;

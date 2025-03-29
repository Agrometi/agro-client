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

export const hyphens = css`
  text-align: justify;
  hyphens: auto;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
`;

export const textWrapBalance = css`
  word-wrap: break-word;
  text-wrap: balance;
  -ms-text-wrap: balance;
  -moz-text-wrap: balance;
  -webkit-text-wrap: balance;
`;

const quill = css`
  .quill {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    p:has(img) {
      width: max-content;
      max-width: 100%;
      height: auto;
      overflow: hidden;
      border-radius: 0.5rem;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
      margin: 3rem auto;
      padding: 0 !important;
      line-height: 1;
      letter-spacing: 0px;

      img {
        object-fit: contain;
        max-width: 100%;
        height: 100%;
        margin-bottom: -8px;
      }
    }

    p:has(img):has(:nth-child(2)),
    p:has(img):has(:nth-child(3)) {
      display: grid;
      gap: 1rem;
      padding: 1rem !important;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        margin: 0;
        border-radius: inherit;
      }
    }

    p:has(img):has(:nth-child(2)) {
      grid-template-columns: repeat(2, 1fr);
    }

    p:has(img):has(:nth-child(3)) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const quillReadOnly = css`
  .ql-container.ql-bubble {
    .ql-clipboard,
    .ql-tooltip {
      display: none;
    }

    .ql-editor {
      h1 {
        display: inline-block;
      }

      a {
        color: ${({ theme }) => theme.colors.blue};
      }

      iframe {
        width: 75%;
        max-height: 60vh;
        aspect-ratio: 16/9;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        margin: 3rem auto;
      }

      p,
      p > * {
        font-size: ${({ theme }) => theme.fontSize.base};
        line-height: 1.5;
        letter-spacing: 0.5px;
        pointer-events: none !important;
        color: ${({ theme }) => theme.colors.text} !important;
        ${hyphens};
      }

      p > span {
        /* background: none !important; */
      }

      blockquote {
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.gray_dark};
        width: max-content;
        max-width: 100%;
        display: inline-block;
        padding: 0.3rem;
        padding-left: 0.5rem;
        border-radius: 0.2rem;
        border-left: 2px solid ${({ theme }) => theme.colors.gray_dark};
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin: 0.5rem 0;
        font-size: ${({ theme }) => theme.fontSize.sm};
        letter-spacing: 0.5px;
      }

      pre {
        color: #fff;
        background-color: #1b2024;
        border: 1px solid ${({ theme }) => theme.colors.gray_shade};
        padding: 2rem;
        border-radius: 0.5rem;
      }

      h1 {
        margin: 2rem 0;
      }

      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 1rem 0;
      }

      img {
        cursor: pointer;
        pointer-events: all !important;
      }
    }
  }

  ${quill};
`;

export const quillEdit = css`
  .quill .ql-toolbar.ql-snow,
  .quill .ql-container.ql-snow {
    border-radius: 1rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }

  .quill .ql-container.ql-snow {
    padding: 1rem;
  }

  .quill .ql-container.ql-snow .ql-editor {
    height: 55vh;
    overflow-y: auto;
    ${scrollbar};

    p,
    p > * {
      font-size: ${({ theme }) => theme.fontSize.md};
    }

    iframe {
      border-radius: 0.5rem;
      margin: 3rem auto;
      width: 90%;
      aspect-ratio: 16/9;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
    }
  }

  ${quill};
`;

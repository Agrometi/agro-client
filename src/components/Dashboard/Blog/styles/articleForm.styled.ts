import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const ArticleForm = styled.div`
  padding: 3rem 1rem;

  .category-btn {
    border: 1px solid ${({ theme }) => theme.colors.gray};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
    font-size: ${({ theme }) => theme.fontSize.md};
    padding: 1rem 4rem;
    line-height: 1;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .category-dropdown {
    top: calc(100% + 2.2rem);
  }

  .title-field {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
    border-radius: 1rem;
    text-align: center;
    border-color: ${({ theme }) => theme.colors.gray};
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }

  .editor-wrapper {
    width: 100rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  .quill {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

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

    p:has(img) {
      width: 90%;
      border-radius: 0.5rem;
      margin: 3rem auto;

      img {
        box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
        object-fit: contain;
        width: 100%;
        height: 100%;
        border-radius: inherit;
      }
    }

    iframe {
      border-radius: 0.5rem;
      margin: 3rem auto;
      width: 90%;
      aspect-ratio: 16/9;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.4);
    }
  }

  .publish-btn {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    padding: 1.5rem 0;
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }
`;

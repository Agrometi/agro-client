import styled from "styled-components";
import { quillReadOnly, textWrapBalance } from "@/styles/utils";

export const Article = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem 3rem;
  min-height: 80svh;
  position: relative;

  .article-title {
    font-size: ${({ theme }) => theme.fontSize.h3};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    text-align: start;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 3rem;
    ${textWrapBalance};
    text-align: center;
  }

  .article-head {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 2rem;
    gap: 2rem;

    a,
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      margin-left: auto;
      color: ${({ theme }) => theme.colors.red};
    }

    a svg {
      font-size: 26px;
    }
  }

  ${quillReadOnly};

  @media screen and (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 2rem 1rem;

    .article-title {
      font-size: ${({ theme }) => theme.fontSize.xl};
      margin-bottom: 2rem;
    }

    .article-head {
      padding: 0 1.5rem;

      button svg,
      a svg {
        font-size: 22px;
      }
    }

    .ql-container.ql-bubble .ql-editor {
      iframe,
      p:has(img) {
        margin: 1.5rem auto;
      }

      h1 {
        margin: 1rem 0;
      }
    }
  }
`;

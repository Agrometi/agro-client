import styled from "styled-components";
import { quillEdit } from "@/styles/utils";

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

  .publish-btn {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    padding: 1.5rem 0;
    box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  }

  ${quillEdit}
`;

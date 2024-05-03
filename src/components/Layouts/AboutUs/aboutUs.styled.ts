import styled from "styled-components";
import { quillReadOnly, quillEdit } from "@/styles/utils";

export const AboutUs = styled.div`
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  width: min(128rem, 100%);
  min-height: 90svh;

  .edit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.white};

    svg {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    &.cancel {
      border-radius: 0.5rem;
      width: max-content;
      height: auto;
      padding: 0.75rem 2rem;
      background-color: ${({ theme }) => theme.colors.gray_shade};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  ${quillReadOnly};

  ${quillEdit};
`;

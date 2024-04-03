import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const ItemsToChooseRow = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};

  .search-field {
    display: flex;
    align-items: center;
    gap: 2rem;

    input {
      width: 100%;
      height: 3.5rem;
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.gray};
      border-radius: 0.4rem;
      padding: 0 0.5rem;

      &::placeholder {
        font-style: italic;
        font-size: ${({ theme }) => theme.fontSize.sm};
      }
    }

    button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0.5rem 2rem;
      border-radius: 0.4rem;
    }
  }

  .infinite-scroll-component__outerdiv {
  }

  .infinite-scroll-component {
    ${scrollbar};
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-right: 1rem;
  }
`;

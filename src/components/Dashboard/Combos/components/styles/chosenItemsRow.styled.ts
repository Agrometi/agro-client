import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const ChosenItemsRow = styled.div`
  flex: 1;
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .added-items__list-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    font-weight: 500;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }

  .added-items__list-wrapper {
    ${scrollbar};
    overflow-y: auto;
    height: 100%;
    padding-bottom: 1rem;
  }

  .added-items__list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-right: 1rem;
  }
`;

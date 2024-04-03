import styled from "styled-components";
import { scrollbar } from "@/styles/utils";

export const Orders = styled.div`
  flex: 1;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 0.5rem 2rem 2rem 2rem;

  .expand-orders--btn {
    width: 100%;
    padding: 1rem 0;
    border-radius: 0.5rem;
    font-size: ${({ theme }) => theme.fontSize.md};
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .orders {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 80vh;
    overflow-y: auto;
    ${scrollbar};
  }
`;

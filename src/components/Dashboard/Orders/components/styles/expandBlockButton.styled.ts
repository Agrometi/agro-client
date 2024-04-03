import styled from "styled-components";

export const ExpandBlockButton = styled.button<{ $isOpen: boolean }>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  padding: 1rem;
  border: 1px solid
    ${({ theme, $isOpen }) =>
      $isOpen ? theme.colors.green : theme.colors.gray};
  margin-right: 1rem;
  border-radius: 0.5rem;

  svg {
    transition: all 0.3s ease;
    transform: rotate(${({ $isOpen }) => ($isOpen ? "180deg" : "0deg")});
  }
`;

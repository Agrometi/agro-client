import styled from "styled-components";
import { scale } from "@/styles/animations";

export const CheckBox = styled.label`
  display: inline-block;
  width: 3rem;
  min-width: 3rem;
  height: 3rem;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.white};

  .checkbox--icon {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.black};
    animation: ${scale({ from: 1, to: 0.5 })} 0.3s ease forwards;
  }

  &.checked .checkbox--icon {
    animation: ${scale()} 0.3s ease forwards;
  }
`;

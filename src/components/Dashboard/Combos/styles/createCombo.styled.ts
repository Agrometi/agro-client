import styled from "styled-components";

export const CreateCombo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  height: 87vh;

  .combo-modal__toggle-btn {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    font-size: ${({ theme }) => theme.fontSize.h3};
    background-color: ${({ theme }) => theme.colors.green};
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const CreateComboModal = styled.div`
  width: 40rem;
  padding: 2rem 0;
  min-height: 65vh;
  max-height: 88vh;
`;

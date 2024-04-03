import styled from "styled-components";

export const Orders = styled.div`
  height: 93vh;
  display: flex;
  flex-direction: column;

  .orders__content-box {
    display: flex;
    border-top: 1px solid ${({ theme }) => theme.colors.gray};
    height: 100%;
    overflow: hidden;
  }
`;

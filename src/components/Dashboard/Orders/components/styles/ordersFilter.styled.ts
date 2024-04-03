import styled from "styled-components";

export const OrdersFilter = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  font-weight: 500;

  span {
    cursor: pointer;
  }

  svg {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  span.active,
  svg {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

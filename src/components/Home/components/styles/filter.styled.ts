import styled from "styled-components";

export const Filter = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
  font-weight: 500;

  li a {
    padding: 1rem 2rem;
    border-radius: 0.2rem;

    &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray_shade};
  font-weight: 500;
  width: min(128rem, 100%);
  margin-top: auto;
  margin: 0 auto;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 1rem;

  div {
    display: flex;
    gap: 1.5rem;
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;

    p {
      order: 2;
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
  }
`;

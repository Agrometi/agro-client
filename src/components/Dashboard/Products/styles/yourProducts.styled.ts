import styled from "styled-components";

export const YourProducts = styled.div`
  padding: 2rem;

  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 4rem;
  }
`;

export const Warning = styled.div`
  padding: 3rem 1rem;
  position: relative;

  p {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
  }

  ol {
    margin-top: 1.5rem;
    max-height: 25rem;
    min-height: 10rem;
    overflow-y: auto;
  }

  ol li {
    list-style: decimal;
    margin-left: 2.5rem;
  }

  button:nth-child(3) {
    margin-top: 4rem;
  }

  button:nth-child(4) {
    background-color: ${({ theme }) => theme.colors.soft_black};
  }

  button:nth-child(5) {
    background-color: ${({ theme }) => theme.colors.red};
  }

  button {
    width: 100%;
    margin-top: 1rem;
  }
`;

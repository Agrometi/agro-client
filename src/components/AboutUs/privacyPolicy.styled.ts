import styled from "styled-components";

export const PrivacyPolicy = styled.div`
  min-height: 80svh;

  .policy__body {
    margin: 0 auto;
    width: min(128rem, 100%);
    padding: 4rem 1rem;
  }

  .policy__descriptions-box {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    color: ${({ theme }) => theme.colors.gray_dark};

    .policy__descriptions-box__block {
      padding: 0;

      h4 {
        display: block;
        padding-bottom: 1.5rem;
      }

      ol {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      ol li {
        list-style: decimal;
        margin-left: 3.5rem;
      }
    }
  }
`;

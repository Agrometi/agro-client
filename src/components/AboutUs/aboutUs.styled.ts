import styled from "styled-components";

export const AboutUs = styled.div`
  min-height: 80svh;

  .about-us__body {
    margin: 0 auto;
    width: min(128rem, 100%);
    padding: 4rem 1rem;
  }

  .about-us__descriptions-box {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.gray_dark};
    margin-bottom: 3rem;

    h4 {
      display: block;
      margin: 2rem 0;
    }

    ul li {
      list-style: disc;
      margin-left: 3.5rem;
    }
  }
`;

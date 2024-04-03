import styled from "styled-components";

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .section-title__sub {
    width: max-content;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.primary};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 0.25rem;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  .section-title__main {
    font-size: ${({ theme }) => theme.fontSize.xxl};

    span:first-child {
      font-weight: 700;
    }

    span:last-child {
      font-weight: 500;
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    .section-title__main {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.mobile_lg}) {
    .section-title__main {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
`;

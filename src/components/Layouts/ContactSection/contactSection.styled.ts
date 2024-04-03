import styled from "styled-components";

export const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem;
  padding: 5rem 1rem;

  .contact-box {
    padding: 6rem 7rem;
    font-weight: 500;
    border-left: 4px solid ${({ theme }) => theme.colors.yellow};
    box-shadow: ${({ theme }) => theme.boxShadow.bottom_right_sm};

    &__icon {
      display: flex;
      align-items: center;

      svg {
        font-size: ${({ theme }) => theme.fontSize.xxl};
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  .contact-box.col-2 {
    grid-column: span 2;
    display: flex;
    gap: 4rem;
    align-items: flex-start;
  }

  .contact-box.col-3 {
    grid-column: span 3;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    .contact-box {
      padding: 4rem 5rem;

      &.col-2 {
        gap: 2rem;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.desktop_sm}) {
    gap: 2rem;

    .contact-box {
      padding: 3rem 3rem;

      &.col-2 {
        gap: 1rem;
      }
    }
  }

  @media screen and (${({ theme }) => theme.breakpoints.tablet_sm}) {
    grid-template-columns: repeat(1, 1fr);

    .contact-box {
      grid-column: span 1 !important;
      font-size: ${({ theme }) => theme.fontSize.sm};
    }

    .contact-box.col-3 {
      flex-direction: row;
      justify-content: flex-start;
    }
  }
`;

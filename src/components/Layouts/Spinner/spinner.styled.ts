import styled, { css } from "styled-components";

const loader = css`
  .loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    animation: rotate 1s linear infinite;
  }
  .loader::before,
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.green};
    animation: prixClipFix 2s linear infinite;
  }
  .loader::after {
    border-color: ${({ theme }) => theme.colors.primary};
    animation: prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;

export const StandSpinner = styled.div`
  position: fixed;
  z-index: 9999;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

export const Spinner = styled.div`
  width: 100%;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

export const RelativeSpinner = styled.div`
  position: absolute;
  z-index: 9999;
  inset: 0;
  /* width: 100vw; */
  /* height: 90vh; */
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

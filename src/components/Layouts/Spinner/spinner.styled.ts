import styled, { css } from "styled-components";

const loader = css`
  .loader {
    transform: rotateZ(45deg);
    perspective: 1000px;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: #0d65d9;
  }
  .loader:before,
  .loader:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  .loader:after {
    color: #ff3d00;
    transform: rotateY(70deg);
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotateZ(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotateZ(360deg);
    }
  }

  @keyframes rotateccw {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }

  @keyframes spin {
    0%,
    100% {
      box-shadow: 0.2em 0px 0 0px currentcolor;
    }
    12% {
      box-shadow: 0.2em 0.2em 0 0 currentcolor;
    }
    25% {
      box-shadow: 0 0.2em 0 0px currentcolor;
    }
    37% {
      box-shadow: -0.2em 0.2em 0 0 currentcolor;
    }
    50% {
      box-shadow: -0.2em 0 0 0 currentcolor;
    }
    62% {
      box-shadow: -0.2em -0.2em 0 0 currentcolor;
    }
    75% {
      box-shadow: 0px -0.2em 0 0 currentcolor;
    }
    87% {
      box-shadow: 0.2em -0.2em 0 0 currentcolor;
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
  /* position: absolute; */
  /* z-index: 9999; */
  /* inset: 0; */
  width: 100vw;
  height: 90vh;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${loader};
`;

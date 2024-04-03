import { css, keyframes } from "styled-components";

const scale = (args?: { from: number; to: number }) => {
  const frame = keyframes`
    from{
      opacity: 0;
      transform: scale(${args?.from ? `${args.from}rem` : "0.5"});
    }
    to{
      opacity: 1;
      transform: scale(${args?.from ? `${args.to}rem` : "1"});
    }
  `;

  return frame;
};

const animateY = (args?: { initialY?: number; duration?: number }) => css`
  @keyframes animateY {
    0% {
      transform: translateY(${args?.initialY ? `${args.initialY}rem` : "5rem"});
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: animateY ${args?.duration ? `${args.duration}s` : "0.3s"} ease
    forwards;
`;

export { animateY, scale };

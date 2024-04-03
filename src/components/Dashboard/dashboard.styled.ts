import styled from "styled-components";

export const Dashboard = styled.div`
  min-height: 100vh;

  .nav-wrapper {
    width: 100%;
    display: flex;
    align-items: center;

    button {
      padding: 1.5rem 2rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      font-weight: 500;
    }
  }

  .dashboard-fig {
    width: 100%;
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    figcaption {
      position: absolute;
      left: 10rem;
      top: 50%;
      transform: translateY(-50%);
      font-size: ${({ theme }) => theme.fontSize.h1};
      font-weight: 600;
      letter-spacing: 3px;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

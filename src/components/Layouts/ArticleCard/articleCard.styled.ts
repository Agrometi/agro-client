import styled from "styled-components";
import { Link } from "react-router-dom";
import { hyphens } from "@/styles/utils";

export const ArticleCard = styled(Link)`
  padding: 1rem 1.5rem 2rem 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: ${({ theme }) => theme.boxShadow.radial_md};
  border-radius: 0.5rem;
  height: 40rem;
  position: relative;

  .article-card__fig {
    height: 18rem;
    min-height: 18rem;
    border-radius: 0.5rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .article-card__head {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-top: 1rem;

    .card-dropdown__trigger-btn {
      height: max-content;
      font-size: 29px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;

      svg {
        transform: scale(1.8);
      }
    }

    .article-card__dropdown-window {
      left: -15rem;
    }
  }

  h2[data-line-clamp] {
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.gray_dark};
  }

  .card-description__wrapper {
    overflow: hidden;
    flex: 1;

    div[data-line-clamp] {
      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.colors.gray_shade};

      p {
        line-height: 1.6;
        ${hyphens}
      }
    }
  }
`;

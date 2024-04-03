import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { ArrowLeftIcon } from "@/components/Layouts/Icons";

type FormTitleT = {
  path: string;
  title: string;
};

const StyledTitle = styled.p`
  position: absolute;
  top: 2rem;
  left: 3rem;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSize.h3};
  }
`;

const FormTitle: React.FC<FormTitleT> = ({ path, title }) => {
  const navigate = useNavigate();

  const onGoBack = () => navigate(path);

  return (
    <StyledTitle className="create-category__title">
      <button onClick={onGoBack}>
        <ArrowLeftIcon />
      </button>

      {title}
    </StyledTitle>
  );
};

export default FormTitle;

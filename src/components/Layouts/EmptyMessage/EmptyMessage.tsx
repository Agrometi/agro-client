import styled from "styled-components";

type EmptyMessageT = {
  message: string;
};

const StyledMessage = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.gray_shade};
`;

const EmptyMessage: React.FC<EmptyMessageT> = ({ message }) => {
  return (
    <StyledMessage>
      <p>{message}</p>
    </StyledMessage>
  );
};

export default EmptyMessage;

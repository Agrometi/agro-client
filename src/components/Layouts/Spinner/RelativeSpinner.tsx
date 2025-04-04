import * as Styled from "./spinner.styled";

const RelativeSpinner: React.FC = () => {
  return (
    <Styled.RelativeSpinner>
      <span className="loader"></span>
    </Styled.RelativeSpinner>
  );
};

export default RelativeSpinner;

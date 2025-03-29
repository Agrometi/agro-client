import * as Styled from "./spinner.styled";

const StandSpinner: React.FC = () => {
  return (
    <Styled.StandSpinner>
      <span className="loader"></span>
    </Styled.StandSpinner>
  );
};

export default StandSpinner;

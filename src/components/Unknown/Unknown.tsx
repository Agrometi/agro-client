import { useNavigate } from "react-router-dom";
import * as Styled from "./unknown.styled";
import { PATHS } from "@/config/paths";

type UnknownPropsT = {
  fixed?: boolean;
};

const Unknown: React.FC<UnknownPropsT> = ({ fixed = true }) => {
  const navigate = useNavigate();

  return (
    <Styled.Unknown $fixed={fixed}>
      <div>
        <span>404</span>

        <p>გვერდი არ არსებობს !</p>

        <button onClick={() => navigate(PATHS.home_page)}>
          მთავარ გვერდზე დაბრუნება
        </button>
      </div>
    </Styled.Unknown>
  );
};

export default Unknown;

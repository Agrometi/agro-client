import { Link } from "react-router-dom";

type HaveAnAccountT = {
  q: string;
  a: string;
  path: string;
};

const HaveAnAccount: React.FC<HaveAnAccountT> = ({ q, a, path }) => {
  return (
    <p className="have-an--account">
      <span>{q}</span>
      &nbsp;
      <strong>
        <Link to={path}>{a}</Link>
      </strong>
    </p>
  );
};

export default HaveAnAccount;

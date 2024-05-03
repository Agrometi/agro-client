import { Link } from "react-router-dom";

import { PATHS } from "@/config/paths";

import * as Styled from "./footer.styled";

const Footer: React.FC = () => {
  return (
    <Styled.Footer>
      <p>&copy;Agro. All Rights Reserved.</p>

      <div>
        <Link to={PATHS.about_us_page}>ჩვენს შესახებ</Link>
        <Link to={PATHS.privacy_policy__page}>უსაფრთხოების პირობები</Link>
      </div>

      <figure>
        <img src="/assets/ibiard.jpeg" alt="იბიარდი" height={30} />
      </figure>
    </Styled.Footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { PATHS } from "@/config/paths";

import * as Styled from "./styles/hero.styled";

const Hero: React.FC = () => {
  return (
    <Styled.Hero>
      <figure className="hero-fig">
        <img
          src="https://images.unsplash.com/photo-1625758476104-f2ed6c81248f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          title=""
          width="100%"
        />
      </figure>

      <div className="hero__content-box">
        <div className="hero-stand">
          <p>მოგესალმებათ</p>
          <p className="primary">AGRO-ORNAMENT</p>
          <Link to={PATHS.all_products_page}>ნახეთ პროდუქტები</Link>
        </div>
      </div>
    </Styled.Hero>
  );
};

export default Hero;

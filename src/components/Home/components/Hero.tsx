import { Link } from "react-router-dom";
import { PATHS } from "@/config/paths";

import * as Styled from "./styles/hero.styled";

const Hero: React.FC = () => {
  return (
    <Styled.Hero>
      <figure className="hero-fig">
        <img
          width="100%"
          height="50vh"
          alt="seeding scene"
          src="/assets/hero.webp"
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

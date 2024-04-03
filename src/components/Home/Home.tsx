import * as Styled from "./home.styled";
import { ContactSection } from "@/components/Layouts";
import Hero from "./components/Hero";
import CombosWeSell from "./components/CombosWeSell";
import ProductsWeSell from "./components/ProductsWeSell";

const Home: React.FC = () => {
  return (
    <Styled.Home>
      <Hero />

      <div className="home-body">
        <ProductsWeSell />

        <CombosWeSell />

        {/* <GetInTouch /> */}

        <ContactSection />

        {/* <AboutUs /> */}
      </div>
    </Styled.Home>
  );
};

export default Home;

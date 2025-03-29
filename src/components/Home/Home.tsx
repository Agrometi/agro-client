import * as Styled from "./home.styled";
import Hero from "./components/Hero";
import CombosWeSell from "./components/CombosWeSell";
import ProductsWeSell from "./components/ProductsWeSell";
import { ContactSection, Header } from "@/components/Layouts";

const Home: React.FC = () => {
  return (
    <Styled.Home>
      <Header />

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

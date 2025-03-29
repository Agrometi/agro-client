import { lazy } from "react";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import { useScrollTop } from "@/hooks/utils";

import Footer from "@/components/Footer/Footer";
import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Helmet
        title="Agrometi - თანამედროვე სათბურების მშენებლობა და აგრო ინოვაციები"
        canonical={PATHS.home_page}
      />
      <Navigation />
      <SuspenseContainer>
        <Home />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default HomePage;

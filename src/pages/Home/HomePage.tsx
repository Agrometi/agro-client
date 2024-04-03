import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const Home = lazy(() => import("@/components/Home/Home"));

const HomePage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Navigation />
      <SuspenseContainer>
        <Home />
      </SuspenseContainer>
      <Footer />
    </>
  );
};

export default HomePage;

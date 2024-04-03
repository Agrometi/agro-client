import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const AboutUs = lazy(() => import("@/components/AboutUs/AboutUs"));

const AboutUsPage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <AboutUs />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default AboutUsPage;

import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const AboutUs = lazy(() => import("@/components/AboutUs/AboutUs"));

const AboutUsPage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Helmet
        title="ჩვენს შესახებ | Agrometi - ინოვაციები აგროინდუსტრიაში"
        canonical={PATHS.about_us_page}
      />

      <Navigation />

      <SuspenseContainer>
        <AboutUs />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default AboutUsPage;

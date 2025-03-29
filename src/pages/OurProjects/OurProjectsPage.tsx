import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

const OurProjects = lazy(() => import("@/components/OurProjects/OurProjects"));

const OurProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Agrometi | პროექტები"
        canonical={PATHS.our_projects_page}
      />

      <Navigation />

      <SuspenseContainer>
        <OurProjects />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default OurProjectsPage;

import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

const OurProjects = lazy(() => import("@/components/OurProjects/OurProjects"));

const OurProjectsPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <OurProjects />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default OurProjectsPage;

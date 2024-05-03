import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const AboutUs = lazy(() => import("@/components/Layouts/AboutUs/AboutUs"));

const DashboardEditAboutUsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <AboutUs isEditing={true} allowActions={true} />
    </SuspenseContainer>
  );
};

export default DashboardEditAboutUsPage;

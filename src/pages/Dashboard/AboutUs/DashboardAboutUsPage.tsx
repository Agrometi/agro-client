import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const AboutUs = lazy(() => import("@/components/Layouts/AboutUs/AboutUs"));

const AboutUsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <AboutUs isEditing={false} allowActions={true} />
    </SuspenseContainer>
  );
};

export default AboutUsPage;

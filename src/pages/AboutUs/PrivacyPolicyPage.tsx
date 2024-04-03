import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const PrivacyPolicy = lazy(() => import("@/components/AboutUs/PrivacyPolicy"));

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <PrivacyPolicy />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

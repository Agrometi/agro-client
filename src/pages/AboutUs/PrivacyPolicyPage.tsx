import { lazy } from "react";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const PrivacyPolicy = lazy(() => import("@/components/AboutUs/PrivacyPolicy"));

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet title="| Privacy Police" canonical={PATHS.privacy_policy__page} />

      <Navigation />

      <SuspenseContainer>
        <PrivacyPolicy />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default PrivacyPolicyPage;

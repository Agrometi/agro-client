import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const ComboDetails = lazy(
  () => import("@/components/ComboDetails/ComboDetails")
);

const ComboPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <ComboDetails />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default ComboPage;

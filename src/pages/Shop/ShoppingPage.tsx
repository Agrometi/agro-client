import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const ShoppingLayout = lazy(
  () => import("@/components/Shopping/ShoppingLayout")
);

const ShoppingPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <ShoppingLayout>
          <Outlet />
        </ShoppingLayout>
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default ShoppingPage;

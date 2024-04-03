import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const ShoppingCart = lazy(
  () => import("@/components/ShoppingCart/ShoppingCart")
);

const ShoppingCartPage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <ShoppingCart />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default ShoppingCartPage;

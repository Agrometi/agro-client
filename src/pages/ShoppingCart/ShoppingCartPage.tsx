import { lazy } from "react";

import { useScrollTop } from "@/hooks/utils";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

import Footer from "@/components/Footer/Footer";
import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";

const ShoppingCart = lazy(
  () => import("@/components/ShoppingCart/ShoppingCart")
);

const ShoppingCartPage: React.FC = () => {
  useScrollTop();

  return (
    <>
      <Helmet title="Agrometi | კალათა" canonical={PATHS.shopping_cart_page} />

      <Navigation />

      <SuspenseContainer>
        <ShoppingCart />
        <Footer />
      </SuspenseContainer>
    </>
  );
};

export default ShoppingCartPage;

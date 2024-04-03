import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const ProductDetails = lazy(
  () => import("@/components/ProductDetails/ProductDetails")
);

const ProductDetailsPage: React.FC = () => {
  return (
    <>
      <Navigation />

      <SuspenseContainer>
        <ProductDetails />
      </SuspenseContainer>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;

import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

const AllProducts = lazy(() => import("@/components/AllProducts/AllProducts"));

const AllProductsPage: React.FC = () => {
  return (
    <>
      <Helmet
        title="Agrometi | პროდუქტები"
        canonical={PATHS.all_products_page}
      />
      <SuspenseContainer>
        <AllProducts />
      </SuspenseContainer>
    </>
  );
};

export default AllProductsPage;

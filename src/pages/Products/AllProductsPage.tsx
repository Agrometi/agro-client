import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const AllProducts = lazy(() => import("@/components/AllProducts/AllProducts"));

const AllProductsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <AllProducts />
    </SuspenseContainer>
  );
};

export default AllProductsPage;

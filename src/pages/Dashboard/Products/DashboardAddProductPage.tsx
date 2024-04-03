import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const AddProduct = lazy(
  () => import("@/components/Dashboard/Products/AddProduct")
);

const DashboardAddProductPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <AddProduct />
    </SuspenseContainer>
  );
};

export default DashboardAddProductPage;

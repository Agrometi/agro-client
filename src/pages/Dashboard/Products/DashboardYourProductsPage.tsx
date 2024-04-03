import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const YourProducts = lazy(
  () => import("@/components/Dashboard/Products/YourProducts")
);

const DashboardYourProductsPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <YourProducts />
    </SuspenseContainer>
  );
};

export default DashboardYourProductsPage;

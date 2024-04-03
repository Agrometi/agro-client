import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const Orders = lazy(() => import("@/components/Dashboard/Orders/Orders"));

const DashboardOrdersPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Orders />
    </SuspenseContainer>
  );
};

export default DashboardOrdersPage;

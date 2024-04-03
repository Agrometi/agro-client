import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const YourCombos = lazy(
  () => import("@/components/Dashboard/Combos/YourCombos")
);

const DashboardYourCombosPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <YourCombos />
    </SuspenseContainer>
  );
};

export default DashboardYourCombosPage;

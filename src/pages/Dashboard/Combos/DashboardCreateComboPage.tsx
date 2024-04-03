import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
import CreateComboProvider from "@/Providers/CreateComboProvider";
const CreateCombo = lazy(
  () => import("@/components/Dashboard/Combos/CreateCombo")
);

const DashboardCreateComboPage: React.FC = () => {
  return (
    <CreateComboProvider>
      <SuspenseContainer>
        <CreateCombo />
      </SuspenseContainer>
    </CreateComboProvider>
  );
};

export default DashboardCreateComboPage;

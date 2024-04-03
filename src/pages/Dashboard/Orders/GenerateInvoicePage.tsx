import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const Invoice = lazy(() => import("@/components/Dashboard/Invoice/Invoice"));

const GenerateInvoicePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Invoice />
    </SuspenseContainer>
  );
};

export default GenerateInvoicePage;

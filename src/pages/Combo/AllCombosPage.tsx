import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const AllCombos = lazy(() => import("@/components/AllCombos/AllCombos"));

const AllCombosPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <AllCombos />
    </SuspenseContainer>
  );
};

export default AllCombosPage;

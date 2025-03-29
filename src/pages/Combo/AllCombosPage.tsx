import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

import { PATHS } from "@/config/paths";
import Helmet from "@/SEO/Helmet";

const AllCombos = lazy(() => import("@/components/AllCombos/AllCombos"));

const AllCombosPage: React.FC = () => {
  return (
    <>
      <Helmet title="Agrometi | ნაკრებები" canonical={PATHS.all_combos_page} />
      <SuspenseContainer>
        <AllCombos />
      </SuspenseContainer>
    </>
  );
};

export default AllCombosPage;

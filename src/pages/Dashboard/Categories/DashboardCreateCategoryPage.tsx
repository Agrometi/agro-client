import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const CreateCategory = lazy(
  () => import("@/components/Dashboard/Categories/CreateCategory")
);

const DashboardCreateCategoryPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <CreateCategory />
    </SuspenseContainer>
  );
};

export default DashboardCreateCategoryPage;

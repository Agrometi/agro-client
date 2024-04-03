import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";
const YourCategories = lazy(
  () => import("@/components/Dashboard/Categories/YourCategories")
);

const DashboardYourCategoriesPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <YourCategories />
    </SuspenseContainer>
  );
};

export default DashboardYourCategoriesPage;

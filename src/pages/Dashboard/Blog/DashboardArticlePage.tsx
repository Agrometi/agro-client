import { lazy } from "react";

import { SuspenseContainer } from "@/components/Layouts";

const Article = lazy(() => import("@/components/Layouts/Article/Article"));

const DashboardArticlePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Article root="dashboard" />
    </SuspenseContainer>
  );
};

export default DashboardArticlePage;

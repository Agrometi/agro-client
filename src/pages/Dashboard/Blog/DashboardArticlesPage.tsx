import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const Articles = lazy(() => import("@/components/Dashboard/Blog/Articles"));

const DashboardArticlesPage: React.FC = () => {
  return (
    <SuspenseContainer>
      <Articles />
    </SuspenseContainer>
  );
};

export default DashboardArticlesPage;

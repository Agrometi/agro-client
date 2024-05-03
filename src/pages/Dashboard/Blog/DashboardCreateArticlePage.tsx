import { lazy } from "react";
import { SuspenseContainer } from "@/components/Layouts";

const ArticleForm = lazy(
  () => import("@/components/Dashboard/Blog/ArticleForm")
);

const DashboardCreateArticlePage: React.FC = () => {
  return (
    <SuspenseContainer>
      <ArticleForm />
    </SuspenseContainer>
  );
};

export default DashboardCreateArticlePage;

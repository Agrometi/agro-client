import { lazy } from "react";
import { Outlet } from "react-router-dom";

import { useRedirectUnAuthorized } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";
const Dashboard = lazy(() => import("@/components/Dashboard/Dashboard"));

const DashboardPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  return loading ? (
    <StandSpinner />
  ) : (
    <SuspenseContainer>
      <Dashboard>
        <Outlet />
      </Dashboard>
    </SuspenseContainer>
  );
};

export default DashboardPage;

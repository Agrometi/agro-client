import { lazy } from "react";
import { Outlet } from "react-router-dom";

import Helmet from "@/SEO/Helmet";
import { useRedirectUnAuthorized } from "@/hooks/auth";

import { SuspenseContainer, StandSpinner } from "@/components/Layouts";
const Dashboard = lazy(() => import("@/components/Dashboard/Dashboard"));

const DashboardPage: React.FC = () => {
  const { loading } = useRedirectUnAuthorized();

  return (
    <>
      <Helmet canonical="" title="Agrometi | სამართავი პანელი" />

      {loading ? (
        <StandSpinner />
      ) : (
        <SuspenseContainer>
          <Dashboard>
            <Outlet />
          </Dashboard>
        </SuspenseContainer>
      )}
    </>
  );
};

export default DashboardPage;

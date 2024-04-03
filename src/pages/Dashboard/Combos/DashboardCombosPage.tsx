import { lazy, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { SuspenseContainer } from "@/components/Layouts";

const Combos = lazy(() => import("@/components/Dashboard/Combos/Combos"));

const DashboardCombosPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.dashboard_combos_page)
      navigate(`${PATHS.dashboard_your_combos_page}?dashboard=1`);
  }, [pathname]);

  return (
    <SuspenseContainer>
      <Combos>
        <Outlet />
      </Combos>
    </SuspenseContainer>
  );
};

export default DashboardCombosPage;

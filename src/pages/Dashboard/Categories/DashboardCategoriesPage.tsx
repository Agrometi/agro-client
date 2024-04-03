import { lazy, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { SuspenseContainer } from "@/components/Layouts";

const Categories = lazy(
  () => import("@/components/Dashboard/Categories/Categories")
);

const DashboardCategoriesPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.dashboard_categories_page)
      navigate(PATHS.dashboard_your_categories_page);
  }, [pathname]);

  return (
    <SuspenseContainer>
      <Categories>
        <Outlet />
      </Categories>
    </SuspenseContainer>
  );
};

export default DashboardCategoriesPage;

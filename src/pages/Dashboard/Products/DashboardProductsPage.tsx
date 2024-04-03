import { lazy, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { SuspenseContainer } from "@/components/Layouts";

const Products = lazy(() => import("@/components/Dashboard/Products/Products"));

const DashboardProductsPage: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === PATHS.dashboard_products_page)
      navigate(PATHS.dashboard_your_products_page);
  }, [pathname]);

  return (
    <SuspenseContainer>
      <Products>
        <Outlet />
      </Products>
    </SuspenseContainer>
  );
};

export default DashboardProductsPage;

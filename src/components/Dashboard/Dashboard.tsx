import { useLocation } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useLogoutQuery } from "@/hooks/api/auth";

import * as Styled from "./dashboard.styled";
import Navigation from "./utils/Navigation";
import { AppIcon } from "@/components/Layouts/Icons";

type DashboardT = {
  children: React.ReactNode;
};

const routes = [
  {
    path: PATHS.dashboard_categories_page,
    title: "კატეგორიები",
  },
  {
    path: PATHS.dashboard_products_page,
    title: "პროდუქტები",
  },
  {
    path: PATHS.dashboard_combos_page,
    title: "ნაკრები",
  },
  {
    path: PATHS.dashboard_orders_page,
    title: "შეკვეთები",
  },
  {
    path: PATHS.home_page,
    title: <AppIcon />,
  },
];

const Dashboard: React.FC<DashboardT> = ({ children }) => {
  const { pathname } = useLocation();

  const { onLogout } = useLogoutQuery();

  return (
    <Styled.Dashboard>
      <div className="nav-wrapper">
        <Navigation routes={routes} />

        <button onClick={onLogout}>გასვლა</button>
      </div>

      <div className="dashboard__content-box">
        {pathname === PATHS.dashboard_page ? (
          <figure className="dashboard-fig">
            <img
              src="/assets/dashboard.jpg"
              alt="Agro Dashboard"
              title="dashboard"
              loading="eager"
              width="100%"
            />
            <figcaption>
              Agro
              <br />
              Dashboard
            </figcaption>
          </figure>
        ) : (
          children
        )}
      </div>
    </Styled.Dashboard>
  );
};

export default Dashboard;

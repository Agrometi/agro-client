import AppRoutes from "@/config/routes";
import { Routes as ReactRouter, Route } from "react-router-dom";
import { RouteT } from "./interface/config.types";

const Routes: React.FC = () => {
  return <ReactRouter>{routeIterator(AppRoutes)}</ReactRouter>;
};

export default Routes;

function routeIterator(routes: RouteT[]) {
  return routes.map((route) => (
    <Route key={route.title} path={route.path} element={route.element}>
      {route.children.length > 0 ? routeIterator(route.children) : <></>}
    </Route>
  ));
}

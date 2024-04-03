import { NavigateFunction, Location } from "react-router-dom";

type RouteT = {
  path: string;
  title: string;
  element: React.ReactNode;
  children: Array<RouteT>;
};

type DecodedUserT = {
  _id: string;
  email: string;
  role: string;
  username: string;
  exp: number;
  iat: number;
};

type RouterHistoryT = {
  navigate:
    | NavigateFunction
    | ((path: string, state?: { [key: string]: any }) => void);
  location: Location;
};

export type { RouteT, DecodedUserT, RouterHistoryT };

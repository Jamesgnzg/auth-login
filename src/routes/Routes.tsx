import Dashboard from "../pages/Dashboard";
import Login from "../pages/login";
import { DASHBOARD, INDEX, LOGIN } from "./paths";

export const privateRoutes = [
  {
    path: DASHBOARD,
    element: <Dashboard />,
  },
];

export const publicRoutes = [
  {
    path: INDEX,
    element: <Login />,
  },
  {
    path: LOGIN,
    element: <Login />,
  },
];

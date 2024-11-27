/**
 * Project Name: Auth-Login
 * Description: A tool that handles standard login features.
 *
 * Author: James Gonzaga
 * Email: j.jgonzaga03@gmail.com
 * Date: September 24, 2024
 */

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { getTitleFromRoute } from "./utils/DocTitle";
import { privateRoutes, publicRoutes } from "./routes/Routes";
import { Helmet } from "react-helmet-async";
import PrivateRoutes from "./routes/PrivateRoutes";
import { INDEX } from "./routes/paths";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>{getTitleFromRoute(pathname)}</title>
      </Helmet>
      <Routes>
        <Route element={<MainLayout />}>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoutes Component={route.element} />}
            />
          ))}
        </Route>

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}

        <Route key="/*" path="/*" element={<Navigate to={INDEX} />} />
      </Routes>
    </>
  );
};

export default App;

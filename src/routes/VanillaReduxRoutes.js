import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";

const VanillaReduxPage = lazy (() => import ("../pages/VanillaReduxPage/VanillaReduxPage"));
const VanillaUsersRoutes = lazy (() => import ("./VanillaUsersRoutes"));

const VanillaReduxRoutes = () => {
  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Routes>
          <Route path="" element={<VanillaReduxPage />} />
          <Route path="users/*" element={<VanillaUsersRoutes />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default VanillaReduxRoutes;
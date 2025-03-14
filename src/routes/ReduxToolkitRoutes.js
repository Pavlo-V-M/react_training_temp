import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";

const ReduxToolkitPage = lazy (() => import ("../pages/ReduxToolkitPage/ReduxToolkitPage"));
const ToolkitUsersRoutes = lazy (() => import ("./ToolkitUsersRoutes"));

const ReduxToolkitRoutes = () => {
  return (
    <div>
      <Breadcrumb />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Routes>
          <Route path="" element={<ReduxToolkitPage />} />
          <Route path="users/*" element={<ToolkitUsersRoutes />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ReduxToolkitRoutes;
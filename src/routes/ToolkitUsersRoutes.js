import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

const Users = lazy(() => import("../pages/ReduxToolkitPage/Users/Users"));
const UserDetails = lazy (() => import ("../pages/ReduxToolkitPage/Users/UserDetails/UserDetails"));
const UserForm = lazy (() => import  ("../pages/ReduxToolkitPage/Users/UserForm/UserForm"));

const ToolkitUsersRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Routes>
          <Route path="" element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
          <Route path="new" element={<UserForm />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default ToolkitUsersRoutes;
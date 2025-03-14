import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

const Users = lazy(() => import("../pages/VanillaReduxPage/Users/Users"));
const UserDetails = lazy (() => import ("../pages/VanillaReduxPage/Users/UserDetails/UserDetails"));
const CreateUser = lazy(() => import("../pages/VanillaReduxPage/Users/CreateUser/CreateUser"));
const EditUser = lazy (() => import  ("../pages/VanillaReduxPage/Users/EditUser/EditUser"));

const VanillaUsersRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        <Routes>
          <Route path="" element={<Users />} />
          <Route path=":id" element={<UserDetails />} />
          <Route path="new" element={<CreateUser />} />
          <Route path="edit/:id" element={<EditUser />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default VanillaUsersRoutes;
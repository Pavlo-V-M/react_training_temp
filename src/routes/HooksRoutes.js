import { Routes, Route } from "react-router-dom";
import Breadcrumb from "../shared/components/Breadcrumb/Breadcrumb";
import ReactHooksPage from "../pages/ReactHooksPage/ReactHooksPage";
import UseStateHook from "../pages/ReactHooksPage/UseStateHook/UseStateHook";
import UseReducerHook from "../pages/ReactHooksPage/UseReducerHook/UseReducerHook";

const HooksRoutes = () => {
  return (
    <div>
      <Breadcrumb />
      <Routes>
        <Route path="" element={<ReactHooksPage />} />
        <Route path="use-state-hook" element={<UseStateHook />} />
        <Route path="use-reducer-hook" element={<UseReducerHook />} />
      </Routes>
    </div>
  );
};

export default HooksRoutes;
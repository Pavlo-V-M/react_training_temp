import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Navbar = lazy (() => import ("../src/modules/Navbar/Navbar"));
const HomePage = lazy (() => import ("./pages/HomePage/HomePage"));
const VanillaReduxRoutes = lazy (() => import ("./routes/VanillaReduxRoutes"));
const ReduxToolkitRoutes = lazy (() => import ("./routes/ReduxToolkitRoutes"));
const ReduxPersistPage = lazy (() => import ("./pages/ReduxPersistPage/ReduxPersistPage"));
const ReactQueryPage = lazy (() => import ("./pages/ReactQueryPage/ReactQueryPage"));
const HooksRoutes = lazy (() => import ("./routes/HooksRoutes"));

const App = () => {
  return (
    <div style={{ display: "flex", listStyle: "none", gap: "30px" }}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/redux-vanilla/*" element={<VanillaReduxRoutes />} />
        <Route path="/redux-toolkit/*" element={<ReduxToolkitRoutes />} />
        <Route path="/redux-persist" element={<ReduxPersistPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/hooks/*" element={<HooksRoutes />} />
      </Routes>
      </Suspense>
    </div>
  );
};

export default App;

//------------------------------------------

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter((path) => path);

  return (
    <nav style={{ borderBottom: "2px solid #123b7d" }}>
      <ul style={{ display: "flex", listStyle: "none", gap: "8px" }}>
        <li><Link to="/">Home</Link></li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join("/")}`;
          
          // Ignore "edit" when generating links
          // if (path === "edit") { return <li key={to}><span> / {path}</span></li>; }
          if (paths[index - 1] === "edit") return null;
          
          return (
            <li key={to}>
              <span> / </span>
              {path === "edit"
                ? (<span>{path}</span>)
                : (<Link to={to}>{path}</Link>)
              }
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
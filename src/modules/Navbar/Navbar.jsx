import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ borderRight: "2px solid #123b7d"}}>
      <ul style={{
        padding: "10px",
        listStyleType: "none"
      }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/redux-vanilla">Redux Vanilla</Link></li>
        <li><Link to="/redux-toolkit">Redux Toolkit</Link></li>
        <li><Link to="/redux-persist">Redux Persist</Link></li>
        <li><Link to="/react-query">React Query</Link></li>
        <li><Link to="/hooks">React State Manag Hooks</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

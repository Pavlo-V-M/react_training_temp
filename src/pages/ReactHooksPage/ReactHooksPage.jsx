import { useNavigate } from "react-router-dom";

const ReactHooksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <h2>React State Manag Hooks List</h2>
      <ul style={{ cursor: "pointer" }}>
        <li onClick={() => navigate("/hooks/use-state-hook")}>
          Use State Hook
        </li>
        <li onClick={() => navigate("/hooks/use-reducer-hook")}>
          Use Reducer Hook
        </li>
      </ul>
    </>
  );
};

export default ReactHooksPage;
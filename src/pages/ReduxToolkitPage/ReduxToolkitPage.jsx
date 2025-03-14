import { useNavigate } from "react-router-dom";
import ScriptMarkup from "./ScriptMarkup";

const ReduxToolkitPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScriptMarkup />
      <h2>Test Cases List</h2>
      <ul style={{ cursor: "pointer" }}>
        <li onClick={() => navigate("users")}>
          Toolkit Users
        </li>
      </ul>
    </>
  );
}

export default ReduxToolkitPage;
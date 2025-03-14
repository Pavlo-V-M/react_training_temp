import { useSelector } from "react-redux";
import { getEnabled } from "../../../../redux/selectors";

const EnabledUsers = () => { 
  const enabledUsers = useSelector(getEnabled);

  const elements = enabledUsers.map(({ id, name, descript, enabled }) => (
    <li key={id}>
      <Link to={`/redux-vanilla/users/enabled/${id}`}>{name}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Enabled Users</h2>
      <ul>
        {elements}
      </ul>
    </div>
  )
}
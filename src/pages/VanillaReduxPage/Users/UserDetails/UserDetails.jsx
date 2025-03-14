import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Badg from "../../../../shared/components/Badge/Badge";

const UserDetails = () => {
  const { id } = useParams();

  // Get the user from Redux store
  const user = useSelector((state) =>
    state.users.find((user) => user.id === id)
  );

  if (!user) { 
    return <p>User not found</p>
  }

  return (
    <div>
      <p>User Details for User</p>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Descript: {user.descript}</p>
      <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
        <p>Enabled:</p>
        <Badg isEnabled={user.enabled} />
      </div>
      
    </div>
  );
};

export default UserDetails;
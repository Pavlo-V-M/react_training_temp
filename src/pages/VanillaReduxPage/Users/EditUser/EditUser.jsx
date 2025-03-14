// EditUser.js
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../../../redux/vanilla/users/users-actions";
import { getUserById } from "../../../../redux/vanilla/users/users-selectors";
import UserForm from "../../../../shared/components/UserForm/UserForm";

const EditUser = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector((state) => state.users.find((u) => u.id === id));
  const user = useSelector(getUserById(id));

  const handleSubmit = (updatedUser) => {
    dispatch(updateUser(updatedUser));
    navigate("/redux-vanilla/users");
  };

  return user ? <UserForm initialValues={user} onSubmit={handleSubmit} /> : <p>User not found</p>;
};

export default EditUser;
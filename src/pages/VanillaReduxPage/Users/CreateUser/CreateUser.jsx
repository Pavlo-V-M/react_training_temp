// CreateUser.js
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { nanoid } from "nanoid";
import { addUser } from "../../../../redux/vanilla/users/users-actions";
import UserForm from "../../../../shared/components/UserForm/UserForm";

const CreateUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (newUser) => {
    // dispatch(addUser({ ...newUser, id: nanoid() }));
    dispatch(addUser(newUser ));
    navigate("/redux-vanilla/users");
  };

  return <UserForm
    initialValues={{ name: "", descript: "", enabled: false }}
    onSubmit={handleSubmit}
  />;
};

export default CreateUser;

// ----------------------------------------------------------------------------------

// // components/UserForm.js
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { nanoid } from "nanoid";
// import { addUser } from "../../../../redux/actions";
// import ToggleBtn from "../../../../shared/components/ToggleBtn/ToggleBtn";

// const CreateUser = () => {
//   // const [name, setName] = useState("");
//   // A state with one parameter now doesn't match the structure of a form 
//   // that has three separate parameters:

//   const [formData, setFormData] = useState({
//     name: "",
//     descript: "",
//     enabled: false,
//   });
//   const {name, descript, enabled} = formData
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Added management of name-controlled text fields (input and texteria):
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Added control of toggler:
//   const handleToggle = () => {
//     setFormData((prev) => ({
//       ...prev,
//       enabled: !prev.enabled,
//     }));
//   };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (name.trim() === "") return;

//   //   const newUser = {
//   //     id: nanoid(),
//   //     name: name,
//   //   };
//   //   dispatch(addUser(newUser));
//   //   navigate("/redux-vanilla/users");
//   // };
//   // Form processing previously worked with one parameter.
//   // Such a structure cannot handle three parameters ...

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim() === "") return;

//     dispatch(
//       addUser({
//         id: nanoid(),
//         name: name,
//         descript: descript,
//         enabled: enabled,
//       })
//     );
//     navigate("/redux-vanilla/users");
//   };

//   return (
//     <div>
//       <h2>Create New User</h2>
//       <form style={{display: "flex", flexDirection: "column", gap: "10px"}}
//         onSubmit={handleSubmit}
//       >
//         <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
//           <label>Name:</label>
//           <input style={{padding: "5px"}}
//             type="text" name="name" value={name}
//             onChange={handleChange} required
//           />
//         </div>
        
//         <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
//           <label>Descript:</label>
//             <textarea style={{padding: "5px"}}
//               type="text" name="descript" value={descript}
//               onChange={handleChange} required
//             />
//         </div>
//         <ToggleBtn
//           checked={enabled} onToggle={handleToggle}
//           text="Enabled"
//         />
//         <button style={{ width: "90px" }} type="submit">
//           Add User
//         </button>
//         <button style={{ width: "90px" }} type="button"
//           onClick={() => navigate("/redux-vanilla/users")}
//         >Cancel
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;
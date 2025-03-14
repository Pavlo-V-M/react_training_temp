import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser } from "../../../redux/vanilla/users/users-actions";
import { setFilter } from "../../../redux/vanilla/filter/filter-actions";
// import { getUsersr } from "../../../redux/users/users-selectors";
import { getFilter } from "../../../redux/vanilla/filter/filter-selectors";
import ToggleBtn from "../../../shared/components/ToggleBtn/ToggleBtn";
import styles from "./users.module.scss";

const Users = () => {
  const dispatch = useDispatch();

  // const users = useSelector(getUsers || []); // In fact, this is a section of the store;
  // If there are several such sections (by different parameters);
  // Then they are placed in a separate file of the Editor - selectors.js;
  const users = useSelector(getFilter);
  const filter = useSelector(store => store.filter); // ✅ Get filter value from Redux
  console.log("Users from Redux:", users, Array.isArray(users) ? "Array ✅" : "Not an Array ❌");
  
  const handleFilter = () => {
    dispatch(setFilter(filter === true ? false : true));
  };

  const resetFilter = () => {dispatch(setFilter(""));};// Reset filter

  const navigate = useNavigate();

  // const handleDelete = (id) => {dispatch(deleteUser(id));};
  const handleDelete = (id) => {
    const action = deleteUser(id);
    console.log("📦 ACTIONS selected the data to be processed by the reducer: ", action); // shows the action working, without removing from the store
    console.log("⚙️ REDUCER removed the ACTIONS selected data: ", action);
    dispatch(action); // removes from the store
  };

  return (
  <div className={styles.listWrap}>
    <h2>Users List</h2>
    <div className={styles.filterWrap}>
      <ToggleBtn
          text="Enabled Filter"
          onToggle={handleFilter}
          checked={filter}
        />
      <button className={styles.btn}
          type="button"
          onClick={resetFilter}
          disabled={filter === ""}
        >Reset Filter
      </button>
    </div>  

    <ul className={styles.list}>
      {Array.isArray(users) ? (
        users.map((user) => (
          <li key={user.id} className={styles.listItm}>
            <Link to={`/redux-vanilla/users/${user.id}`}>{user.name}</Link>
            <button className={styles.btn}
              type="button" onClick={() => navigate(`/redux-vanilla/users/edit/${user.id}`)}
            >Edit
            </button>
            <button className={styles.btn}
              type="button" onClick={() => handleDelete(user.id)}
            >Delete
            </button>
          </li>
        ))
          
      ) : (<p>Loading users...</p>)}
    </ul>
      
    <button className={styles.btn} type="button"
      onClick={() => navigate("/redux-vanilla/users/new")}
    >Create New</button>
  </div>);
};

export default Users;
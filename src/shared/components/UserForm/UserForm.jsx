// UserForm.js (Reusable Form Component)
import ToggleBtn from "../ToggleBtn/ToggleBtn";
import useForm from "../../hooks/useForm";

import styles from "./user-form.module.scss"

const UserForm = ({ initialValues, onSubmit }) => {
  const { values, handleChange } = useForm(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name.trim() === "") return;
    onSubmit(values);
  };

  return (
    <div>
      <h2>{
        initialValues.id ? "Edit User" : "Create New User"}
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formWrap}>
          <label>Name:</label>
          <input className={styles.textField}
            type="text" name="name" value={values.name}
            onChange={handleChange} required
          />
        </div>
        <div className={styles.formWrap}>
          <label>Description:</label>
          <textarea className={styles.areaField}
            name="descript" value={values.descript}
            onChange={handleChange} required
          />
        </div>
        
        <ToggleBtn
          checked={values.enabled}
          onToggle={() => handleChange({ target: { name: "enabled", value: !values.enabled } })}
          text="Enabled"
        />
        <button type="submit" className={styles.btn}>
          {initialValues.id ? "Save Changes" : "Add User"}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
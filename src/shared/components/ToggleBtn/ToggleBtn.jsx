import styles from "./toggle-btn.module.scss";

const ToggleBtn = ({ checked, onToggle, text }) => {
  const handleChange = (e) => {
    onToggle(e.target.checked);
    console.log("Toggle button clicked");
  };

  return (
    <div className={styles.wrap}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={checked}
          // checked={isEnabled}
          onChange={handleChange}
        />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
      {text && <span className={styles.toggle__text}>{text}</span>}
    </div>
  );
};

export default ToggleBtn;

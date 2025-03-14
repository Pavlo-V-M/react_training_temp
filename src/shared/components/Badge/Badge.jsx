import styles from "./badge.module.scss";

const Badge = ({ isEnabled }) => {
  const styleWrap = isEnabled ? styles.wrap : styles.wrap__def;
  const text = isEnabled ? "yes" : "no";

  return (
    <div className={styleWrap}>
      <span className={styles.rectangle}>{text}</span>
    </div>
  );
};

export default Badge;


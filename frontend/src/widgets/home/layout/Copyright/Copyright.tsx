import styles from "./Copyright.module.css";

export function Copyright() {
  return (
    <div className={styles.copyrightSection}>
      <div className={styles.copyrightContainer}>
        <p className={styles.copyrightText}>© Всі права захищені ТОВ «КОМФІ ТРЕЙД», 2010–2026</p>
      </div>
    </div>
  );
}

import styles from "./QrCodeSection.module.css";

export function QrCodeSection() {
  return (
    <section className={styles.qrSection}>
      <div className={styles.qrContainer}>
        <h2 className={styles.qrTitle}>Скануй QR code та встановлюй додаток</h2>
        <p className={styles.qrSubtitle}>Доступно для завантаження на платформах:</p>
      </div>
    </section>
  );
}

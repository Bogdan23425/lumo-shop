import styles from "./VideoReviews.module.css";

const videoReviews = [
  { id: "vr-1", title: "Огляд iPhone 16 Pro Max", date: "15.01.2025" },
  { id: "vr-2", title: "Тест Samsung Galaxy S25", date: "14.01.2025" },
  { id: "vr-3", title: "Порівняння ноутбуків", date: "13.01.2025" },
  { id: "vr-4", title: "Огляд телевізорів 2024", date: "12.01.2025" },
];

export function VideoReviews() {
  return (
    <section className={styles.videoSection}>
      <div className={styles.videoContainer}>
        <h2 className={styles.videoTitle}>Видеообзоры</h2>
        <div className={styles.videoCard}>
          <div className={styles.videoCardsGrid}>
            {videoReviews.map((review) => (
              <div key={review.id} className={styles.videoCardItem}>
                <div className={styles.videoPlaceholder}>
                  <button className={styles.playButton}>
                    <svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0V21L14 10.5L0 0Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <div className={styles.videoContent}>
                  <div className={styles.videoTitleText}>{review.title}</div>
                  <div className={styles.videoDate}>{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

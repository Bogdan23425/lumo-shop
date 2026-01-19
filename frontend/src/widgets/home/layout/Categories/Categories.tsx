import styles from "./Categories.module.css";

const categories = [
  "Смартфони",
  "Iphone 17",
  "Iphone 17 air",
  "Iphone 17 pro",
  "Iphone 17 pro max",
  "Iphone 16",
  "Iphone 16 plus",
  "Iphone 16 pro",
  "Iphone 16 pro max",
  "Samsung S25",
  "Samsung S25+",
  "Samsung S25 Ultra",
  "Ноутбуки",
  "Телевізори",
  "Пральні машини",
  "Холодильники",
  "Монітори",
  "Планшети",
  "Навушники",
  "Смарт-годинники",
  "Пилососи",
  "Ручні пилососи",
  "Роботи-пилососи",
  "Кавомашини",
  "Праски",
  "Блендери",
  "LEGO",
];

export function Categories() {
  return (
    <div className={styles.categoriesSection}>
      <div className={styles.categoriesContainer}>
        <div className={styles.categoriesTitleContainer}>
          <h4 className={styles.categoriesTitle}>Категорії:</h4>
        </div>
        <div className={styles.categoriesPillsContainer}>
          <div className={styles.categoriesPills}>
            {categories.map((category, index) => (
              <span key={index} className={styles.categoryPill}>{category}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

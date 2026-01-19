import styles from "./ViewedProducts.module.css";
import { formatPrice } from "@/shared/lib/format";

const viewedProducts = [
  {
    id: "vp-1",
    title: "Смартфон Apple iPhone 16 Pro Max 256GB White Titanium (Відновлений, Ідеальний стан) e-SIM",
    oldPrice: 52599,
    price: 51099,
  },
  {
    id: "vp-2",
    title: "Смартфон Apple iPhone 16 Pro Max 256GB White Titanium (Відновлений, Ідеальний стан) e-SIM",
    oldPrice: 52599,
    price: 51099,
  },
  {
    id: "vp-3",
    title: "Смартфон Apple iPhone 16 Pro Max 256GB White Titanium (Відновлений, Ідеальний стан) e-SIM",
    oldPrice: 52599,
    price: 51099,
  },
  {
    id: "vp-4",
    title: "Смартфон Apple iPhone 16 Pro Max 256GB White Titanium (Відновлений, Ідеальний стан) e-SIM",
    oldPrice: 52599,
    price: 51099,
  },
  {
    id: "vp-5",
    title: "Смартфон Apple iPhone 16 Pro Max 256GB White Titanium (Відновлений, Ідеальний стан) e-SIM",
    oldPrice: 52599,
    price: 51099,
  },
];

export function ViewedProducts() {
  return (
    <section className={styles.viewedSection}>
      <div className={styles.viewedContainer}>
        <h2 className={styles.viewedTitle}>Просмотренные товары</h2>
        <div className={styles.productsGrid}>
          {viewedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImage}>
                <div className={styles.imagePlaceholder}></div>
              </div>
              <div className={styles.productInfo}>
                <a href="#" className={styles.productTitle}>{product.title}</a>
                <div className={styles.productPrice}>
                  {product.oldPrice && (
                    <div className={styles.productPriceOld}>
                      {formatPrice(product.oldPrice)} ₴
                    </div>
                  )}
                  <div className={styles.productPriceCurrent}>
                    {formatPrice(product.price)}
                    <span className={styles.priceCurrency}> ₴</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

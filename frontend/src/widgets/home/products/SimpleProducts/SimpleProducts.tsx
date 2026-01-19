import styles from "./SimpleProducts.module.css";
import { formatPrice } from "@/shared/lib/format";

type Product = {
  id: string;
  title: string;
  oldPrice?: number;
  price: number;
};

type SimpleProductsProps = {
  products: Product[];
};

export function SimpleProducts({ products }: SimpleProductsProps) {
  return (
    <section className={styles.simpleSection}>
      <div className={styles.simpleContainer}>
        <h2 className={styles.simpleTitle}>Кращ</h2>
        <div className={styles.productsGrid}>
          {products.map((product) => (
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

import styles from "./CategoryProducts.module.css";
import { formatPrice } from "@/shared/lib/format";

type Product = {
  id: string;
  title: string;
  oldPrice?: number;
  price: number;
};

type CategoryProductsProps = {
  title: string;
  products: Product[];
  cardWidth?: number;
  cardHeight?: number;
  showPlaceholder?: boolean;
  placeholderWidth?: number;
  placeholderHeight?: number;
  placeholderPosition?: "left" | "right";
};

export function CategoryProducts({ 
  title, 
  products, 
  cardWidth = 272, 
  cardHeight = 516,
  showPlaceholder = false,
  placeholderWidth = 271,
  placeholderHeight = 510,
  placeholderPosition = "right"
}: CategoryProductsProps) {
  const displayProducts = showPlaceholder ? products.slice(0, 4) : products;
  
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryContainer}>
        <h2 className={styles.categoryTitle}>{title}</h2>
        <div className={styles.productsGrid}>
          {showPlaceholder && placeholderPosition === "left" && (
            <div className={styles.placeholderImage} style={{ width: `${placeholderWidth}px`, height: `${placeholderHeight}px` }}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          )}
          {displayProducts.map((product) => (
            <div key={product.id} className={styles.productCard} style={{ width: `${cardWidth}px`, height: `${cardHeight}px` }}>
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
          {showPlaceholder && placeholderPosition === "right" && (
            <div className={styles.placeholderImage} style={{ width: `${placeholderWidth}px`, height: `${placeholderHeight}px` }}>
              <div className={styles.imagePlaceholder}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

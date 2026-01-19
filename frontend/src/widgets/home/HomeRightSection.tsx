"use client";

import { useState, useEffect } from "react";
import styles from "./HomeRightSection.module.css";
import { formatPrice } from "@/shared/lib/format";

const SLIDE_COUNT = 9;
const VISIBLE_SLIDES = 3;

const weekendProducts = [
  {
    id: "wp-1",
    title: "Термочашка Ardesto Easy Travel 450 мл Olive...",
    image: "/images/products/xenon-pro-14.jpg",
    rating: 4.4,
    reviewsCount: 357,
    oldPrice: 499,
    price: 222,
    discount: 56,
    bonus: 3,
  },
  {
    id: "wp-2",
    title: "Термочашка Ardesto Easy Travel 450 мл Olive...",
    image: "/images/products/vivid-air-2.jpg",
    rating: 4.6,
    reviewsCount: 234,
    oldPrice: 599,
    price: 299,
    discount: 50,
    bonus: 4,
  },
  {
    id: "wp-3",
    title: "Термочашка Ardesto Easy Travel 450 мл Olive...",
    image: "/images/products/auralink-mini.jpg",
    rating: 4.5,
    reviewsCount: 189,
    oldPrice: 449,
    price: 199,
    discount: 56,
    bonus: 3,
  },
];

export function HomeRightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightCardIndex, setRightCardIndex] = useState(0);

  const maxIndex = SLIDE_COUNT - VISIBLE_SLIDES;
  const RIGHT_CARD_SLIDE_COUNT = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [maxIndex]);

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const goRightCardPrev = () => {
    setRightCardIndex((prev) => Math.max(0, prev - 1));
  };

  const goRightCardNext = () => {
    setRightCardIndex((prev) => Math.min(2, prev + 1));
  };

  return (
    <div className={styles.container}>
      <div className={styles.topCards}>
        <button className={styles.topCard}>
          <div className={styles.topCardIcon}></div>
          <div className={styles.topCardText}>Обновленные смартфоны</div>
        </button>
        <button className={styles.topCard}>
          <div className={styles.topCardIcon}></div>
          <div className={styles.topCardText}>Распродажа</div>
        </button>
        <button className={styles.topCard}>
          <div className={styles.topCardIcon}></div>
          <div className={styles.topCardText}>до -50% На детские товары</div>
        </button>
      </div>

      <div className={styles.sliderSection}>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider}>
            <div
              className={styles.slides}
              style={{ transform: `translateX(-${currentIndex * (252 + 10)}px)` }}
            >
              {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
                <div key={index} className={styles.slide}>
                  <div 
                    className={styles.slideImage}
                    style={{
                      backgroundImage: `url(/images/slider/${index + 1}.avif)`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              ))}
            </div>
            <button
              className={styles.navButton}
              onClick={goPrev}
              disabled={currentIndex === 0}
              aria-label="Предыдущий слайд"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              className={styles.navButton}
              onClick={goNext}
              disabled={currentIndex >= maxIndex}
              aria-label="Следующий слайд"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.bottomCard}>
            <div className={styles.topCategories}>
              <div className={styles.topCategoryItem}>
                <div className={styles.topCategoryIcon}></div>
                <div className={styles.topCategoryName}>Смартфоны</div>
              </div>
              <div className={styles.topCategoryDelimiter}></div>
              <div className={styles.topCategoryItem}>
                <div className={styles.topCategoryIcon}></div>
                <div className={styles.topCategoryName}>Телевизоры</div>
              </div>
              <div className={styles.topCategoryDelimiter}></div>
              <div className={styles.topCategoryItem}>
                <div className={styles.topCategoryIcon}></div>
                <div className={styles.topCategoryName}>Ноутбуки</div>
              </div>
              <div className={styles.topCategoryDelimiter}></div>
              <div className={styles.topCategoryItem}>
                <div className={styles.topCategoryIcon}></div>
                <div className={`${styles.topCategoryName} ${styles.topCategoryNameEllipsis}`}>Холодильники</div>
              </div>
              <div className={styles.topCategoryDelimiter}></div>
              <div className={styles.topCategoryItem}>
                <div className={styles.topCategoryIcon}></div>
                <div className={`${styles.topCategoryName} ${styles.topCategoryNameTwoLines}`}>Стиральные машины</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCard}>
          <div className={styles.rightCardTitleContainer}>
            <div className={styles.rightCardTitle}>Товар выходных</div>
          </div>
          <div className={styles.rightCardSlider}>
            <div 
              className={styles.rightCardSlides}
              style={{ transform: `translateX(-${rightCardIndex * (220 + 16)}px)` }}
            >
              {weekendProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className={styles.rightCardSlide}
                >
                  <div className={styles.productIcon}></div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                    <div className={styles.productRating}>
                      <span className={styles.ratingValue}>{product.rating}</span>
                      <span className={styles.ratingIcon}>★</span>
                      <span className={styles.reviewsCount}>{product.reviewsCount}</span>
                    </div>
                    <div className={styles.productPrice}>
                      <span className={styles.oldPrice}>{formatPrice(product.oldPrice)} ₴</span>
                      <span className={styles.discount}>-{product.discount}%</span>
                      <span className={styles.newPrice}>{formatPrice(product.price)} ₴</span>
                    </div>
                    <div className={styles.productBonus}>
                      <span className={styles.bonusIcon}>+</span>
                      <span className={styles.bonusText}>+{product.bonus} на бонусний рахунок</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.rightCardControls}>
            <button 
              className={styles.rightCardNavButton} 
              onClick={goRightCardPrev}
              disabled={rightCardIndex === 0}
              aria-label="Предыдущий"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.rightCardDotsContainer}>
              {Array.from({ length: 3 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`${styles.rightCardControlDot} ${rightCardIndex === index ? styles.rightCardControlDotActive : ''}`}
                />
              ))}
            </div>
            <button 
              className={styles.rightCardNavButton} 
              onClick={goRightCardNext}
              disabled={rightCardIndex >= 2}
              aria-label="Следующий"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className={styles.rightCardLink}>Просмотреть все товары</div>
        </div>
      </div>
    </div>
  );
}

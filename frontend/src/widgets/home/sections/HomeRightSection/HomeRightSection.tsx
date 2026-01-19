"use client";

import { useState, useEffect } from "react";
import styles from "./HomeRightSection.module.css";
import { formatPrice } from "@/shared/lib/format";

const SLIDE_COUNT = 9;
const VISIBLE_SLIDES = 3;

const categories = [
  { name: "Смартфоны", icon: "/icons/categories/smartphone.svg" },
  { name: "Телевизоры", icon: "/icons/categories/tv.svg" },
  { name: "Ноутбуки", icon: "/icons/categories/laptop.svg" },
  { name: "Холодильники", icon: "/icons/categories/fridge.svg" },
  { name: "Стиральные машины", icon: "/icons/categories/washing-machine.svg" },
];

const topCards = [
  { text: "Обновленные смартфоны", icon: "/icons/promo/1ref_main.svg" },
  { text: "Распродажа", icon: "/icons/promo/outlet.svg" },
  { text: "до -50% На детские товары", icon: "/icons/promo/cmfy-kids.svg" },
];

const weekendProducts = [
  {
    id: "wp-1",
    title: "Кавоварка ріжкова Krups XP444G10",
    image: "/images/products/deal-of-the-day/medium-krups_xp444g_visual14.jpg",
    rating: 4.8,
    reviewsCount: 79,
    oldPrice: 11499,
    price: 5555,
    discount: 52,
    bonus: 73,
  },
  {
    id: "wp-2",
    title: "Плед полуторний Biltex шерпа Salford 150х200 (2000031673035)",
    image: "/images/products/deal-of-the-day/_daisy_salford_150_200_2000031673035_12.jpg",
    rating: 5,
    reviewsCount: 1,
    oldPrice: 699,
    price: 349,
    discount: 50,
    bonus: 3,
  },
  {
    id: "wp-3",
    title: "Плед полуторний Biltex шерпа Derby 150х200 (2000031673028)",
    image: "/images/products/deal-of-the-day/_daisy_derby_150_200_2000031673028_12.jpg",
    rating: 5,
    reviewsCount: 1,
    oldPrice: 699,
    price: 349,
    discount: 50,
    bonus: 3,
  },
];

export function HomeRightSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightCardIndex, setRightCardIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 1, hours: 8, minutes: 45, seconds: 22 });

  const maxIndex = SLIDE_COUNT - VISIBLE_SLIDES;
  const RIGHT_CARD_SLIDE_COUNT = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
        {topCards.map((card) => (
          <button key={card.text} className={styles.topCard}>
            <div className={styles.topCardIcon}>
              <img
                src={card.icon}
                alt={card.text}
              />
            </div>
            <div className={styles.topCardText}>{card.text}</div>
          </button>
        ))}
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
              {categories.map((category, index) => (
                <div key={category.name} className={styles.topCategoryItem}>
                  <div className={styles.topCategoryContent}>
                    <div className={styles.topCategoryIcon}>
                      <img
                        src={category.icon}
                        alt={category.name}
                      />
                    </div>
                    <div className={`${styles.topCategoryName} ${
                      category.name === "Холодильники" ? styles.topCategoryNameEllipsis : ""
                    } ${
                      category.name === "Стиральные машины" ? styles.topCategoryNameTwoLines : ""
                    }`}>
                      {category.name}
                    </div>
                  </div>
                  {index < categories.length - 1 && <div className={styles.topCategoryDelimiter}></div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightCard}>
          <div className={styles.rightCardHeader}>
            <div className={styles.rightCardTitle}>Товар дня</div>
            <ul className={styles.countdownTimer}>
              <li className={styles.countdownItem}>
                <p className={styles.countdownDigit}>{String(timeLeft.days).padStart(2, '0')}</p>
                <p className={styles.countdownText}>день</p>
              </li>
              <li className={styles.countdownSeparator}></li>
              <li className={styles.countdownItem}>
                <p className={styles.countdownDigit}>{String(timeLeft.hours).padStart(2, '0')}</p>
                <p className={styles.countdownText}>годин</p>
              </li>
              <li className={styles.countdownSeparator}></li>
              <li className={styles.countdownItem}>
                <p className={styles.countdownDigit}>{String(timeLeft.minutes).padStart(2, '0')}</p>
                <p className={styles.countdownText}>хвилини</p>
              </li>
              <li className={styles.countdownSeparator}></li>
              <li className={`${styles.countdownItem} ${styles.countdownItemSeconds}`}>
                <p className={`${styles.countdownDigit} ${styles.countdownDigitSeconds}`}>{String(timeLeft.seconds).padStart(2, '0')}</p>
                <p className={`${styles.countdownText} ${styles.countdownTextSeconds}`}>секунд</p>
              </li>
            </ul>
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
                  <div className={styles.productHeader}>
                    <a href="#" className={styles.productImageLink}>
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className={styles.productImage}
                      />
                    </a>
                  </div>
                  <a href="#" className={styles.productTitleLink}>
                    <h3 className={styles.productTitle}>{product.title}</h3>
                  </a>
                  <a href="#" className={styles.productFeedback}>
                    <div className={styles.productRating}>
                      <div className={styles.ratingLeft}>
                        <span className={styles.ratingIcon}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                          </svg>
                        </span>
                        <span className={styles.ratingValue}>{product.rating}</span>
                      </div>
                      <div className={styles.ratingRight}>
                        <span className={styles.reviewsIcon}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                        </span>
                        <span className={styles.reviewsCount}>{product.reviewsCount}</span>
                      </div>
                    </div>
                  </a>
                  <div className={styles.productActions}>
                    <div className={styles.productPriceContainer}>
                      <div className={styles.productOldPrice}>{formatPrice(product.oldPrice)} ₴</div>
                      <div className={styles.productCurrentPrice}>
                        {formatPrice(product.price)} <span className={styles.priceCurrency}>₴</span>
                      </div>
                    </div>
                    <button className={styles.buyButton} title="Купити">
                      <span className={styles.buyButtonIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19C20.1 19 21 18.1 21 17V13M9 19.5C9 20.3 8.3 21 7.5 21C6.7 21 6 20.3 6 19.5C6 18.7 6.7 18 7.5 18C8.3 18 9 18.7 9 19.5ZM19 19.5C19 20.3 18.3 21 17.5 21C16.7 21 16 20.3 16 19.5C16 18.7 16.7 18 17.5 18C18.3 18 19 18.7 19 19.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className={styles.productAnnotations}>
                    <div className={styles.productBonus}>
                      <span className={styles.bonusIcon}>+</span>
                      <span className={styles.bonusValue}>+{product.bonus} ₴</span>
                      <span className={styles.bonusText}>на бонусний рахунок</span>
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
          <a href="#" className={styles.rightCardLink}>Переглянути усі товари</a>
        </div>
      </div>
    </div>
  );
}

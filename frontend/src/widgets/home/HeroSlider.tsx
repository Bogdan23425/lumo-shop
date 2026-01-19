"use client";

import { useState } from "react";
import styles from "./HeroSlider.module.css";

const SLIDE_COUNT = 9;
const VISIBLE_SLIDES = 3;

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = SLIDE_COUNT - VISIBLE_SLIDES;

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          className={styles.slides}
          style={{ transform: `translateX(-${currentIndex * (252 + 12)}px)` }}
        >
          {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
            <div key={index} className={styles.slide}>
              <div className={styles.slideImage} />
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
    </div>
  );
}

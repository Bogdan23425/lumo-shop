"use client";

import Link from "next/link";
import { slugify } from "@/shared/lib/slug";
import { CATEGORIES } from "@/shared/config/categories";
import { CategoryIcon } from "./CategoryIcons";
import styles from "./CategoryMenu.module.css";

const LONG_CATEGORY = "Ноутбуки, планшеты и ПК";

export function CategoryMenu() {
  return (
    <div className={styles.menu}>
      {CATEGORIES.map((category) => {
        const isLong = category === LONG_CATEGORY;
        return (
          <Link
            key={category}
            href={`/c/${slugify(category)}`}
            className={`${styles.item} ${isLong ? styles.itemLong : styles.itemShort}`}
          >
            <span className={styles.icon}>
              <CategoryIcon category={category} />
            </span>
            {isLong ? (
              <span className={styles.name}>
                <span>Ноутбуки, планшеты и</span>
                <span>компьютерная техника</span>
              </span>
            ) : (
              <span className={styles.name}>{category}</span>
            )}
          </Link>
        );
      })}
    </div>
  );
}

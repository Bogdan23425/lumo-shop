"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiGrid,
  FiSearch,
  FiUser,
  FiShuffle,
  FiHeart,
  FiMessageCircle,
  FiShoppingCart,
  FiPhoneCall,
} from "react-icons/fi";
import { siteConfig } from "@/shared/config/site";
import styles from "./Header.module.css";

export function Header() {
  const [showTop, setShowTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY < 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.topSection} data-visible={showTop}>
        <div className="flex h-[35px] items-end justify-between px-4 pb-1 text-xs text-[#616161]">
          <div className="flex items-center gap-4">
            <button className={`${styles.topLink} font-semibold text-slate-900`}>RU</button>
            <button className={`${styles.topLink} text-slate-500`}>EN</button>
            <span className={styles.topLink}>Киев</span>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-4 font-semibold text-[#616161]">
              <button className={styles.topLink}>Акции</button>
              <button className={styles.topLink}>Подарочные карты</button>
              <button className={styles.topLink}>Магазины</button>
              <button className={styles.topLink}>Доставка</button>
              <button className={styles.topLink}>Возврат</button>
              <button className={styles.topLink}>Trade-In</button>
              <button className={styles.topLink}>LUMO помогает</button>
            </div>
            <span className={`${styles.topLink} flex items-center gap-2 font-semibold text-[#D32F2F]`}>
              <FiPhoneCall size={14} aria-hidden="true" />
              Связаться
            </span>
          </div>
        </div>
      </div>

        <div className="flex h-[68px] items-center gap-4 px-4 py-3">
          <div className="flex items-center gap-4">
            <div className="flex h-[36px] w-[147px] items-center justify-center rounded-lg bg-white text-lg font-semibold tracking-[0.2em] text-slate-900">
              {siteConfig.name}
            </div>
            <button className="flex h-11 w-[144px] items-center justify-center gap-2 rounded-lg bg-[#44B02B] px-1.5 text-base font-semibold text-white transition-colors duration-200 ease-out hover:bg-[#379424]">
              <FiGrid size={20} aria-hidden="true" />
              Каталог
            </button>
          </div>

          <div className="hidden flex-1 items-center gap-4 lg:flex">
            <div className="flex flex-1">
              <input
                className="h-11 w-full rounded-l-md border border-[#44B02B] bg-white pl-4 pr-4 text-sm text-slate-900 shadow-sm shadow-black/5 outline-none"
                placeholder="Поиск по каталогу, брендам и моделям"
                type="search"
              />
              <button className="flex h-11 w-[120px] items-center justify-center gap-2 rounded-r-md bg-[#44B02B] px-4 text-base font-semibold text-white transition-colors duration-200 ease-out hover:bg-[#379424]">
                Найти
                <FiSearch aria-hidden="true" style={{ width: 18, height: 16 }} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4 text-slate-700">
            <div className="hidden h-11 w-[331.77px] items-center justify-between lg:flex">
              <button className="group flex h-11 w-[65px] items-center justify-center rounded-md bg-white text-[12px] font-semibold text-[#616161] transition-colors duration-200 ease-out">
                <span className="flex flex-col items-center gap-0.5 text-[#616161] transition-colors duration-200 ease-out group-hover:text-[#44B02B]">
                  <FiUser size={20} aria-hidden="true" />
                  Увійти
                </span>
              </button>
              <button className="group flex h-11 w-[68.52px] items-center justify-center rounded-md bg-white text-[12px] font-semibold text-[#616161] transition-colors duration-200 ease-out">
                <span className="flex flex-col items-center gap-0.5 text-[#616161] transition-colors duration-200 ease-out group-hover:text-[#44B02B]">
                  <FiShuffle size={20} aria-hidden="true" />
                  Порівняння
                </span>
              </button>
              <button className="group flex h-11 w-[65px] items-center justify-center rounded-md bg-white text-[12px] font-semibold text-[#616161] transition-colors duration-200 ease-out">
                <span className="flex flex-col items-center gap-0.5 text-[#616161] transition-colors duration-200 ease-out group-hover:text-[#44B02B]">
                  <FiHeart size={20} aria-hidden="true" />
                  Обране
                </span>
              </button>
              <button className="group flex h-11 w-[85.22px] items-center justify-center rounded-md bg-white text-[12px] font-semibold text-[#616161] transition-colors duration-200 ease-out">
                <span className="flex flex-col items-center gap-0.5 text-[#616161] transition-colors duration-200 ease-out group-hover:text-[#44B02B]">
                  <FiMessageCircle size={20} aria-hidden="true" />
                  Повідомлення
                </span>
              </button>
            </div>
            <button className="group flex h-11 w-[125px] items-center justify-center gap-2 rounded-lg bg-[#F2F2F2] text-sm font-semibold text-slate-900 transition-colors duration-200 ease-out hover:bg-[#E5E5E5]">
              <FiShoppingCart className="transition-colors duration-200 ease-out group-hover:text-[#44B02B]" size={20} aria-hidden="true" />
              <span className="transition-colors duration-200 ease-out group-hover:text-[#44B02B]">
                Корзина
              </span>
            </button>
          </div>
        </div>

      <div className="border-t border-black/5 px-4 pb-4 pt-2 lg:hidden">
        <div className="flex items-center gap-4">
          <label className="relative block flex-1">
            <input
              className="h-11 w-full rounded-lg border border-[#44B02B] bg-white pl-4 pr-4 text-sm text-slate-900 shadow-sm shadow-black/5 outline-none"
              placeholder="Поиск в LUMO"
              type="search"
            />
          </label>
          <button className="flex h-11 w-[112px] items-center justify-center gap-2 rounded-lg bg-[#44B02B] text-base font-semibold text-white transition-colors duration-200 ease-out hover:bg-[#379424]">
            Найти
            <FiSearch aria-hidden="true" style={{ width: 18, height: 16 }} />
          </button>
        </div>
      </div>
    </header>
  );
}

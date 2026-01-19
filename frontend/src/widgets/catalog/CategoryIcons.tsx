export function CategoryIcon({ category }: { category: string }) {
  const icons: Record<string, JSX.Element> = {
    "Энергообеспечение": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="7" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 11h12M10 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Смартфоны и телефоны": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="2" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M11 6h2M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Ноутбуки, планшеты и ПК": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 15h18M8 19h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 19l-1 2M17 19l1 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Техника для кухни": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 3V1M16 3V1" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
        <path d="M8 7h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Техника для дома": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "Телевизоры и мультимедиа": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 20h8M12 20v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
    "Смарт-часы и гаджеты": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Аудио, фото и видео": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="2"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 18v4M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Игровые консоли и гейминг": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 10V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="9" cy="15" r="1" fill="currentColor"/>
        <circle cx="15" cy="15" r="1" fill="currentColor"/>
        <path d="M12 13v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Красота и здоровье": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Посуда": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20M6 6h12M6 10h12M6 14h12M6 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="1" fill="currentColor"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    "Бытовая химия": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2v4M14 2v4M5 8h14v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8z" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
    "Текстиль и декор": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 10h16M8 6v12M16 6v12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="13" r="1" fill="currentColor"/>
      </svg>
    ),
    "Дом, отдых и зоотовары": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="8" r="1" fill="currentColor"/>
      </svg>
    ),
    "Детские товары": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8 2 5 5 5 9c0 5 3 8 7 13 4-5 7-8 7-13 0-4-3-7-7-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="9" r="2" fill="currentColor"/>
      </svg>
    ),
    "Инструменты и автотовары": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    "OUTLET": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" stroke="currentColor" strokeWidth="2"/>
        <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    "Сервисы, подписки и софт": (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
        <path d="M7.5 4.21l4.5 2.6 4.5-2.6M7.5 19.79V12M12 21.6V12M16.5 19.79V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return <span className="category-icon">{icons[category] || icons["Посуда"]}</span>;
}

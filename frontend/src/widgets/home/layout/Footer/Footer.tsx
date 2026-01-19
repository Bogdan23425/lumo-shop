import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Top Section: Newsletter Card + 4 Columns */}
        <div className={styles.footerTop}>
          {/* Left Container: Newsletter Card */}
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterCard}>
              <h3 className={styles.newsletterTitle}>Підписуйтесь на знижки!</h3>
              <p className={styles.newsletterSubtitle}>Не турбуйтесь, ми не спамимо</p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>Відправити</button>
              </div>
            </div>
          </div>

          {/* Right Container: 4 Columns */}
          <div className={styles.columnsContainer}>
            <div className={styles.columnsWrapper}>
            {/* Column 1: Comfy */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Comfy</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Про компанію</a></li>
                <li><a href="#">Магазини</a></li>
                <li><a href="#">Контакти</a></li>
                <li><a href="#">Прес-центр</a></li>
                <li><a href="#">Робота в COMFY</a></li>
                <li><a href="#">Безпека та застереження</a></li>
                <li><a href="#">Тендер</a></li>
                <li><a href="#">Партнерам</a></li>
                <li><a href="#">Каталог товарів</a></li>
                <li><a href="#">COMFY допомагає</a></li>
              </ul>
            </div>

            {/* Column 2: Послуги і сервіси */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Послуги і сервіси</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Бонусна програма</a></li>
                <li><a href="#">Подарункові картки</a></li>
                <li><a href="#">Кредит і оплата частинами</a></li>
                <li><a href="#">Trade In</a></li>
                <li><a href="#">Сервісні договори</a></li>
                <li><a href="#">Безготівковий рахунок</a></li>
                <li><a href="#">Оплата</a></li>
              </ul>
            </div>

            {/* Column 3: Допомога покупцеві */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Допомога покупцеві</h4>
              <ul className={styles.linkList}>
                <li><a href="#">Центр допомоги клієнтам</a></li>
                <li><a href="#">Знайти замовлення</a></li>
                <li><a href="#">Умови доставки</a></li>
                <li><a href="#">Обмін і повернення товару</a></li>
                <li><a href="#">Гарантія</a></li>
                <li><a href="#">Правила користування сайтом</a></li>
              </ul>
            </div>

            {/* Column 4: Консультація */}
            <div className={styles.footerColumn}>
              <h4 className={styles.columnTitle}>Консультація</h4>
              <div className={styles.phoneNumbers}>
                <a href="tel:0800303505" className={styles.phoneLink}>0-800-303-505</a>
                <a href="tel:0800600506" className={styles.phoneLink}>0-800-600-506</a>
              </div>
              <p className={styles.phoneNote}>Безкоштовно по Україні</p>
              <p className={styles.phoneHours}>08:00-21:00 Пн-Нд</p>
              <div className={styles.emailSection}>
                <span className={styles.emailIcon}>✉️</span>
                <a href="mailto:info@comfy.ua" className={styles.emailLink}>info@comfy.ua</a>
              </div>
              <div className={styles.contactLinks}>
                <a href="#">Центр допомоги</a>
                <a href="#">Чат на сайті</a>
                <a href="#">Telegram</a>
                <a href="#">Viber</a>
                <a href="#">Messenger</a>
                <a href="#">Apple Messages</a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

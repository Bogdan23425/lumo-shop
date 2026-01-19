import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "srv-1",
    title: "Доставка",
    description: 'Самовивіз із магазину "Comfy", доставка за адресою або у відділення"Нова Пошта" і "Meest"',
    icon: "🚚",
  },
  {
    id: "srv-2",
    title: "Гарантія",
    description: "Сертифікована техніка з офіційною гарантією від виробника.",
    icon: "🛡️",
  },
  {
    id: "srv-3",
    title: "Оплата",
    description: "Оплатити покупку можливо готівкою, картою чи безготівковим розрахунком.",
    icon: "💳",
  },
  {
    id: "srv-4",
    title: "Повернення",
    description: "Повернення товару відбувається протягом 14 днів після покупки, у відповідності із діючим законом",
    icon: "↩️",
  },
];

export function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceColumn}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

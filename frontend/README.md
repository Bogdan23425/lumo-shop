# LUMO Frontend

Mobile‑first e‑commerce на Next.js App Router.

## Структура

```
src/
├── app/                # маршруты
├── widgets/            # крупные блоки UI
├── features/           # действия пользователя
├── entities/           # доменные сущности
├── processes/          # многошаговые процессы
├── layouts/            # layout‑обертки
└── shared/             # ui/lib/api/config
```

## Роуты

- `/` — главная
- `/catalog` — каталог
- `/c/[category]` — категория
- `/p/[slug]` — товар
- `/favorites`, `/compare`, `/cart`, `/checkout`
- `/search`, `/delivery`, `/payment`, `/help`, `/contacts`
- `/legal/privacy`, `/legal/terms`
- `/auth/login`, `/auth/register`, `/auth/forgot`, `/auth/reset`
- `/account`, `/account/orders`, `/account/orders/[id]`, `/account/addresses`, `/account/settings`

## UX правила

- Mobile‑first
- BottomBar на мобилке
- Sticky CTA на PDP и checkout
- Минимум шагов до покупки

## Запуск

```bash
npm install
npm run dev
```

# LUMO Backend

Заглушка под будущий API.

## Структура

```
backend/
├── src/
│   ├── app.ts
│   ├── index.ts
│   ├── routes/
│   └── modules/
├── prisma/
└── .env.example
```

## Запуск

```bash
npm install
npm run dev
```

Доступен health check: `GET /health`.

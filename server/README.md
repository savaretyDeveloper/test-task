# Приложение для обмена сообщениями, серверная часть

Это простое приложение для обмена сообщениями, разработанное с использованием Node.js для сервера и React для клиента.
Приложение позволяет пользователям отправлять и получать сообщения в реальном времени через WebSocket.

## Структура проекта

```server/
├── node_modules/
├── src/
│ ├── controllers/
│ │ └── messageController.js
│ ├── middlewares/
│ │ └── errorHandler.js
│ ├── models/
│ │ └── messageModel.js
│ ├── routes/
│ │ └── messageRoutes.js
│ ├── services/
│ │ └── messageService.js
│ ├── utils/
│ │ └── websocket.js
│ ├── config.js
│ ├── index.js
├── package.json
└── package-lock.json
```

## Установка

1. Склонируйте репозиторий:
   ```bash
   git clone <URL_репозитория>
   cd <имя_папки_репозитория>

2. Перейдите в папку сервера:
   ```bash
   cd server

3. Установите зависимости:
   ```bash
   npm install

## Запуск сервера

1. После установки зависимостей запустите сервер:
   ```bash
   node src/index.js

2. Сервер будет запущен на http://localhost:${PORT} PORT - переменная .env

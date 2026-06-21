# QA Middle Assignment

## Описание проекта

Тестовое задание на позицию QA Engineer.

Выполнено:

- REST API тестирование сервиса Restful Booker;
- подготовлена Postman коллекция с позитивными и негативными сценариями;
- настроены environment-переменные;
- описаны найденные дефекты и наблюдения API;
- подготовлены UI тест-кейсы для страниц Form Authentication, File Upload и Dynamic Loading;
- выполнено ручное тестирование выбранных страниц;
- оформлены найденные UI дефекты;
- написаны E2E автотесты на Playwright с Page Object Model и data-driven подходом;
- подготовлены SQL и NoSQL ответы;
- подготовлены BPMN, Sequence и State Transition диаграммы;
- настроен CI через GitHub Actions.

## Структура проекта

```text
.github/workflows/   — CI конфигурация (GitHub Actions)
postman/             — Postman коллекция и environment
test-cases/          — ручные UI тест-кейсы
tests/e2e/           — E2E автотесты на Playwright
tests/features/      — Gherkin сценарии
pages/               — Page Object Model
fixtures/            — тестовые данные и файлы
sql/                 — SQL запросы
nosql/               — ответ по MongoDB
diagrams/            — BPMN, Sequence Diagram, State Transition
screenshots/         — скриншоты найденных дефектов
api-bugs.md          — баг-репорты API
bugs.md              — баг-репорты UI
```

## Запуск автотестов

Установка зависимостей:

```bash
npm install
npx playwright install --with-deps
```

Запуск всех тестов:

```bash
npx playwright test
```

Или через npm script:

```bash
npm test
```

Открыть HTML-отчёт после прогона:

```bash
npx playwright show-report
```

## Запуск API тестов через Newman

Установка Newman:

```bash
npm install -g newman
```

Запуск коллекции:

```bash
newman run postman/collection.json -e postman/environment.json
```

Или через npm script:

```bash
npm run test:newman
```

## Найденные баги и наблюдения

### API

Подробное описание находится в файле `api-bugs.md`.

Найдены следующие дефекты:

- отсутствие обработки пустого тела запроса;
- отсутствие обработки обязательного поля firstname;
- отсутствие валидации типа данных поля totalprice;
- отсутствие проверки последовательности дат checkin и checkout;
- отсутствие валидации формата даты.

Также зафиксировано наблюдение о возможности создания бронирования с датами в прошлом.

### UI

Подробное описание находится в файле `bugs.md`.

Найденный дефект:

- File Upload возвращает ошибку 500 при попытке загрузки без выбранного файла.

## Что бы улучшил при наличии дополнительного времени

- расширил покрытие негативных сценариев API (особенно для PUT/PATCH/DELETE);
- добавил JSON Schema Validation для всех API ответов;
- добавил Allure-отчёт поверх стандартного HTML-репорта Playwright;
- добавил Dockerfile для изолированного запуска тестов;
- добавил дополнительные UI сценарии и кроссбраузерное тестирование;
- интегрировал cucumber-runner для исполнения Gherkin .feature файлов.

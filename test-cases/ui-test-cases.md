# UI Test Cases

## Применённые техники тест-дизайна

### Equivalence Partitioning (EP)

Использована для проверки функциональности авторизации на странице Form Authentication.

Классы эквивалентности:

- валидные учетные данные;
- невалидный логин;
- невалидный пароль;
- пустые значения.

Каждый класс представлен одним тест-кейсом, потому что внутри класса поведение системы ожидается одинаковым.

### Boundary Value Analysis (BVA)

Использована для страницы File Upload (TC-UPLOAD-003).
Граница системы — максимальная длина имени файла (на уровне ОС обычно 255 символов).
Проверяется значение свыше границы (256+ символов), что позволяет выявить дефекты обработки длинных имён.

### State Transition Testing

Использована для авторизации (TC-LOGIN-005):
переход из состояния "авторизован" в состояние "не авторизован" через действие Logout.

---

## Form Authentication

### TC-LOGIN-001. Успешная авторизация с валидными данными

**Priority:** High

**Preconditions:** Открыта страница Form Authentication.

**Steps:**

1. Ввести логин `tomsmith`.
2. Ввести пароль `SuperSecretPassword!`.
3. Нажать кнопку Login.

**Expected result:**

- Пользователь успешно авторизован.
- Отображается сообщение об успешном входе.
- Выполнен переход на защищённую страницу.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-LOGIN-002. Авторизация с неверным паролем

**Priority:** High

**Preconditions:** Открыта страница Form Authentication.

**Steps:**

1. Ввести логин `tomsmith`.
2. Ввести пароль `wrongpassword`.
3. Нажать кнопку Login.

**Expected result:**

- Авторизация не выполняется.
- Отображается сообщение об ошибке.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-LOGIN-003. Авторизация с неверным логином

**Priority:** High

**Preconditions:** Открыта страница Form Authentication.

**Steps:**

1. Ввести логин `wronguser`.
2. Ввести пароль `SuperSecretPassword!`.
3. Нажать кнопку Login.

**Expected result:**

- Авторизация не выполняется.
- Отображается сообщение об ошибке.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-LOGIN-004. Авторизация с пустыми полями

**Priority:** Medium

**Preconditions:** Открыта страница Form Authentication.

**Steps:**

1. Оставить поля Username и Password пустыми.
2. Нажать кнопку Login.

**Expected result:**

- Авторизация не выполняется.
- Отображается сообщение об ошибке.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-LOGIN-005. Выход из системы после успешной авторизации

**Priority:** Medium

**Preconditions:** Пользователь успешно авторизован.

**Steps:**

1. Нажать кнопку Logout.

**Expected result:**

- Пользователь выходит из системы.
- Выполняется переход на страницу авторизации.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

## File Upload

### TC-UPLOAD-001. Успешная загрузка файла

**Priority:** High

**Preconditions:** Открыта страница File Upload.

**Steps:**

1. Нажать кнопку выбора файла.
2. Выбрать файл.
3. Нажать кнопку Upload.

**Expected result:**

- Файл успешно загружен.
- Отображается сообщение об успешной загрузке.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-UPLOAD-002. Попытка загрузки без выбора файла

**Priority:** High

**Preconditions:** Открыта страница File Upload.

**Steps:**

1. Не выбирать файл.
2. Нажать кнопку Upload.

**Expected result:**

- Система отображает понятное сообщение пользователю: «Файл не выбран» либо «Необходимо выбрать файл для загрузки».

**Actual result:**

- Отображается страница: Internal Server Error.
- Вкладка Network показывает ответ `POST /upload` → `500 Internal Server Error`.

**Status:** Fail

**Attachment:** `screenshots/bug-001-upload-without-file.jpg`

---

### TC-UPLOAD-003. Загрузка файла с длинным именем (BVA)

**Priority:** Low

**Preconditions:** Открыта страница File Upload.

**Steps:**

1. Выбрать файл с длинным именем (более 256 символов).
2. Нажать кнопку Upload.

**Expected result:**

- Файл успешно загружен либо отображается корректное сообщение об ошибке.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-UPLOAD-004. Повторная загрузка файла

**Priority:** Low

**Preconditions:** Открыта страница File Upload.

**Steps:**

1. Загрузить файл.
2. Вернуться на предыдущую страницу.
3. Повторно выбрать файл.
4. Нажать кнопку Upload.

**Expected result:**

- Повторная загрузка выполняется успешно.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

## Dynamic Loading

### TC-DYNAMIC-001. Отображение текста после завершения загрузки

**Priority:** Medium

**Preconditions:** Открыта страница Dynamic Loading Example 1.

**Steps:**

1. Нажать кнопку Start.
2. Дождаться окончания загрузки.

**Expected result:**

- После завершения загрузки отображается текст `Hello World!`.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-DYNAMIC-002. Повторный запуск загрузки после обновления страницы

**Priority:** Low

**Preconditions:** Открыта страница Dynamic Loading Example 1.

**Steps:**

1. Нажать кнопку Start.
2. Дождаться завершения загрузки.
3. Обновить страницу.
4. Повторно нажать кнопку Start.

**Expected result:**

- Текст `Hello World!` корректно отображается повторно.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

---

### TC-DYNAMIC-003. Отображение индикатора загрузки

**Priority:** Medium

**Preconditions:** Открыта страница Dynamic Loading Example 1.

**Steps:**

1. Нажать кнопку Start.

**Expected result:**

- Во время выполнения операции отображается индикатор загрузки.
- После завершения загрузки индикатор исчезает.

**Actual result:** Соответствует ожидаемому результату.

**Status:** Pass

-- PostgreSQL

-- 1. Проверка пользователей без бронирований: помогает найти пользователей, которые зарегистрировались, но не создали ни одного booking.
SELECT u.id, u.name, u.email
FROM Users u
LEFT JOIN Bookings b ON u.id = b.user_id
WHERE b.id IS NULL;

-- 2. Проверка пересекающихся бронирований одной комнаты: помогает выявить double booking.
SELECT b1.id AS booking_1_id,
       b2.id AS booking_2_id,
       b1.room_id,
       b1.checkin AS booking_1_checkin,
       b1.checkout AS booking_1_checkout,
       b2.checkin AS booking_2_checkin,
       b2.checkout AS booking_2_checkout
FROM Bookings b1
JOIN Bookings b2 ON b1.room_id = b2.room_id
               AND b1.id < b2.id
               AND b1.checkin < b2.checkout
               AND b1.checkout > b2.checkin;

-- 3. Топ-3 комнаты по количеству подтверждённых бронирований за последние 30 дней: помогает проверить популярность комнат и корректность аналитики.
SELECT r.id,
       r.type,
       COUNT(b.id) AS confirmed_bookings_count
FROM Rooms r
JOIN Bookings b ON r.id = b.room_id
WHERE b.status = 'confirmed'
  AND b.created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY r.id, r.type
ORDER BY confirmed_bookings_count DESC
LIMIT 3;

-- 4. Проверка confirmed-бронирований, созданных более 7 дней назад, у которых checkin уже прошёл: помогает найти устаревшие активные бронирования.
SELECT id,
       user_id,
       room_id,
       checkin,
       checkout,
       status,
       created_at
FROM Bookings
WHERE status = 'confirmed'
  AND created_at < CURRENT_DATE - INTERVAL '7 days'
  AND checkin < CURRENT_DATE;

-- 5. Количество подтверждённых бронирований по типу комнаты: помогает проверить агрегированную статистику по room type.
SELECT r.type,
       COUNT(b.id) AS confirmed_bookings_count
FROM Rooms r
JOIN Bookings b ON r.id = b.room_id
WHERE b.status = 'confirmed'
GROUP BY r.type
ORDER BY confirmed_bookings_count DESC;
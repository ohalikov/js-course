// Promise - это объект показывающий состояние асинхронной операции:
// 1. Ожидает
// 2. Завершена
// 3. Потерпела неудачу.

// Эй, я сделаю всё возможное, чтобы получить эти данные
// В любом случае я вернусь и расскажу как все прошло
fetch("https://api.randomuser.me/?nat=RU&results=3")
    .then(res => res.json())
    .then(json => json.results)
    .then(console.log)
    .catch(console.error)
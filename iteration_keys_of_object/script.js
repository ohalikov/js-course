// Получить доступ к ключам данного объекта 
// И что-нибудь с ними сделать

let peron = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
}

// 1 способ самый простой для получения данного объекта
// Но также он работает для свойств прототипа данного объекта
// Он их тоже выведет
for (let key in person) {
    console.log(person[key])
}


// 1.2 вариант

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(person[key]);
        
    }
}

// 2 способ через глобальный объект Object
// не затрагивая при выводе прототипы
let keys = Object.keys(person)
console.log(keys) // маассив строк. Массив названий ключей
// Получить каждый элемент
Object.keys(person).forEach((key)=> console.log(key))

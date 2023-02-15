// Цикл for of - по значениям
// Цикл for in - по всем свойствам объекта проходит, а не только по цифрам
// for in в 10 -100 раз медленее, так как оптимизирован под произвольные объекты

// length - это не длина массива. А наибольший цифровой индекс + 1
// ЕГО МОЖНО ПЕРЕЗАПИСАТЬ!!!
let fruits = [];
fruits[123] = 'Яблоко';

const divElement = document.querySelector('.first');
divElement.innerHTML = `fruits[123] -> ${fruits[123]}, <br>length = ${fruits.length}`;

console.log(fruits.length);

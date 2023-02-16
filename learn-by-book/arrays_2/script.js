// Цикл for of - по значениям
// Цикл for in - по всем свойствам объекта проходит, а не только по цифрам
// for in в 10 -100 раз медленее, так как оптимизирован под произвольные объекты

// length - это не длина массива. А наибольший цифровой индекс + 1
// ЕГО МОЖНО ПЕРЕЗАПИСАТЬ!!!
let fruits1 = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits1;
shoppingCart.push("Банан");

console.log(fruits1)
console.log(shoppingCart)

let fruits2 = [];
fruits2[123] = 'Яблоко';

const divElement = document.querySelector('.first');
divElement.innerHTML = `fruits[123] -> ${fruits2[123]}, <br>length = ${fruits2.length}`;

console.log(fruits2.length);


// task get MaxSubSum

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item
        maxSum = Math.max(partialSum, maxSum);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum
}


console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0
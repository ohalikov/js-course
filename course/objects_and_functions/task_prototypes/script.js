// Реализовать возомжсть используя прототип, чтобы у каждого
// массива был новый метод, позволяющий удваивать значение каждого элемента
// с учётом типа данных такими образом, чтобы:

`
    1. Для чисел это возведение в квадрат
    2. Для строк это удваивание строки
    
    3. Метод не изменял сущетсвующий массив и 
    возращал новый
`
// Пример:
// [1, 2, 3] => [1, 4, 9]
// [5, 'hello', 6] => [25, 'hellohello', 36]

let arrayA = [5,4,6]
let arrayB =  [5, 5, 'hello']

Array.prototype.doubleitems = function() {
    // debugger;
    let newArray = this.map((item) => {
        if (typeof(item) === 'string') {
            return item+item
        }
        if (typeof(item) === 'number') {
            return item*item
        } 
            
    })
    return newArray
}


let newArrayA = arrayA.doubleitems()
let newArrayB = arrayB.doubleitems() 

console.log(newArrayA)
console.log(newArrayB)
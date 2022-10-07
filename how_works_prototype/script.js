// EcmaScript 5.

// Функция, которая на самом деле класс
function Car(name, year) {
    this.name = name
    this.year = year
};

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year
};

Car.prototype.color = 'silver'

let lucid = new Car('LUCID', 2022);
let bmw = new Car('BMW', 2018);
console.log(lucid);
console.log(bmw);
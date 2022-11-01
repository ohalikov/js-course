// Процесс воссоздания бъекта. Позволяет брать
// переменные из глобальгой обл. видимости и добавлять к объекту

const personName = "Arteom"
const elevation = "8000"

const funHike = { personName, elevation } // ключи объекта funHike

console.log(funHike); // {personName: 'Arteom', elevation: '8000'}

// next example

const personNameTwo = "Tallac";
const personNameThree = "Toopac";
const elevationTwo = 9738;
const elevationThree = 11568;


const print = function() { 
    console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);

};

const funHikeTwo = { name: personNameTwo, elevation: elevationTwo, print };
const funHikeThree = { name: personNameThree, elevation: elevationThree, print };
funHikeTwo.print();
funHikeThree.print();

// Старый синтаксис
var nameSkier = 'Tom'
var sound = 'Частушки'

var skier = {
    nameSkier: nameSkier,
    sound: sound,
    powderYell: function() {
        var yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speedSkier: function(mph) {
        this.speedSkier = mph;
        console.log("speed:", mph);
    }
};

skier.powderYell();
skier.powderYell();

console.log(skier.speedSkier(300));
console.log(skier.speedSkier);

// Новый синтаксис

const bestSkier = {
    nameSkier,
    sound,
    powderYell() {
        let yell = this.sound.toUpperCase();
        console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
        this.speed = mph
        console.log("Skier speed:", mph);
    }
}
console.log(bestSkier)
bestSkier.powderYell();
bestSkier.speed(6000);
// bestSkier.speed(3000); // error !!!
console.log(bestSkier.speed);
const animalsArray = ["Horse", "Mouse", "Cat"]
const [firstAnimal] = animalsArray

const [, ,thirdAnimal] = animalsArray

console.log(firstAnimal);
console.log(thirdAnimal);


// restructurization

const additionName = "Tallac";
const elevation = 9739;

const print = function() {
    console.log(`Mr. ${this.additionName} is ${this.elevation} feet tall`)
};

const funHike = { additionName, elevation, print };
funHike.print();


const peaks = ["Tallac", "Ralston", "Rose"]
const canyons = ["ward", "BlackWood", "Big Canyon"]
const tahoe = [...peaks, ...canyons]

div = document.querySelector('#result')
div.insertAdjacentHTML("beforeend", tahoe.join(", "))
console.log(tahoe);
console.log(tahoe.join(", "));

// get last element + destructurization

const [last] = peaks.reverse()
div.insertAdjacentHTML("beforeend", `<br>Текущий массив ${peaks.join(", ")} - перевернут. <br> А нам не нужно изменять исходный массив, поэтому: `)

const [lastCanyons] = [...canyons].reverse()
div.insertAdjacentHTML("beforeend", `<br><br> Мы создаем копию массива и переворачиваем и наш текущий массив не изменился:  ${canyons.join(", ")}<br> и мы получили последний элемент первым ${lastCanyons}`)

/* Оператор spread можно использовать также для получения
    оставшхся эдементов
*/

const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
const [first, ...others] = lakes

div.insertAdjacentHTML("beforeend", `<br><br>${others.join(", ")}`)


// Также, можо использовать для сбора аргументов функции в массив
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma")

function directions(...args) {
    let [start, ...remaining] = args
    let [finish, ...stops] = remaining.reverse()
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`we'll be stopping ${stops.length} times in between`);
}

// nested objects

let complex = {
    x: { a: 1, b: 2, c: 3 },
    y: [4, 5, 6]
};

let {
    x: { a: xa, ...xbc },
    y: [y0, ...y12]
} = complex


console.log( `xa = ${xa} \n xbc = ${ JSON.stringify(xbc) }`, xbc)
console.log(` y0 = ${y0} \n y12 = ${y12} `);



// union all in one object

const morning = {
    breakfast: "outmeal",
    lunch: "peanut butter and jelly"
};

const dinner = "mac and cheese";

const backpackingMeal = {
    ...morning,
    dinner
};

console.log(backpackingMeal);
// {
// breakfast: "oatmeal",
// lunch: "peanut butter and jelly",
// dinner: "mac and cheese"
// }


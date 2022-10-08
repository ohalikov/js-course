// number, string, boolean, null, undefined

// object
p = document.querySelector(".under-header")
 
p.inner
console.log(p)
let car = {
    name: "LUCID",
    year: 2022,
}

// car.__proto__ => Object.prototype
// [] => Array => Object

p.innerHTML = `Машина у меня ${car.name}, ${car.year} года выпуска `
const createCar = (name, model) => ({name, model})


const ford = createCar('Ford', 'Focus')

content = document.querySelector('.under-header')
// console.log(ford)
content.innerHTML = `Машина ${ford.name} модель ${ford.model}`



const yearField = 'year'
const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,

    logFields() {
        const {name, model, year} = this
        console.log(name, model, year)

    }
}

bmw.logFields()

//const year = bmw.year
const {year} = bmw

console.log(year)


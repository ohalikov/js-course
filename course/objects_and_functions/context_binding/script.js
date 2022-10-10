function printObject(objName) {
    console.log('Printing object: ', objName)
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            console.log('[' + key + '] ->', this[key])
        }
    }
}

let person = {
    firstName: 'Max',
    job: 'Backend',
    age: 29,
    frinds: ['Elena', 'Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}


let printPerson = printObject.bind(person)
console.log(printPerson('Person'));

// 2 метод call() также привязывает контекст, но еще и вызывает его.
// Принимает 2 параметра, первый это object, второй это аргументы вызываемой функции.
printObject.call(car, 'CarObj')


// 3 метод
printObject.apply(person, ['Person'])
// calculate age array functions

const calculateAge = (year) => {
    const current = new Date().getFullYear()
    return current - year
}


const getAge = year => new Date().getFullYear() - year


console.log(calculateAge(1980))
console.log(getAge(1980))


// ex2 

// Without lost context
const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout: function() {
        setTimeout(function() {
            console.log(this.firstName)
        }.bind(this), 1000)
    }
}

// With lost context
// Так как создали функцию, которая не создает свой контекст
const non_person = {
    age: 25,
    name: 'Maxim',
    logNameWithTimeout: () => {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}

// Without lost context
const person2 = {
    age: 25,
    name: 'Maxim',
    logNameWithTimeout() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000)
    }
}
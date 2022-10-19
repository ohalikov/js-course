const makeCoffee = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Ваш кофе готов!')
        }, 500);
    })
}

const makeToast = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Ваши тосты готов!')
        }, 10500);
    })
}


const coffeePromise = makeCoffee();
const toastPromise = makeToast();

// Будет вывод через 11 секунд вместе.
Promise.all( [coffeePromise, toastPromise] )
    .then( ([coffeePromise, toastPromise]) => {

        console.log(coffeePromise);
        console.log(toastPromise);

    })
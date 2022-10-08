// NOT CLOSURES
// >>> What is the Different ?
// I use counter is only one
let createOldConter = function(counterName) {
    let counter = 0;
    return ++counter
}
let oldCounterA = createOldConter('oldCounterA')
let oldCounterB = createOldConter('oldCounterB')


// IT CLOSURES
// function return back new function

// Example 1
let createCounterNew = function(counterName) {
    let counter = 0;

    return function() {
        console.log( counterName, ++counter )
    }
}

// Сюда кладем новую функцию
let counterAA = createCounterNew('counterAA')
let counterBB = createCounterNew('counterBB')


// Example 2 with Object
let createCounterObject = function(counterName) {
    let counter = 0

    return {
        // Old format function
        increment: function() {
            counter++
        }, 
        // new format function
        decrement() {
            counter--
        },
        getCounter() {
            return counter
        }
    }
};


let counterObjectA = createCounterObject('counterObject A')
let counterObjectB = createCounterObject('counterObject B')

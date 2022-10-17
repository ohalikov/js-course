let seconds = 1
let secondsTimeout = 10





let counter = 0

let interval = setInterval(function() {
    console.log(++counter);
    
}, seconds*1000)


setTimeout(function() {
    clearInterval(interval)
}, secondsTimeout*1000);
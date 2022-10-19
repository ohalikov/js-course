
const coffee = new Promise( (resole, reject) => {
    setTimeout( () => {
        message = 'Ваш кофе готов!' 
        resole(message)
    }, 3000);
});

coffee
    .then( data => {
        console.log(data);
    })
    .catch( err => {
        console.log(err);
});



const baseURL = 'https://api.sampleapis.com/countries/countries'

const listPromise = fetch(baseURL);
// Promise вызванный методом fetch
listPromise
    .then( data => data.json() )
    .then( counties => console.log(counties) )
    .catch( err => {
        console.log('Ошибка', err);
    })


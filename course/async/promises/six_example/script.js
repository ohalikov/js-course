const winesURL = 'https://api.sampleapis.com/wines/reds'
const beersURL = 'https://api.sampleapis.com/beers/ale'

const winesPromise = fetch(winesURL)
const beersPromise = fetch(beersURL)

const myOwnWines = []

Promise.all( [winesPromise, beersPromise] ) 
    .then( data => Promise.all(data.map(item => item.json())) )
    .then( finalData => {
        const elementsWines = finalData[0].slice(0,20) 
        for (let iterator of elementsWines) {
            myOwnWines.push(iterator)
            // Если сделать for in то, iterator будет index
            // А если for of, то iterator будет одним из элементов 
        }
    })
    .catch( e => console.log(Error(e)) )
    .finally( () => console.log('Выполнено!'))

console.log(myOwnWines);


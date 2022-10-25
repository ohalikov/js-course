function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms);
    })
}

// sleep(1500).then( () => {
//     console.log('1500');
// })


// sleep(3000).then( () => {
//     console.log("3000");
// })


Promise.race( [sleep(1500), sleep(3000)] )
    .then( () => {
        console.log('race');
    })


let methodOne = sleep(1500).then( () => {
    return {
        name: 'promise 1500'
    }
})

let methodTwo = sleep(3000).then( () => {
    return {
        name: 'promise 3000'
    }
})

let methodThree = sleep(4000).then( () => {
    return {
        name: 'promise 4000'
    }
})



async function start() {
    let dataRace = await Promise.race( [methodOne, methodTwo] )
    let dataAll = await Promise.all( [methodOne, methodTwo, methodThree] )

    console.log(dataAll, 'dataAll');
    console.log(dataRace, 'dataRace');
}

start()
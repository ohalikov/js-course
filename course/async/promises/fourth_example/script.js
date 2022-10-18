baseURL = 'https://api.sampleapis.com/coffee/hot'

const family = [
    {member: 'mother', id: 111, coffee: 'Latte'},
    {member: 'father', id: 222, coffee: 'Espresso'},
    {member: 'son', id: 333, coffee: 'Cappucion'},
]

const getCoffee = (member) => {
    const coffeePromise = fetch(baseURL)
    return coffeePromise
        .then( data => data.json() )
        .then( list => {
            console.log('list >>> ', list); 
            const coffee = list.find( elem => elem.title === member)
            return {
                ...coffee,
                member
            }
        })
}

const getFamilyMember = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const member = family.find(res => res.id === id)

            if (member) {
                resolve(member)
            } else {
                reject(Error("Член FAMILY не найден"))
            }

        }, 1500)
    })
}

getFamilyMember(333)
    .then( member => { 
        return getCoffee(member)
    })
    .then( newMember => {
        console.log('newMember > ', newMember );
    })
    .catch( e => {
        console.log(`${e} -> "Поймал исключение"`)
    })
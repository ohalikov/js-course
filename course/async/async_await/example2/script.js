btnLoad = document.querySelector('#load')
btnLoad.addEventListener('click', load)

const baseURL = 'https://api.sampleapis.com/coffee/hot'

const family = [
    {member: 'mother', id: 111, coffee: 'Latte'},
    {member: 'father', id: 222, coffee: 'Espresso'},
    {member: 'son', id: 333, coffee: 'Cappuccino'},
]

function sum(num1, num2) {
    return num1 + num2
}

async function getCoffee() {
    const coffeePromise = await fetch(baseURL)
    const data = await coffeePromise.json()
    return data
} 

async function getFamilyMember (id) {
    return new Promise ((resolve, reject ) => {
        setTimeout( () => {
            let member = family.find(res => res.id === id)
            resolve(member)
        }, 5500)
    })
}   

async function changeMemberList(memberObj, listCoffee) {
    const coffee = listCoffee.find( elem => elem.title === memberObj.coffee)
    return {
        id: memberObj.id,
        member: memberObj.member,
        coffee: {...coffee},
        
    }
}

async function load() {

    console.log(sum(4,5));
    const isMember = await getFamilyMember(333)
    const listCoffee = isMember ? await getCoffee() : console.error(Error("Мы не нашли члена семьи"));
    
    const newMember = await changeMemberList(isMember, listCoffee)
    console.log(sum(4,5));
    console.log(newMember);
  

}



// const getCoffee = (member) => {
//     const coffeePromise = fetch(baseURL)
//     return coffeePromise
//         .then( data => data.json() )
//         .then( list => {
//             console.log('list >>> ', list); 
//             const coffee = list.find( elem => elem.title === member)
//             return {
//                 ...coffee,
//                 member
//             }
//         })
// }

// const getFamilyMember = (id) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             const member = family.find(res => res.id === id)

//             if (member) {
//                 resolve(member)
//             } else {
//                 reject(Error("Член FAMILY не найден"))
//             }

//         }, 1500)
//     })
// }

// getFamilyMember(333)
//     .then( member => { 
//         return getCoffee(member)
//     })
//     .then( newMember => {
//         console.log('newMember > ', newMember );
//     })
//     .catch( e => {
//         console.log(`${e} -> "Поймал исключение"`)
//     })
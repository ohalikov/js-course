/*
    Client -> Server -> DataBase -> Server -> Client 

*/

console.log('Client: i wanna get user list')

let promise = new Promise((resolve, reject) => {  
    setTimeout(()=>{
        console.log('Server: Запрашиваю список пользоватлей в бд')
        console.log('...')
        resolve()
    }, 2000)
})

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = [
                {uid: 'id1', name: 'Max'},
                {uid: 'id2', name: 'Lena'}
            ]
            console.log('DataBase: Формирую список пользователей')
            console.log('...')
            resolve(users)
        }, 1500)   
    })
})
.then((dbUsers) => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('Server: Трансформирую полученные данные для Клиента')
            console.log('...')
            let users = dbUsers.map((user) => {
                return {
                    id: user.id,
                    firstName: user.name,
                    timestamp: Date.now() 
                }
            })
            resolve(users)
        }, 1000)
    })
})   
.then((users) => {
    // if it last method doesnt wrap PROMISE, then we'll get state 'FINALLY' earlier 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Client: Получил данные. Отображаю их');
            console.log(users);
            resolve()
        }, 2000)
    })

})
.catch((error) =>{
    console.log(error)
})
.finally(() => {
    console.log('Finally');
})

/*
    Client -> Server -> DataBase -> Server -> Client 

*/

console.log('Client: i wanna get user list')


setTimeout(function() {
    console.log('Server: Send Request to DB about user')
    console.log('...')
    
    setTimeout(function() {
        console.log('DataBase: PROCESSING')
        console.log('...')

        setTimeout(function() {
            console.log('Server: Transform data for client')
            console.log('...')

            setTimeout(function() {
                console.log('Client: I get data. SHOW IT');
                console.log('...')
            }, 5000)
        }, 1500)
    }, 1500)
}, 5000)

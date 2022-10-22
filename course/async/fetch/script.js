btnLoad = document.querySelector('#load')
btnLoad.addEventListener('click', load)


function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
        .then( (response) => {
            console.log(response["status"]); 
            return response["status"] == 200 ? response.json() : null
        })
        .then( (data) => {
            if (!data) {
                console.log("Lox pidr net druzei");
                return
            }
            let ul = document.querySelector('#list')
            let html = data.map( (item) => {
                return `<li>${item.id} -> ${item.name} -> email: ${item.email}</li>`
            })
            // 1 variant
            // ul.innerHTML = html.join(" ");
            
            // 2 variant
            // for (const item of html) {
            //     ul.innerHTML += item
            // }

            // 3 variant
            ul.insertAdjacentHTML('afterbegin', html.join(" "))
            
        })
        .catch( (e) => {
            console.error("error =>", Error(e));
        })
}
btnLoad = document.querySelector('#load')
btnLoad.addEventListener('click', load)


async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)
    let data = await response.json()

    let ul = document.querySelector('#list')
    let html = data.map( (item) => {
        return `<li>${item.id} -> ${item.name} -> email: ${item.email}</li>`
    })
    ul.insertAdjacentHTML('beforeend', html.join(" "))
    console.log(data);    
}
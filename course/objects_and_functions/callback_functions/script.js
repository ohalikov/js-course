/*
    callback functions
    Итак, колбэк-функция -- это функция 
    переданная в другую функцию в качестве аргумента/параметра. 
    ВСЁ.
*/

// function myFunc(callback) {
//     const arrayA = [4, 5, 6];
//     let element = document.querySelector('.out-1');
//     callback(element, arrayA)
// }


// function out( elem, arr ) {
//     elem.innerHTML = arr.join('===');
// }


// function out2( elem, arr ) {
//     elem.innerHTML = arr.join('-!');
// }

// myFunc(out)
// myFunc(out2)


function getCats(callback2) {   
    baseURL = 'https://cataas.com/cat?json=true'
    cutUrl = 'https://cataas.com'
    fetch(baseURL)
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(data => {
        console.log(data);
        callback2(data, cutUrl)
    })
    .catch( e => console.log(e))
}

function showCats(d, url) {
    const elementInnerHtml = document.querySelector('.out-1')
    elementInnerHtml.innerHTML = `<img width="200px" height="auto" src="${url}${d.url}">`
    
}

function showCats2(d, url) {
    const elementInnerHtml = document.querySelector('.out-1')
    elementInnerHtml.innerHTML += `<img width="400px" height="auto" src="${url}${d.url}">`
    
}

getCats(showCats)
getCats(showCats2)



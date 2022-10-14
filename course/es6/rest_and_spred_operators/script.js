const form = document.querySelector('form')
const context = document.querySelector('.under-header')

form.addEventListener('submit', event => {
    event.preventDefault()
    const title = form.title.value
    const text = form.text.value
    const description = form.description.value
    otherDesctuctMethod({title, text, description})
    saveForm(title,text,description)


})

// REST OPERATOR -> для сбора всех параметров
function saveForm(...args) {
    const [title, text, description] = args 
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    }
    context.innerHTML = `Form data: <br> date = ${formData.date} <br> title = ${formData.title} <br>text = ${formData.text}`
}



function otherMethodSaveForm(data) {
    const {title, text, description} = data
    const formData = {
        date: new Date().toLocaleDateString(),
        title,
        text,
        description
    }
    context.innerHTML = `Form data: <br> date = ${formData.date} <br> title = ${formData.title} <br>text = ${formData.text}<br>description = ${formData.description}`
}

// SPRED OPERATOR -> чтобы разворачивать объекты
function otherDesctuctMethod(data) {
    const formData = {
        date: new Date().toLocaleDateString(),
        ...data  // Spred оператор
    }
    context.innerHTML = `Form data: <br> date = ${formData.date} <br> title = ${formData.title} <br>text = ${formData.text}<br>description = ${formData.description}`
}




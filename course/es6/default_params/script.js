const createPost = (title, text = 'Default text', date) => {
    date = date || new Date().toLocaleDateString()
    return {
        title: title, // можно оставить только title
        text: text, // text
        date: date // date
    }
}


const post = createPost('Скоро новый год!')
console.log(post)
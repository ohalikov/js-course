taskText = `
    Реализовать класс Dropdown, который будет инициализировать компонент выбора
    элементов по функционалу похожий на обычный html элемент select, но полностью
    реализованный на JS без тега select
`

// Пример:
class Dropdown {
    constructor(selector, options) {
        this.$el = document.querySelector(selector) // Приватная переменная $el
        this.items = options.items
        console.log(this.items);
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
        
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                this.$el.classList.contains('open') ? this.close() : this.open()
            } 
            else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        }) 

        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
        }).join('')

        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }

    select(id) {
        const item = this.items.find(i => i.id === id)
        this.$el.querySelector('.dropdown__label').textContent = item.label
        this.close()
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }

}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Moscow', id: 'msk'},
        {label: 'Sankt-Petersburg', id: 'spb'},
        {label: 'Novosibirsk', id: 'nsk'},
        {label: 'Krasnodar', id: 'krdr'}
    ]
})





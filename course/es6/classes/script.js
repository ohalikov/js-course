// RootElement <= Box <= instances

class RootElement {
    constructor(tagName = 'div') {
        this.$el = document.createElement(tagName)
        this.$el.style.marginBottom = '20px'
    }

    hide() {
        this.$el.style.opacity = '0'
    }

    show() {
        this.$el.style.opacity = '1'
    }

    append() {
        const wrapper = document.querySelector('.wrapper')
        wrapper.insertAdjacentElement('beforeend', this.$el)
        
    }

    
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {
        super(tagName)
        this.color = color
        this.size = size
    }

    create() {
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `${this.size}px`
        this.append()
        return this
    }

}


class Circle extends RootElement {
    constructor(color) {
        super()
        this.color = color
    }

    create() {
        this.$el.style.background = this.color
        this.$el.style.width = this.$el.style.height = `120px`
        this.$el.style.borderRadius = '50%'
        this.append()
        return this
    }
}

const redBox = new Box('red', 100, 'div').create()
const blueBox = new Box('blue', 100, 'div').create()
// blueBox.hide()


const firstCircle = new Circle('green').create()

// Add event Listener for hide element
console.log(firstCircle.$el.addEventListener('mouseenter', () =>{
    firstCircle.hide()
}));

console.log(firstCircle.$el.addEventListener('mouseleave', () =>{
    firstCircle.show()
}));
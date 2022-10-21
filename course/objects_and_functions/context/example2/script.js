// контекст = область видимости переменных для функции
// + переменная this

// this - ссылка на объект, который вызывает код в данный момент

let count = 0;

function f1() {
    console.log(this);
    console.log(count);
    
    this.textContent = count
    count++;
}


function f3(count) {
    console.log(count);
    console.log(this);
    this.textContent = count;
}

function f5(count) {
    return count
}

// button.addEventListener('click', f1);

// const f2 = () => {
//     console.log(count);
//     console.log(this);
//     this.textContent = count
//     count++;
    
// }
// button2.addEventListener('click', f2);

// f1.call(button)
// f1.call(button)
// f1.call(button)
// f1.call(button)
// f1.call()


document.querySelector('.b-1').addEventListener('click', () => {
    // count++
    f1.call(document.querySelector('.b-2' ))    
});

document.querySelector('.b-3' ).addEventListener('click', () => {
    count++
    f3.call(document.querySelector('.b-2' ), count)    
});


function sum1(a, b, c = 0, d = 0) {
    this.innerHTML = a + b + c + d

}


document.querySelector('.b-2').addEventListener('click', () => {
    array = [5,4,3,3]
    context = document.querySelector('.under-header')
    context2 = document.querySelector('.under-header2')
    sum1.call(context, 3,4)
    sum1.apply(context2, array)
})


// count = count + 5
const f4 = f1.bind(document.querySelector('.under-header3'));
// f4();
// f4();
// f4();
document.querySelector('.b-4').addEventListener('click', f4)


const sum2 = sum1.bind(document.querySelector('.under-header4'));
sum2(32,53);



// частичные функции., с переопределенным аргументом
function sum3(a, b, c) {
    console.log(arguments);
    this.innerHTML = a + b + c;

}

const sum4 = sum3.bind(document.querySelector('.under-header6'))

document.querySelector('.b-6').addEventListener('click', () => {
    sum4(3,4,5)
})

function sum7(a,b,c) {
    return a + b + c
}
// Определяем bind в контексте частичной функции.
const sum8 = sum7.bind(undefined, 100, 300)

btn7 = document.querySelector('.b-7')
btn7.addEventListener('click', () => {
    outputField = document.querySelector('.out-7')
    outputField.textContent = sum8(5)
})

// Вытягиваем методов
const validate = {
    password: 'himhai322323',
    email: 'pfdsafa@de',
    isValid: false,
    sayHi() {
        console.log(`object => ${JSON.stringify(this)}`);
        return (this.password.length > 6) ? true : false;
    }
}

// console.log(validate.sayHi());
const obj = {
    password: "hello12344"
}
const validatePassword = validate.sayHi.bind(obj);

console.log(validatePassword());
obj.password = '123'

console.log(validatePassword());
const createToggler = () => {
    let toggle = false;
    return () => {
        toggle = !toggle
        return toggle
    }
}

const toggler1 = createToggler();
const toggler2 = createToggler();


// validators 
const createValidator = (regExp) => {
    return (value) => {
        return regExp.test(value)
    }
}

const nameValidator = createValidator(/\w+/gi);
const phoneValidator = createValidator(/\d+/gi);
const cardValidator = createValidator(/\d{4}\s\d{4}\s\d{4}\s\d{4}/gi)

console.log("nameValidator('Seme')",nameValidator('Semen'));
console.log("nameValidator",nameValidator('123'));
console.log("phoneValidator",phoneValidator("Vlad"));
console.log("phoneValidator",phoneValidator('123'));
console.log("cardValidator",cardValidator('1234 1111 2222 4444'));
console.log("cardValidator",cardValidator('1234 1111 22224444'));
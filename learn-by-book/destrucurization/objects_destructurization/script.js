const sandwich = {
    bread: "dutch crunch",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
};

let {bread, meat} = sandwich
bread = 'garlic'
meat = 'turkey'
bread2 = sandwich.bread
meat2 = sandwich.meat 


console.log(`bread 1 -> ${bread} \n bread 2 -> ${bread2}`);
console.log(`meat 1 -> ${meat} \n meat2 -> ${meat2}`);



// destructurization arguments 
const lordify = ({ firstname }) => {
    console.log(`\n\n${firstname} of Canterbury`);
}

const regularPerson = {
    firstname: "Lili",
    lastname: "Wilson",
    spouse: {
        firstname: "Phil",
        lastname: "Wilson"
    }
};

lordify(regularPerson)

const lordify2 = ({ spouse: { firstname } }) => {
    console.log(`\n${firstname} of Canterbury 2`);
}

lordify2(regularPerson)
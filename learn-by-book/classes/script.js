function Vacation(destination, length) {
    this.destination = destination;
    this.length = length;
}

Vacation.prototype.print = function() {
    console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);
maui.print();

// another one

class Vacation2 {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}

const trip = new Vacation2("Santiago, Chile", 7);
trip.print()

// Расширение класса Vacation2 включив в него снаряжение

class Expedition extends Vacation2 {
    constructor(destination, length, gear) {
        super(destination, length);
        this.gear = gear
    }

    print() {
        super.print();
        console.log(`Bring your ${this.gear.join(" and your ")}`);
    }
}


const newTrip = new Expedition("Mt. Whitney", 3, [
    "sunglasses",
    "prayer flags",
    "camera"
]);

newTrip.print()
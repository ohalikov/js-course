class Vacation2 {
    constructor(destination, length) {
        this.destination = destination;
        this.length = length;
    }

    print() {
        console.log(`${this.destination} will take ${this.length} days.`);
    }
}


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


export default new Expedition("Mt. Freel", 2, ["water", "snack"]);
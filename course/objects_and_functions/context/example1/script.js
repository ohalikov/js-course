// Oboject Context

let person = {
    name: 'Max[',
    age: 28,
    job: 'frontend',
    displayInfo: function(ms) {
        var self = this // 1 variant change this (window -> person)
        setTimeout(function () {
            console.log('Name: ', self.name);
            console.log('Age: ', self.age);
            console.log('Job: ', self.job);
        }, ms)

    }
};


person.displayInfo(2000)



// 2 variant


let person2 = {
    name: 'Robert',
    age: 38,
    job: 'Backend',
    displayInfo: function(ms) {
        setTimeout(function () {
            console.log('Name: ', this.name);
            console.log('Age: ', this.age);
            console.log('Job: ', this.job);
        }.bind(this), ms)

    }
};

person2.displayInfo(5000)
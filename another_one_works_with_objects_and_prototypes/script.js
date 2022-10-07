let lucid = Object.create({
    calculateDistancePerYear: function() {
        // age
        Object.defineProperty( this, 'distancePerYear', {
            value: Math.ceil( this.distance / this.age ),
            enumerable: false,
            writable: false,
            configurable: false
        })
        
    }
}, {
    name: { 
        value: 'Lucid', 
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'XLine', 
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015, 
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 10325.54,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log("Получаем возраст")
            return new Date().getFullYear() - this.year
        },
        set: function() {
            console.log("Устанавливаем значение")
        }

    }

})

console.log(lucid);

lucid.calculateDistancePerYear()
// Получить все ключи

for (const key in lucid) {
    if (lucid.hasOwnProperty(key)) {
        console.log(key, lucid[key]);
    }
}
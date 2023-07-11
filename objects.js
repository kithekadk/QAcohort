let car = {
    type: "Heavy duty",
    model: "Audi",
    year: 2022,
};

// let car = new Object();

let cartype = car.model

let yearofmanufacture = car["year"]

console.log(yearofmanufacture);

// Modifying value
console.log(car.model);

car.type = "Sports Car";

console.log(car.type);

car.no_of_wheels = 4;

console.log(car);

// deleting a property
delete car.type

console.log(car);

console.log("year" in car)
// console.log(car.year === undefined)

let lorry ={
    passengers: 2,
    weight: "5000kgs"
}

let combined = Object.assign({}, car, lorry)

console.log(combined);

// dynamic
let prop = "Name";
let prop2 = "Age";

let user = {
    [prop]: "Kitheka",
    [prop2]: 50
}

console.log(user);
console.log(user.Age);


// This Keyword
console.log(combined);

let newobject = {
    model: 'Audi',
    year: 2022,
    no_of_wheels: 4,
    passengers: 2,
    weight: '5000kgs',
    emPhone: '07245987324',
    callEmergency: function(){
        console.log(`Calling ${this.emPhone}`);
    }

}

newobject.callEmergency()

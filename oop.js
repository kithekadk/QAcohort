// object literals
// let car = {
//     name: 'bmw',
//     capacity: 5,

// }

// Using function factories
function createUser(name, age){
    return {
       name: name,
       age:  age
    }
}

const user1 = createUser('Paul', 10)

console.log(user1);


class Vehicle{

    constructor(color, model, fuel){
        this.color = color;
        this.model = model;
        this.fuel = fuel
        // this.capacity = capacity
    }

    color;
    model;
    manufacture_date;
    #wheels;
    wheels_count;
    _capacity;
    fuel;

    finalcanMove(){
        console.log("moving ...");
    }
    canStop(){
        console.log('stopping ...');
    }

    setWheels(no_of_wheels){
        this.#wheels = no_of_wheels
        // this.wheels_count = this.#wheels
    }

    getWheels(){
        // console.log(this.wheels_count);
        return this.#wheels;
    }

}



class Tuktuk extends Vehicle{

    constructor(engi, hp, color, model, fuel){
        super(color, model, fuel)
        this.engine = engi;
        this.horsepower = hp
    }
    engine;
    horsepower;
}

let mercedes = new Vehicle('white', 'S550', 'Vpower', 5)

console.log(mercedes);

mercedes.manufacture_date = "20/10/2022"
// mercedes.wheels = 4
mercedes.setWheels(12)

console.log(mercedes.getWheels());
mercedes._capacity = 5



let desc = Object.getOwnPropertyDescriptor(mercedes, 'model');

Object.defineProperty(mercedes, 'model',{
    value: 'E200',
    writable:true,
    enumerable: true,
    configurable: true
})

Object.defineProperties(mercedes, 
    {'color':{
        writable:true,
        enumerable: true,
        },
    'fuel':{
        writable:true,
        enumerable: true, 
    }
    
})

mercedes.color = 'red';

mercedes.model = 'E350';

for(let prop in mercedes){
    console.log(prop);
}

// console.log(mercedes._capacity);

// let audi = new Vehicle();

// audi.model = 'SQ5'
// audi.canMove();

// let bmw = new Vehicle()
// bmw.color = 'black'
// console.log(bmw.color);

let tuktuk1 = new Tuktuk('yellow', 'tuk', 'diesel')

// console.log(tuktuk1);

let tuk2 = new Tuktuk('small', 300, 'red', 'small-tuk', 'diesel')
// console.log(tuk2);
// Problem 1. 

function Character() {
    this.name = "unnamed"

}
Character.prototype.setName = function(x){
    this.name = x
}
Object.setPrototypeOf(Warrior.prototype,Character.prototype)

function Warrior() {
    Character.call(this)
    this.strength = 0
}
Warrior.prototype.increaseStrength = function(){
    this.strength+=100
}
Warrior.prototype.decreaseStrength = function(){
    this.strength-=100
}
Object.setPrototypeOf(Knight.prototype,Warrior.prototype)
function Knight() {
    Warrior.call(this)
    this.weapon = 'no weapon'
}
Knight.prototype.setWeapon = function(w){
    this.weapon = w
}

// Problem 2.

class Vehicle {
    constructor(make){
        this.make = 'v'
    }
    setMake(){
        console.log(`${this.make}`)
    }
}

class Car extends Vehicle {
    constructor(make,model){
        super(make)
        this.model = 'abc'
    }

}

class Truck extends Vehicle {
    constructor(make,bedSize){
        super(make)
        this.bedSize = '50'
    }
}

class Motorcycle extends Vehicle  {
    constructor(make,engineSize){
        super(make)
        this.engineSize = 'vs6'
    }
}

export { Character, Warrior, Knight, Vehicle, Car, Truck, Motorcycle}
# Prototype

* Objects are key/value pairs. The most common way to create an object is with curly braces {} and you add properties and methods to an object using dot notation.

```javascript
let animal = {}
animal.name = 'Leo'
animal.energy = 10

animal.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

animal.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

animal.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}
```

* **Functional Instantiation**: in the previous example, methods are recreated every time an objects is created, wasting memory and making the object bigger than it needs to be.

```javascript
function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy

    animal.eat = function (amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }

    animal.sleep = function (length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }

    animal.play = function (length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
```

* **Functional Instantiation with Shared Methods**: instead of recreating those mmethods every time an object is created, they're moved to their own object that can be referenced. This way the created objects are smaller and not as much memory is wasted.

```javascript
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

function Animal (name, energy) {
    let animal = {}
    animal.name = name
    animal.energy = energy
    animal.eat = animalMethods.eat
    animal.sleep = animalMethods.sleep
    animal.play = animalMethods.play

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)
```

* **Object.create**: creates an object that will delegate to another object on failed lookups (whenever there's a failed property lookup on that object, it can consult another object to see if that object has the property).

```javascript
const parent = {
    name: 'Stacey',
    age: 35,
    heritage: 'Irish'
}

const child = Object.create(parent)
child.name = 'Ryan'
child.age = 7

console.log(child.name) // Ryan
console.log(child.age) // 7
console.log(child.heritage) // Irish
```

* In the previous example, whenever there’s a failed property lookup on `child`, JavaScript will delegate that lookup to the `parent` object.

* **Functional Instantiation with Shared Methods and Object.create**: instead of adding all the shared methods to the created object one by one, use `Object.create` to delegate to another object instead (`animalMethods` in the example).

```javascript
const animalMethods = {
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    },
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    },
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

function Animal (name, energy) {
    let animal = Object.create(animalMethods)
    animal.name = name
    animal.energy = energy

    return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)
```

* **Prototype**: every function in JavaScript has a `prototype` property that references an object.

```javascript
function doThing () {}
console.log(doThing.prototype) // {}
```

* **Prototypal Instantiation**: instead of creating a separate object to manage the methods, methods are put directly into the function's `prototype`. Then, instead of using `Object.create` to delegate to a `methods` object (like `animalMethods`), simply delegate to `Function.prototype` (ie: `Animal.prototype`).

```javascript
function Animal (name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)

leo.eat(10)
snoop.play(5)
```

* **`new` keyword**: the `new` keyword is JavaScript's built-in way of doing the following:
  1. Creates a `constructor` function.
  2. Adds methods to the constructor function’s `prototype`.
  3. Uses `Object.create` to delegate failed lookups to the function’s `prototype`.
* When `new` is invoked, creating the object and returning it are done implicitly, and the object created is called `this`.

```javascript
function Animal (name, energy) {
    // const this = Object.create(Animal.prototype)

    this.name = name
    this.energy = energy

    // return this
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)

// UNDER THE HOOD IT LOOKS LIKE THIS
function Animal (name, energy) {
    this.name = name
    this.energy = energy
}

Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
}

Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
}

Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
```

* **Pseudoclassical Instantiation**: if `new` isn't used, the `this` object never gets created or returned.

```javascript
function Animal (name, energy) {
  this.name = name
  this.energy = energy
}

const leo = Animal('Leo', 7)
console.log(leo) // undefined
```

* **ES6 `class`**: added in 2015 in ES6. Classes allows you to create a bluepring for an object, instead of using functions to re-create the same functionality. The new way (with the `class` keyword) is primarily just “syntactical sugar” over the existing way we’ve called the *pseudoclassical pattern*.

```javascript
class Animal {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
}

const leo = new Animal('Leo', 7)
const snoop = new Animal('Snoop', 10)
```

* **Static methods**: methods that are specific to a class, but doesn't need to be shared across instances of that class.
  * Uses the `static` keyword.
  * Methods added using `static` are added as properties of that class, but not its `prototype`.

```javascript
class Animal {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy -= length
    }
    static nextToEat(animals) {
        const sortedByLeastEnergy = animals.sort((a,b) => {
        return a.energy - b.energy
        })

        return sortedByLeastEnergy[0].name
    }

    // In ES5 this would be
    Animal.nextToEat = function (nextToEat) {
     const sortedByLeastEnergy = animals.sort((a,b) => {
        return a.energy - b.energy
    })

        return sortedByLeastEnergy[0].name
    }
}
```

* **Get the prototype of an object**: use `Object.getPrototypeOf`.
* **Determining if a property lives on the prototype**: use `<object>.hasOwnProperty`.
* **Check if an object is an instance of a Class**: use `object instanceof Class`.

## Resources

* [A Beginner's Guide to JavaScript's Prototype](https://tylermcginnis.com/beginners-guide-to-javascript-prototype/)
* [JavaScript Prototypal Inheritance](https://flaviocopes.com/javascript-prototypal-inheritance/)

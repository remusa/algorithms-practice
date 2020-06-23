# Object-Oriented Programming

* [Object-Oriented Programming](#object-oriented-programming)
  * [Encapsulation](#encapsulation)
  * [Abstraction](#abstraction)
  * [Inheritance](#inheritance)
    * [Composition vs. Inheritance](#composition-vs-inheritance)
    * [Class-based vs Prototype-based](#class-based-vs-prototype-based)
  * [Polymorphism](#polymorphism)
  * [Resources](#resources)

* **Class**: blueprint/prototype that defines properties and methods common to all objects of a certain kind.
  * *Properties/attributes*: characteristics of an object.
  * *Methods*: behavior of an object.
* **Object**: basic entity.

* Example: a class `Tree` can have the following properties:
  * Giving fruit
  * Falling of leaves
  * Absorbing water from roots to the upper parts
  * Creating shadows
* Then `MangoTree` could be an object of the `Tree` class.

* 4 core concepts:
  1. Encapsulation
  2. Abstraction
  3. Polymorphism
  4. Inheritance

## Encapsulation

* **Encapsulation**: all the data members (variables, attributes/properties) and behaviors(methods) are gathered together and closed.
  * Exposes only the necessary things and hides the important things from the outside world.
  * A *class* is an example.
* Only exposes the necessary attributes and methods and restricts access of the rest to the outside world (*abstraction*).
* *Information hiding*: the programmer can define and specify the accesibility of the member variables of a class instead of making everything available by default.
* Example: a medicine capsule. Everything inside is protected from the outside world.

## Abstraction

* **Abstraction**: exposes necessary features without explaining the details (like how it was implemented).
* **Data abstraction**: separates *interface* and *implementation*. This data abstraction can be archived from using 2 different classes while coding using OOP:
  * *Abstraction class*:  (0-100)% abstraction.
  * *Interface class*:  100% abstraction.
* Examples:
  * Turning on a kettle by pressing the `On` button. We don't know how it works internally but we can still use it.
  * Using a remote controller to manipulate a TV.

## Inheritance

* **Inheritance**: a class (*derived class*) can inherit properties and methods from its parent class (*base class*).
* Children subclasses can have their own properties and methods.
* Example: a child could inherit characteristics and similar behavior from their parents/grandparents.

### Composition vs. Inheritance

* *Inheritance* describes an **is a** relationship. *Composition* describes an **has a** relationship.
* **Inheritance**: describes exactly *what* objects are and *how* they're related to each other.
  * The parent class should have the functionality that subclasses share to avoid reimplementing logic.
  * A problem happens when we want to create a subclass that needs the logic of more than 1 parent subclasses (multiple inheritance). We would've to create another class that implements both parents behavior.
* **Composition**: describes what an object *can* do.
  * Create a function, make it do whatever you want and have a new type of object created.
  * More flexible than *inheritance*.
* Involves creating multiple interfaces representing the desired behaviors. Classes then implement those interfaces as needed, implementing behavior without having to inherit it.
* Separating behaviors is more natural than trying to find common behaviors than creating hierarchies.
* Changing requirements is more flexible than restructuring classes that use hierearchy.
* **Note**: avoid inheritance, makes less sense in the context of module-based languages because it tightly couples parts of the system together for no reason other than "code reuse".

### Class-based vs Prototype-based

* **Class-based**: `classes` are a blueprint of an entity, a description of the object to be created. `Objects` are created (*instantiated*) based on the classes.
* **Prototype-based**: `classes` don't exist, all objects have a `prototype` property. Inheritance is simulating when trying to access a property. If it isn't found, JS will look at the `prototype` property. If it still isn't found, it will try to look for it in the `prototype`, and the `prototype`'s `prototype`.
* *Differences*:
  * *Class-based* first needs to define a subclass by creating a new class from a parent class and extending it. Then we need to instantiate it. Finally we can use the object.
  * *Prototype-based inheritance* skips the process of defining a class, instead it just clones an existing object at time of creation (instantiation).

## Polymorphism

* **Polymorphism**: same function implementation but using *different arguments*.
* It's the ability of taking more than one form (*overloading*).
* Functions can take different arguments inside parenthesis. Polymorphism is having multiple functions with the same name but different arguments passed that get different results.
  * Example: `sum(3,4)` is different than `sum(10,23,56)`.
* **Dynamic binding**: when a program determines which function to call according to the program execution.
* **Late binding**: when the compiler determines which function to call.

## Resources

* [Zero to One in Object Oriented Concepts](https://www.freecodecamp.org/news/object-oriented-concepts/)
* [Goodbye, Object Oriented Programming - Charles Scalfani - Medium](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53)
* [Composition over inheritance - Wikipedia](https://en.wikipedia.org/wiki/Composition_over_inheritance)
* [Object-oriented programming - Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [Master the JavaScript Interview: What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9)
* [Common Misconceptions About Inheritance in JavaScript](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a)
* [How prototype-based OOP is different from class-based?](http://developer-interview.com/p/oop-ood/how-prototype-based-oop-is-different-from-class-based-13)
* [Inheritance and Composition: A Python OOP Guide – Real Python](https://realpython.com/inheritance-composition-python/)

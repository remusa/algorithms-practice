# Object-Oriented Programming

* **Class**: blueprint/prototype that defines properties and methods common to all objects of a certain kind.
  * *Properties/attributes*: characteristics of an object.
  * *Methods*: behaviour of an object.
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

* **Encapsulation**: all the data members (variables, attributes/properties) &ad behaviours(methods) are gathered together and closed.
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
* Example: a child could inherit characteristics and similar behaviour from their parents/grandparents.

## Polymorphism

* **Polymorphism**: same function implementation but using *different arguments*.
* It's the ability of taking more than one form (*overloading*).
* Functions can take different arguments inside parenthesis. Polymorphism is having multiple functions with the same name but different arguments passed that get different results. Example: `sum(3,4)` is different than `sum(10,23,56)`.
* **Dynamic binding**: when a program determines which function to call according to the program execution.
* **Late binding**: when the compiler determines which function to call.

## Resources

* [Zero to One in Object Oriented Concepts](https://www.freecodecamp.org/news/object-oriented-concepts/)
* [Goodbye, Object Oriented Programming - Charles Scalfani - Medium](https://medium.com/@cscalfani/goodbye-object-oriented-programming-a59cda4c0e53)

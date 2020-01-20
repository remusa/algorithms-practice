# S.O.L.I.D. Design Principles

The 5 most important software design principles are:
    1. **S for the Single Responsibility Principle(SRP)**: classes should be responsible for one, and only one actor.
    2. **O for the Open/Closed Principle(OCP)**: code should be easy to extend by ensuring that it stays open for extension but closed for modification (this might be the most important of all 5).
    3. **L for the Liskov Substitution Principle(LSP)**: keeps semantic consistency in complex inheritance hierarchies, making classes easier to understand and use.
    4. **I for the Interface Segregation Principle(ISP)**: protects objects from depending on the behavior they don't really need.
    5. **D for the Dependency Inversion Principle(DIP)**: controls the direction of dependencies in the code, ensuring that it always flows in the direction of more abstract entities.

## Single Responsibility Principle

* **Separate concerns**.
* All classes, functions, modules, etc. should have a *single responsability* (it should only ever have 1 reason to change).
* "A class should have one, and only one, reason to change."
* "Gather together the things that change for the same reason (*cohesion*). Separate those things that change for different reasons (*decoupling*)."
* Examples:
  * A logger function inside a class. We could extract the logger function to it's own module and then we can import it and use it in the class.
  * Sending an email from inside a class.
* "Imagine you took your car to a mechanic in order to fix a broken electric window. He calls you the next day saying it’s all fixed. When you pick up your car, you find the window works fine; but the car won’t start. It’s not likely you will return to that mechanic because he’s clearly an idiot."

## Open/Closed Principle

* Software entities (classes, modules, functions, etc.) should be *open for extension*, but *closed for modification*.
* "You should be able to *extend* a classes behaviour, *without modifying* it."
* If we make changes *outside* the function, etc. we shouldn't have to make changes *inside*.
* A well written class should not have to be updated in multiple spots.
* Instead of *changing* code, *create* new code that will work with the old code.
* Things should work automatically without having to make changes.
* Commonly violated if there's a `switch` statement or multiple `if` statements.
* We should *extract* each statement into its own class, etc.
* Example:
  * An IDE like IntelliJ or Visual Studio. We can add extend the functionality via plugins, without having to modify the IDEs themselves (all dependencies inside the plugin, point at the system; and that nothing in the system points out towards the plugins. The system doesn’t know about the plugins. The plugins know about the system).

## Liskov Substitution Principle

* **Definition**: if `S` is a subtype of `T`, then objects of type `T` may be replaced with objects of type `S` (i.e. an object of type `T` may be substituted with any object of a subtype `S`) without altering any of the desirable properties of the program.
* "Derived classes must be substitutable for their base classes."
* This means that *subtypes* should retain the behaviour of the *main type*.
  * Children should be like their parents for what they inherit.
* If we have a class (i.e. `Animal`), then in every single place we use it we should be able to *replace* it with any of its subclasses (i.e. `Dog`).
  * Example: a `Square` will always be a `Rectangle`, but a `Rectangle` won't always be a `Square`, so a `Square` class can *extend* the `Rectangle` class and override `width` and `height`. Instead of doing this we could extract similar logic (like calculating an `area`) into a class `Shape` and have both `Square` and `Rectangle` inherit from it.
* This principle is complicated because in some cases a subclass *could* inherit from more than 1 class (problem with *inheritance*).

### Composition vs. Inheritance

* **Inheritance**: describes exactly *what* objects are and *how* they're related to each other.
  * The parent class should have the functionality that subclasses share to avoid reimplementing logic.
  * A problem happens when we want to create a subclass that needs the logic of more than 1 parent subclasses (multiple inheritance). We would've to create another class that implements both parents behaviour.
* **Composition**: describes what an object *can* do.
  * Create a function, make it do whatever you want and have a new type of object created.
  * More flexible than *inheritance*.

## Interface Segregation Principle

* "Clients should not be foced to depend on methods that they do not use."
* Segretate *interfaces* to make them *smaller*.
* If an interface is too big, we need to break it down into smaller interfaces.
* It's better to have *many small interfaces* over a single large/complex one.
* We define an interface with its properties and methods, and every single class that implements that interface needs to define all of the methods of the interface.
* Only the behaviour a class can use is implemented.

## Dependency Inversion Principle

* "High level modules should not depend upon low level implementations. Both should depend upon abstractions."
* Depend in abstractions.
* Abstractions should not depend on lower level details.
* Support abstraction.

## Resources

* [S.O.L.I.D design principles for everyone : learnprogramming](https://old.reddit.com/r/learnprogramming/comments/cr3m01/solid_design_principles_for_everyone/)
* [Single Responsibility Principle Explained - Web Dev Simplified](https://www.youtube.com/watch?v=UQqY3_6Epbg)
* [The Single Responsibility Principle - Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
* [The Single Responsibility Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=DAD2oMWDWNc)
* [Open/Closed Principle Explained - Web Dev Simplified](https://www.youtube.com/watch?v=-ptMtJAdj40)
* [The Open Closed Principle - Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html)
* [The Open Closed Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=FW2poUaIq3w)
* [Liskov Substitution Principle Explained - Web Dev Simplified](https://www.youtube.com/watch?v=dJQMqNOC4Pc)
* [Liskov Substitution Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=Jecou7B3nhc&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=9)
* [Interface Segregation Principle Explained - Web Dev Simplified](https://www.youtube.com/watch?v=JVWZR23B_iE)
* [The Interface Segregation Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=E9AU2JkVtoE&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=10)
* [The Dependency Inversion Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=RS6XHQp_5F8&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=11)

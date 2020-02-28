# S.O.L.I.D. Design Principles

* [S.O.L.I.D. Design Principles](#solid-design-principles)
  * [Single Responsibility Principle](#single-responsibility-principle)
    * [Example 1](#example-1)
    * [Example 2](#example-2)
  * [Open/Closed Principle](#openclosed-principle)
    * [Examples](#examples)
    * [Example 2](#example-2-1)
  * [Liskov Substitution Principle](#liskov-substitution-principle)
    * [Examples](#examples-1)
    * [Example 2](#example-2-2)
  * [Interface Segregation Principle](#interface-segregation-principle)
    * [Example](#example)
    * [Example 2](#example-2-3)
  * [Dependency Inversion Principle](#dependency-inversion-principle)
    * [Example 1](#example-1-1)
    * [Example 2](#example-2-4)
  * [Resources](#resources)

* The 5 most important software design principles are:
  1. **S for the Single Responsibility Principle(SRP)**: classes should be responsible for one, and only one actor.
  2. **O for the Open/Closed Principle(OCP)**: code should be easy to extend by ensuring that it stays open for extension but closed for modification (this might be the most important of all 5).
  3. **L for the Liskov Substitution Principle(LSP)**: keeps semantic consistency in complex inheritance hierarchies, making classes easier to understand and use.
  4. **I for the Interface Segregation Principle(ISP)**: protects objects from depending on the behavior they don't really need.
  5. **D for the Dependency Inversion Principle(DIP)**: controls the direction of dependencies in the code, ensuring that it always flows in the direction of more abstract entities.

## Single Responsibility Principle

* **TL;DR**: guides you in creating classes that are responsible for one, and only one actor.
* **Definitions**:
  * "A class should have one, and only one, reason to change."
  * "A class should be responsible for one, and only one actor."
* **Separates concerns**.
* All classes, functions, modules, etc. should have a *single responsability* (it should only ever have one reason to change).
  * This means that a single, small change to a feature of a program should require a change in one component only.
* "Gather together the things that change for the same reason (*cohesion*). Separate those things that change for different reasons (*decoupling*)."
* Software serves the need of *actors* (people).
* Examples:
  * A logger function inside a class. We could extract the logger function to it's own module and then we can import it and use it in the class.
  * Accessing a database, creating a report and sending an email from inside a class.
* **Metaphor**: "Imagine you took your car to a mechanic in order to fix a broken electric window. He calls you the next day saying it’s all fixed. When you pick up your car, you find the window works fine; but the car won’t start. It’s not likely you will return to that mechanic because he’s clearly an idiot."

### Example 1

* Imagine you have an image service that gets an image from a URL. You'd also probably want to cache it, maybe in memory, maybe in the file system. You could add caching functionality into that `ImageService` class but now it's doing a lot of things, getting complex and it's going to be hard to unit test.
* You should have a ImageService which ideally will just be an implementation of a interface defining the operations it has. You'll have an `IImageRepository` interface with a method such as `GetImage(string url)`. Then you'll have two implementations of that interface, `WebImageRepository`, `CachedImageRepository`. Your `ImageService` class which be given an `IImageRepository`, which can either be the `WebImageRepository` if you don't want caching, or it'll be `CachedImageRepository` if you do. The `CachedImageRepository` will also be given an `IImageRepository` which will be the cache fallback, in this case the `WebImageRepository`.

```bash
// You have 3 simple, easy to test classes that each have a single responsibility.
ImageRepository.GetImage()
  -> IImageRepository.GetImage() (CachedImageRepository)
      -> If cache exists, return
      -> If cache doesn't exist
          -> IImageRepository.GetImage() (WebImageRepository)
```

### Example 2

```ruby
class Warehouse
    def calculate_total_assets
        #...
        inventory_information = get_tabulated_inventory_info()
        #...
    end

    def need_additional_stock?
        #...
        inventory_information = get_tabulated_inventory_info()
        #...
    end


    def save_inventory_records
        #...
    end

    private
    def get_tabulated_inventory_info
        #...
    end
end
```

* This class has the following methods:
  * `calculate_total_assets` calculates how much money our stock is worth. It's specified and used by the **finances department**.
  * `need_additional_stock?` analyzes the current inventory and decides if the new stock should be ordered. Used and specified by the **warehouse manager**.
  * `save_inventory_records` stores the stock information on a database or other form of datastore, specified and used by the **engineering department**.
* Changes for this class can come from any of the 3 **actors** mentioned above (in bold), they are the 3 **reasons** for it to change. Why is the current design a problem?
* Well, suppose we need to modify the way information is obtained from get_tabulated_inventory_info because of a request from finances. We go in and perform the change, and the finances department is very happy with the new behavior, but in the process, we also broke `need_additional_stock?`. Warehouse management is not going to find out about this problem until it finds out the ordering of new stock is totally messed up.
* The problem with violating this principle is that accommodating changes from different sources in the same module/class routinely cause unexpected issues. If the reason for a module to change is concentrated in a single actor, modifications tend to be more straightforward and predictable.
* The usual solution is to split the module into as many modules as sources of responsibility.
* Common concerns:
  * *Duplication*.
  * *Size of new classes*.

## Open/Closed Principle

* **TL;DR**: makes code easy to extend by ensuring that it stays open for extension but closed for modification.
  * Make the system easy to extend without impacting the code that already exists.
* **Definition**: software entities (classes, modules, functions, etc.) should be *open for extension*, but *closed for modification*.
  * "A module will be said to be open if it is still available for extension. For example, it should be possible to add fields to the data structures it contains, or new elements to the set of functions it performs."
  * "A module will be said to be closed if it's available for use by other modules. This assumes that the module has been given a well-defined, stable description (the interface in the sense of information hiding)".
* "You should be able to *extend* a classes behavior, *without modifying* it."
* We want modules that embody the two definitions:
  * We want modules to be open to extension. If requirements change and we get requests for new features, we'd like to accommodate them in our code. We want the ability to extend the behavior of our application so that we can adapt to our customer's needs.
  * We want modules to be closed for modifications, as every change has the potential to have negative side effects. If we create the right abstractions, we can depend mostly on well-defined and stable behaviors.
* If we make changes *outside* the function, etc. we shouldn't have to make changes *inside*.
* A well written class should not have to be updated in multiple spots.
* Instead of *changing* code, *create* new code that will work with the old code.
* Things should work automatically without having to make changes.
* Commonly violated if there's a `switch` statement or multiple `if` statements.
* We should *extract* each statement into its own class, etc.

### Examples

* Example:
  * An IDE like IntelliJ or Visual Studio. We can add extend the functionality via plugins, without having to modify the IDEs themselves (all dependencies inside the plugin, point at the system; and that nothing in the system points out towards the plugins. The system doesn’t know about the plugins. The plugins know about the system).
  * Imagine a module which is able to turn a Markdown document into HTML. If the module could be extended to handle a newly proposed Markdown feature, without modifying the module internals, then it would be open for extension. If the module could not be modified by a consumer so that now existing Markdown features are handled, then it would be closed for modification.

### Example 2

* Imagine we have a `Report` class with some basic behavior and the ability to store its contents in a database using the `save` method.

```bash
class Report

    def initialize()
        #...
    end

    def add_info
        #...
    end

    def set_author
        #...
    end

    def genereate_footers
        #...
    end

    def save
        # Stores the report in a database
    end

end
```

* As a new requirement, we need to be able to store the contents in new ways:
  * In a text file in the local machine.
  * In a network container.
  * In a cache (like Redis).
* Solution 1: creating more methods. Doing this *opens* the `Report` class and modifies it (violates the *close* principle).
  * create a store_in_textfile method
  * create a store_in_network method
  * create a store_in_redis method
* Solution 2: using inheritance by creating subclasses tha inherit from the `Report` class. It would be difficult to create subclasses for each database type and language we want the report in.
* Solution 3: Isolate what changes (**Strategy Pattern**). Currently, `Report` class has the knowledge needed to store information. After getting more and more requests for new ways of storing information, we know that this behavior is likely to change.
  * With this in mind, we can create a new abstraction for storing information, different classes will implement the concrete behavior for databases, textfiles and others. Those classes will be injected on Report class instances.
  * The `Report` class now has the following form:

```ruby
class Report
    attr_accessor :information_saver
    def initialize(report_information_saver)
        @information_saver = report_information_saver
        #...
    end

    #...

    def save
        information_saver.save_info(self)
    end

end
```

* `report_information_server`, as an abstraction, has only a `save_info` method that receives an object of type `Report`. The implementation details are left to the classes that implement this abstraction.
* This approach has several advantages:
  * The responsibility for storing information belongs into its own class, `Report` is now more aligned with the SRP.
  * We can add new behavior without needing to open any of the new classes, we just need a new subclass of `report_information_server`.
  * If we need new combinations of `Report` (like the languages example above), we just need to create classes for those characteristics and inject them, preventing class explosion.
  * We have a solution that will be easier to understand and maintain down the road.

## Liskov Substitution Principle

* **TL;DR**: keeps semantic consistency in complex inheritance hierarchies, making your classes easier to understand and use.
* **Definition**: "if `S` is a subtype of `T`, then objects of type `T` may be replaced with objects of type `S` (i.e. an object of type `T` may be substituted with any object of a subtype `S`) without altering any of the desirable properties of the program."
  * "It should be possible to replace a type with a subtype, without breaking the system".
* "A piece of code that depends on an object of type `P` should be able to operate properly with objects of type `C`, where `C` is a subtype of `P`."
  * What this means is that we should design our abstractions and classes in a way that facilitates interoperability across the complete hierarchy. If a subclass overrides the behavior in an unexpected way that breaks compatibility with the rest of the code, we are violating the principle.
* "Derived classes must be substitutable for their base classes."
* This means that *subtypes* should retain the behavior of the *main type*.
* Children should be like their parents for what they inherit.
* This principle is complicated because in some cases a subclass *could inherit from more than 1 class* (problem with inheritance).

### Examples

* Example a: If we have a class (i.e. `Animal`), then in every single place we use it we should be able to *replace* it with any of its subclasses (i.e. `Dog`).
* Example b: a `Square` will always be a `Rectangle`, but a `Rectangle` won't always be a `Square`, so a `Square` class can *extend* the `Rectangle` class and override `width` and `height`. Instead of doing this we could extract similar logic (like calculating an `area`) into a class `Shape` and have both `Square` and `Rectangle` inherit from it.
* Example c: magine we have a method which reads an XML document from a structure which represents a file. If the method uses a base type 'file', then anything which derives from 'file' should be able to be used in the function. If 'file' supports seeking in reverse, and the XML parser uses that function, but the derived type 'network file' fails when reverse seeking is attempted, then the 'network file' would be violating the principle.

### Example 2

* We all agree with the notion that "a square is a rectangle". This statement is by definition correct, but like a lot of other things, it might not work that well in the world of programming.

```ruby
rectangle = #... Gets a Rectangle object from somewhere, maybe a factory
rectangle.set_height(5)
rectangle.set_width(4)
raise "Area calculation is off" unless rectangle.get_area == 20
#... more code

# In another file, you can find a hypothetical implementation of the Rectangle class
class Rectangle
    def initialize()
    end

    def set_width(width)
        @width = width
    end

    def set_height(height)
        @height = height
    end

    def get_area
        return @width * @height
    end
end
```

* This code will raise an exception unless the get_area calculation returns the proper value.
* Now, imagine we implement a `Square` class, which is also by definition a `Rectangle`. You can't set the width and height of a square independently, those two values are always the same for a square.
* In addition to the public interface of `Rectangle`, `Square` implements the `set_side` method.

```ruby
rectangle = #... This line now gives a Square object
# The rest of the code stays the same

# In another file, you can find a hypothetical implementation of the Square class
class Square < Rectangle
    def set_width(width)
        set_side(width)
    end

    def set_height(height)
        set_side(height)
    end

    def set_side(side_length)
        @height = side_length
        @width = side_length
    end

end
```

* LSP is about **semantic consistency in a type hierachy**. It's not enough to implement the same public interface across said hierarchies, the behavior should also be consistent.
* We aim for interoperability, and the ability to work with subtypes without the need for 'special handling' for outliers.
* In our example, we might be tempted to solve the problem with an if statement based on types: if we find an object of type `Square`, perform X different action. This is a problem that can spiral out of control very easily and *pollute* pieces of code that depend on `Rectangle` as our code grows.
* What we need in place is a disciplined approach: every type that implements the `Rectangle` public interface should act like a `Rectangle` *as long as we are using the same public interface*.
* This principle has a broader application than just traditional class hierarchies in statically typed languages. It's also used when sharing a public interface with duck types, or designing microservices with a shared REST interface.
* [Composition vs. Inheritance](oop.md#Composition-vs.-Inheritance)

## Interface Segregation Principle

* **TL;DR**: protects objects from depending on the behavior they don't really need.
* "Clients should not be forced to depend on functionality (methods) that they do not use."
* "Classes that implement interfaces should not be forced to implement methods they do not use."
* **Summary**: ISP is a tool that guides you in the creation of well-defined interfaces and abstractions.
* Only the behavior a class can use is implemented (an object should not depend on behavior it doesn't need.).
* You should not force clients to depend on behavior they don't need.
* The ISP tries to protect the clients by ensuring that they don't know about all the behavior in the class. Packages of related behavior used by a single client should be split into smaller and more cohesive interfaces.
* **Benefits**:
  * Protects objects from depending on things they don't need.
  * It lets you identify the right abstractions and build bundles of cohesive behavior.
* Robert Martin said: "Depending on something that carries baggage that you don't need can cause you troubles that you didn't expect".
* **Defining interfaces**:
  * We define an *interface* with its properties and methods, and every single class that implements that interface needs to define all of the methods of the interface.
  * Segretate *interfaces* to make them *smaller*.
  * If an interface is too big, we need to break it down into smaller interfaces.
  * It's better to have *many small interfaces* over a single large/complex one.

### Example

* Imagine we have a method which reads an XML document from a structure which represents a file. It only needs to read bytes, move forwards or move backwards in the file. If this method needs to be updated because an unrelated feature of the file structure changes (such as an update to the permissions model used to represent file security), then the principle has been invalidated. It would be better for the file to implement a 'seekable-stream' interface, and for the XML reader to use that.
* Separating a `Stream` interface into `ReadableStream` and `WritableStream` interfaces.

### Example 2

* Suppose that we have a big class with lots of functionality. We will call it `BigClass`. Now, there are 3 other object types (`ClientOne`, `ClientTwo` and `ClientThree`) that use functionality from `BigClass`.

![Structure](https://www.brainstobytes.com/content/images/2019/08/ISPBaseDiagram.png)

* The three classes use only a portion of the functionality from the base class, but because they reference it, implicitly depend on a bunch of functionality they don't use.
* We can refactor this design to follow the ISP by creating 3 smaller interfaces that encompass only the behavior used by each of the 3 clients.

![Updated structure](https://www.brainstobytes.com/content/images/2019/08/ISPBaseDiagramFixed.png)

* Now each client depends **only** on the functionality they need.

## Dependency Inversion Principle

* **TL;DR**: controls the direction of dependencies in your code, ensuring that it always flows in the direction of more abstract entities.
* "High level modules should not depend upon low level implementations. Both should depend upon abstractions."
* Abstractions should not depend on lower level details, details should depend on abstractions.
* Depend in abstractions, not concrete entities.
* **Benefits**:
  * Abstractions are much more stable entities than concrete classes, by depending on them, we are honoring the principle of *depend on things that change less often than you do*. Now, we don't need to worry about the volatile nature of a concrete class, we just care about the interface.
  * By depending on abstractions, we stop caring about which class an object belongs to and instead look at what methods the object can respond to. This increases the flexibility of the code by letting us use the original class in other contexts.
  * Realistically, you can't do this all the time, you need to depend on concrete things like the built-in `String` and `Array` classes. What happens is that things like `String` are stable classes you can depend on; you don't expect wild changes on the behavior of such class. The DIP is a way of protecting yourself against unstable classes through development.

### Example 1

* Example a: We can use an interface `PaymentProcessor` as a middleware (an abstraction) between a store and the Stripe API. From the store we will call the payment processor interface, and the interface will call the Stripe API. This way we can create multiple payment processor interfaces for Stripe, Paypal, etc. using the same API (functions) and the store doesn't have to change.
  * We don't want the high-level code (the store) to depend on the low level code (Stripe and Paypal APIs), so by using an abstraction, the store can use the same functions to call different processors. To the store both APIs look the same because both are called the same way.
* Example b: imagine we have a program which read metadata from a website. We would assume that the main component would have to know about a component to download the webpage content, then a component which can read the metadata. If we were to take dependency inversion into account, the main component would depend only on an abstract component which can fetch byte data, and then an abstract component which would be able to read metadata from a byte stream. The main component would not know about TCP/IP, HTTP, HTML, etc.

### Example 2

* Let's start with an example class `Robot`, that uses an antenna object for sending information to a remote location.

```java
// In Robot.java
public class Robot {
    private String model;
    private String serial;
    private Antenna antenna;

    public Robot(String model, String serial, double antennaLenghtInMeters){
        this.model = model;
        this.serial = serial;
        antenna = new Antenna(antennaLenghtInMeters);
    }

    public void sendRobotInformation(){
        String robotInfo = getRobotInformation();
        antenna.sendInformation(robotInfo);
    }

    private String getRobotInformation(){
        String robotInfo = String.format("Model: %s\nSerial: %s", model, serial);
//        Any extra steps for gathering/formatting info
        return robotInfo;
    }
//    Other methods

}

// In Antenna.java
public class Antenna {
    private int lengthInMeters;

    public Antenna(double lengthInMeters){
        lengthInMeters = lengthInMeters;
    }

    public void sendInformation(String information){
//      Code to send information using the antenna
        System.out.println(information);
    }
//  Other methods and important things
}
```

* This class has a big issue: it knows way too much about `Antenna`, creating a dependency towards the class. Any change in any of the following characteristics of `Antenna` will force Robot to change in response:
  * The name of the class
  * The arguments for the constructor
  * The name of the method for sending information
  * The arguments sendInformation requires

* Instead of instantiating `Antenna` on the `Robot`'s constructor we could *inject* it.

```java
// In Robot.Java
public class Robot {
    private String model;
    private String serial;
    private Antenna antenna;

    public Robot(String model, String serial, Antenna antenna){
        this.model = model;
        this.serial = serial;
        this.antenna = antenna;
    }

//    The other methods remain unchanged
//    Other methods

}

//Antenna remains unchanged

//In Main
Antenna antenna = new Antenna(7);
Robot robbie = new Robot("awesomebot", "awb-46465", antenna);
robbie.sendRobotInformation();
```

* This code is slightly better, as the responsibility of creating a new Antenna method doesn't belong to Robot, instead, it's injected by an outside source as a dependency.
* We can still do better. If you pay attention closely, there is a more subtle problem with the code: implicitly it tells you that `Robot` is only willing to work with an object of the `Antenna` class, where in reality, all it needs is an object that responds to the `sendInformation` message. This limits the flexibility robot objects have for sending information by tying that behavior to a concrete class.
* Instead, we can create an abstraction for the `sendInformation` behavior and let other classes implement it.

```java
// MessageSender.java will contain the interface that represents our abstraction for message sending
public interface MessageSender {
    public void sendInformation(String information);
}

// Robot now references the MessageSender type, instead of Antenna
public class Robot {
    private String model;
    private String serial;
    private MessageSender messageSender;

    public Robot(String model, String serial, MessageSender messageSender){
        this.model = model;
        this.serial = serial;
        this.messageSender = messageSender;
    }

    public void sendRobotInformation(){
        String robotInfo = getRobotInformation();
        messageSender.sendInformation(robotInfo);
    }
//    Other methods
}

//Antenna now implements MessageSender
public class Antenna implements  MessageSender {...}
```

* The advantage is that instead of depending on a concrete class (a volatile entity that is more likely to change), Robot will depend on an abstraction (a much more robust entity with less likelihood of change). `Robot` no longer cares about the implementation details of `Antenna`, like the fact it needed a `lengthInMeters`.
* We can now send robot information using other options. We can, for example, send messages using a wire that inverts the message. From the point of view of the Robot class, all it cares is that the new class implements the MessageSender interface.
  * This approach gives us much more flexibility, `Robot`'s options for sending messages are now easy to extend.

```java
// Inverter.java
public class InverterWire implements MessageSender{

    public InverterWire(){
    }

    public void sendInformation(String information){
//        Code for sending information using the antenna
        System.out.println(new StringBuilder(information).reverse().toString());
    }

//    Other methods and important things
}

// In Main
InverterWire wire = new InverterWire();
Robot robbie = new Robot("awesomebot", "awb-46465", wire);
robbie.sendRobotInformation();
```

* We just saw the dependency being injected when building a new Robot object, but it's not the only way to achieve DI. We can instead inject the dependency using a mutator method.

```java
public Robot(String model, String serial){
        this.model = model;
        this.serial = serial;
    }

    public void setMessageSender(MessageSender messageSender){
        this.messageSender = messageSender;
    }
```

## Resources

* [dwmkerr/hacker-laws: 💻📖 Laws, Theories, Principles and Patterns that developers will find useful. #hackerlaws](https://github.com/dwmkerr/hacker-laws#solid)
* [Single Responsibility Principle Explained * Web Dev Simplified](https://www.youtube.com/watch?v=UQqY3_6Epbg)
* [The Single Responsibility Principle * Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html)
* [The Single Responsibility Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=DAD2oMWDWNc)
* [Open/Closed Principle Explained * Web Dev Simplified](https://www.youtube.com/watch?v=-ptMtJAdj40)
* [The Open Closed Principle * Clean Coder Blog](https://blog.cleancoder.com/uncle-bob/2014/05/12/TheOpenClosedPrinciple.html)
* [The Open Closed Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=FW2poUaIq3w)
* [Liskov Substitution Principle Explained * Web Dev Simplified](https://www.youtube.com/watch?v=dJQMqNOC4Pc)
* [Liskov Substitution Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=Jecou7B3nhc&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=9)
* [Interface Segregation Principle Explained * Web Dev Simplified](https://www.youtube.com/watch?v=JVWZR23B_iE)
* [Dependency Inversion Principle Explained *SOLID Design Principles* YouTube](https://www.youtube.com/watch?v=9oHY5TllWaU)
* [The Interface Segregation Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=E9AU2JkVtoE&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=10)
* [The Dependency Inversion Principle | SOLID Principles | Code Like a Pro with Dylan Israel](https://www.youtube.com/watch?v=RS6XHQp_5F8&list=PLHdCowjFIBmJIlQAnIp8ZTTUmgwoN5L1N&index=11)
* [SOLID Principles * YouTube](https://www.youtube.com/playlist?list=PL4CE9F710017EA77A)
* [S.O.L.I.D design principles for everyone : learnprogramming](https://old.reddit.com/r/learnprogramming/comments/cr3m01/solid_design_principles_for_everyone/)
* [The Single Responsibility Principle](https://www.brainstobytes.com/the-single-responsibility-principle/)
* [The Open/Closed Principle](https://www.brainstobytes.com/the-open-closed-principle/)
* [The Liskov Substitution Principle](https://www.brainstobytes.com/the-liskov-substitution-principle/)
* [The Interface Segregation Principle](https://www.brainstobytes.com/interface-segregation-principle/)
* [Dependency Injection and the famous DIP](https://www.brainstobytes.com/dependency-injection/)

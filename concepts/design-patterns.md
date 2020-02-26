# Design Patterns

* [Design Patterns](#design-patterns)
  * [Module & Module Revealing Patterns](#module--module-revealing-patterns)
  * [Singleton Pattern](#singleton-pattern)
  * [Factory Pattern](#factory-pattern)
  * [Observer Pattern](#observer-pattern)
  * [Mediator Pattern](#mediator-pattern)
  * [State Pattern](#state-pattern)
  * [Decorator Pattern](#decorator-pattern)
  * [Resources](#resources)

* **Design patterns**: re-usable solution that can be applied to ocurring problems in software design (like programming templates).

## Module & Module Revealing Patterns

* Used for overall structure.
* Breaks up code into modules.
* Allows us to have private and public functions and variables.

```javascript
// Basic structure
(function() {
    //Declare private variables and functions

    return {
        // Declare public variables and functions
    }
})() // IEF: functions is immediately executed
```

* Example:

```javascript
// STANDARD MODULE PATTERN
const UICtrl = (function() {
    let text = 'Hello World'

    const changeText = function() {
        const element = document.querySelector('h1')
        element.textContent = text
    }

    return {
        callChangeText: function() {
            changeText()
            // console.log(text)
        }
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    const data = [];

    function add(item) {
        data.push(item);
        console.log('Item Added....');
    }

    function get(id) {
        return data.find(item => {
        return item.id === id;
        });
    }

    return {
        add: add,
        // get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(2));
```

## Singleton Pattern

* Manifestation of the Module Revealing Pattern.
* Create only 1 instance of an object.
* **Singleton object**: an *immediate anonymous function* that can only return one instance of an object at a time.
  * Has private/public variables and methods.
  * Example: only one user object created at a time.

```javascript
const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({ name:'Brad' });
        return object;
    }

    return {
        getInstance: function() {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // it will be the same instance
// console.log(instanceA);
```

## Factory Pattern

* Used to create many objects.
* A way of creating an *interface* for creating objects, allowing subclasses to define which classes to instantiate.
* Use for different objects with common characteristics.
* Example: in a website we can have multiple members types, but all still be members with common characteristics.

```javascript
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if (type === 'standard') {
            member = new StandardMembership(name);
        } else if (type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define =  function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members);

members.forEach(function(member) {
    member.define();
});
```

## Observer Pattern

* *Subscribe* and *unsubscribe* to *events*.
* Allows *subjects* to subscribe and be notified about the events of a *subject* (`1-to-many` relationship).
* Uses *callbacks* and *listeners*.
* Observables are independent of each other.
* Example:

```javascript
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
          if(item !== fn) {
              return item;
          }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

// Click Handler
const getCurMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}
```

## Mediator Pattern

* A mediator class handles the communication between different classes, *decoupling* the relationship.
* Has a central *mediator* and then it has *colleagues* that separate off from it.
* The *mediator* communicates with its *colleagues*.
* Example: a chat room.

```javascript
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to) {
        this.chatroom.send(message, this, to);
    },
    recieve: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // Single user message
                to.recieve(message, from);
            } else {
                // Mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].recieve(message, from);
                    }
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hello Everyone!!!!');
```

```java
// Mediator class
import java.util.Date;

public class ChatRoom {
   public static void showMessage(User user, String message){
      System.out.println(new Date().toString() + " [" + user.getName() + "] : " + message);
   }
}

// User class
public class User {
   private String name;

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public User(String name){
      this.name  = name;
   }

   public void sendMessage(String message){
      ChatRoom.showMessage(this,message);
   }
}

// User class
public class MediatorPatternDemo {
   public static void main(String[] args) {
      User robert = new User("Robert");
      User john = new User("John");

      robert.sendMessage("Hi! John!");
      john.sendMessage("Hello! Robert!");
   }
}
```

## State Pattern

* Allows the application to have a certain *state* and modify it.
* A `class` changes its behaviour based on its state.
* Objects represent various states and we have a `context` object whose behaviour changes based on the objects state.
* Examples: React component state.

```javascript
const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// Home State
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    `;
};

// About State
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'About Us';
    document.querySelector('#content').innerHTML = `
        <p>This is the about page</p>
    `;
};

// Contact State
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'Contact Us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    `;
};

// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();

// UI Vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e) => {
    page.change(new homeState);

    e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
    page.change(new aboutState);

    e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
    page.change(new contactState);

    e.preventDefault();
});
```

## Decorator Pattern

* Allows the user to *extend* functionality to an existing object without altering it.
* Creates a `decorator` class that *wraps* the original class and provides additional functionality.
* Examples: TypeScript decorators, MobX `@observable`.

```java
// Shape.java
public interface Shape {
   void draw();
}

// Create concrete classes implementing the same interface.

// Rectangle.java
public class Rectangle implements Shape {
   @Override
   public void draw() {
      System.out.println("Shape: Rectangle");
   }
}

// Circle.java
public class Circle implements Shape {
   @Override
   public void draw() {
      System.out.println("Shape: Circle");
   }
}

// Create abstract decorator class implementing the Shape interface.

// ShapeDecorator.java
public abstract class ShapeDecorator implements Shape {
   protected Shape decoratedShape;

   public ShapeDecorator(Shape decoratedShape){
      this.decoratedShape = decoratedShape;
   }

   public void draw(){
      decoratedShape.draw();
   }
}

// Create concrete decorator class extending the ShapeDecorator class.

// RedShapeDecorator.java
public class RedShapeDecorator extends ShapeDecorator {
   public RedShapeDecorator(Shape decoratedShape) {
      super(decoratedShape);
   }

   @Override
   public void draw() {
      decoratedShape.draw();
      setRedBorder(decoratedShape);
   }

   private void setRedBorder(Shape decoratedShape){
      System.out.println("Border Color: Red");
   }
}

// Use the RedShapeDecorator to decorate Shape objects.

// DecoratorPatternDemo.java

public class DecoratorPatternDemo {
   public static void main(String[] args) {
      Shape circle = new Circle();

      Shape redCircle = new RedShapeDecorator(new Circle());

      Shape redRectangle = new RedShapeDecorator(new Rectangle());
      System.out.println("Circle with normal border");
      circle.draw();

      System.out.println("\nCircle of red border");
      redCircle.draw();

      System.out.println("\nRectangle of red border");
      redRectangle.draw();
   }
}
```

## Resources

* [Software design pattern - Wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern#Classification_and_list)
* [Composition over inheritance - Wikipedia](https://en.wikipedia.org/wiki/Composition_over_inheritance)
* [Design Patterns - Wikipedia](https://en.wikipedia.org/wiki/Design_Patterns)
* [Design Patterns - Observer Pattern - Tutorialspoint](https://www.tutorialspoint.com/design_pattern/observer_pattern.htm)
* [Design Patterns - State Pattern - Tutorialspoint](https://www.tutorialspoint.com/design_pattern/state_pattern.htm)
* [Design Patterns - Decorator Pattern - Tutorialspoint](https://www.tutorialspoint.com/design_pattern/decorator_pattern.htm)
* [Design Patterns - Mediator Pattern - Tutorialspoint](https://www.tutorialspoint.com/design_pattern/mediator_pattern.htm)
* [React Hooks and the “Observer” Pattern - JavaScript in Plain English - Medium](https://medium.com/javascript-in-plain-english/react-hooks-and-the-observer-pattern-1e4274f0e5f5)

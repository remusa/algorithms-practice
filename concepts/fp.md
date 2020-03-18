# Functional Programming

## Immutability

* **Immutability**: data isn't changed. Functions change data. You pass some data in, you get some new data back.

## Purity

* **Purity**: When you write a function that takes in the data it requires to perform and hands back an expected result – this is called a *pure* function. If that code, however, calls out to a database or perhaps refers to a setting somewhere else (being aware of anything outside its scope) – that's an *impure* function because it requires something other than the arguments you pass to it (in this case, a database). That's called a *side effect*.

## Side Effects

* **Side Effects**: each function does a specific thing and relies solely on the parameters given to it. Values in, values out – and that's it. You can't tweak an internal setting, you can't change any state from within the function. These tweaks and changes are called *Side Effects* – literally just changing something. So in conversation when you say “immutable” you're also saying “no side effects” – it's the same thing.

## Currying

* **Currying**: small functions that are sequenced together.

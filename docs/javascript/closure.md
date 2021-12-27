# Closure

## Functions with memory

- When our functions get called, we create a live store of data(local memory/ variable envirronement/ state)
- When the function finishes executing, its local memory is deleted(except the returned value)
- What if we could hold on data between execution, have an associated cache/permanent memory to these functions.

Define a function inside another function allows to do just that:  

```js
function outer(){
    let counter = 0;
    function incrementCounter(){
        if(counter>0){
            return "You can't run me more than once"
        }
        counter++;
    }
    return incrementCounter
}
const myNewFunction = outer();
myNewFunction(); // undefined
myNewFunction(); // "You can't run me more than once"
```

Using this syntax, myNewFunction bring with him a "backpack" of data: the local memory in which he was defined. We can access the `counter` inside myNewFunction but not outside.

However, any variable that is not referenced by the function will not be added to the backpack. This is to prevent memory leak because the `uselessCounter` variable can't be acces directly in the global scope and isn't either by `myNewFunction`. Therefore, there is no point in keeping it in memory.

```js
function outer(){
    let counter = 0;
    let uselessCounter = 69;
    function incrementCounter(){
        if(counter>0){
            return "You can't run me more than once"
        }
        counter++;
    }
    return incrementCounter
}
const myNewFunction = outer();
```

### What do we call the backpack

- Closed Over Variable Environment (COVE)
- Persistent Lexical Scope Referenced Data (PLSRD)
- Closure

### Individual Backpack

if we run `outer` again and store the returned `incrementCounter` function definition in `anotherFunction`, this new function was created in a new execution context and therefore has a brand new backpack (how lucky!)

**Closure gives our functions persistent memories**

## Practical applications

- **helper function like `once`** that can only be runned once (end of game logic to trigger only once,...)
- **helper function like `memoize`**, we keep the result of a heavy computation inside a dictionnary in the backpack (getNthPrimenumber(127) -> put in the backpack so that it's not computed again next time but just looked up)
- **Iterators** and **generators** are relying on closureto work

## External resources

- [Javascript: The hard parts, v2](https://frontendmasters.com/courses/javascript-hard-parts-v2/closure-introduction/)

# Modern JavaScript Cheatsheet

![Modern JavaScript cheatsheet](https://i.imgur.com/aexPxMb.png)

> Widely inspired from meaudru [Modern JavaScript Cheatsheet](https://github.com/mbeaudru/modern-js-cheatsheet) with some alterations.

## Introduction

### Motivation

This document is a cheatsheet for JavaScript you will frequently encounter in modern projects and most contemporary sample code.

This guide is not intended to teach you JavaScript from the ground up, but to help developers with basic knowledge who may struggle to get familiar with modern codebases (or let's say to learn React for instance) because of the JavaScript concepts used.

Besides, I will sometimes provide personal tips that may be debatable but will take care to mention that it's a personal recommendation when I do so.

> **Note:** Most of the concepts introduced here are coming from a JavaScript language update (ES2015, often called ES6). You can find new features added by this update [here](http://es6-features.org); it's very well done.

### Table of Contents

* [Variable declaration: var, const, let](../variable_decl)

    * [Short explanation](../variable_decl/#short-explanation)
    * [Sample code](../variable_decl/#sample-code)
    * [Detailed explanation](../variable_decl/#detailed-explanation)
    * [External resource](../variable_decl/#external-resource)

* [Arrow function](../arrow_function/#-arrow-function)
    + [Sample code](../arrow_function/#sample-code)
    + [Detailed explanation](../arrow_function/#detailed-explanation)
        - [Concision](../arrow_function/#concision)
        - [*this* reference](../arrow_function/#this-reference)
    + [Useful resources](../arrow_function/#useful-resources)

+ [Function default parameter value](../function_default/#function-default-parameter-value)
    - [External resource](../function_default/#external-resource)

+ [Destructuring objects and arrays](../destructuring/#destructuring-objects-and-arrays)
    - [Explanation with sample code](../destructuring/#explanation-with-sample-code)
    - [Useful resources](../destructuring/#useful-resources)

+ [Array methods - map / filter / reduce](../array_methods/#array-methods---map--filter--reduce)
    - [Sample code](../array_methods/#sample-code)
    - [Explanation](../array_methods/#explanation)
        * [Array.prototype.map()](../array_methods/#arrayprototypemap)
        * [Array.prototype.filter()](../array_methods/#arrayprototypefilter)
        * [Array.prototype.reduce()](../array_methods/#arrayprototypereduce)
        * [Array.prototype.find()](../array_methods/#arrayprototypefind)
    - [External Resource](../array_methods/#external-resource)

+ [Spread operator "..."](../spread_operator/#spread-operator-)
    - [Sample code](../spread_operator/#sample-code)
    - [Explanation](../spread_operator/#explanation)
        * [In iterables (like arrays)](../spread_operator/#in-iterables-like-arrays)
        * [Function rest parameter](../spread_operator/#function-rest-parameter)
        * [Object properties spreading](../spread_operator/#object-properties-spreading)
    - [External resources](../spread_operator/#external-resources)

+ [Object property shorthand](../object_ppt/#object-property-shorthand)
    - [Explanation](../object_ppt/#explanation)
    - [External resources](../object_ppt/#external-resources)

+ [Promises](../promises/#promises)
    - [Sample code](../promises/#sample-code)
    - [Explanation](../promises/#explanation)
        * [Create the promise](../promises/#create-the-promise)
        * [Promise handlers usage](../promises/#promise-handlers-usage)
    - [External Resources](../promises/#external-resources)

+ [Template literals](../template_literals/#template-literals)
    - [Sample code](../template_literals/#sample-code)
    - [External resources](../template_literals/#external-resources)

+ [Tagged Template Literals](../template_literals/#tagged-template-literals)
    - [External resources](../template_literals/#external-resources-2)

+ [Imports / Exports](../import_export/#imports--exports)
    - [Explanation with sample code](../import_export/#explanation-with-sample-code)
        * [Named exports](../import_export/#named-exports)
        * [Default import / export](../import_export/#default-import--export)
    - [External resources](../import_export/#external-resources)

+ [JavaScript *this*](../this/#-javascript-this)
    - [External resources](../this/#external-resources)

+ [Class](../class/#class)
    - [Samples](../class/#samples)
    - [External resources](../class/#external-resources)

+ [Extends and super keywords](../extend_super/#extends-and-super-keywords)
    - [Sample Code](../extend_super/#sample-code)
    - [External Resources](../extend_super/#external-resources)

+ [Async Await](../async/#async-await)
    - [Sample code](../async/#sample-code)
    - [Explanation with sample code](../async/#explanation-with-sample-code)
    - [Error handling](../async/#error-handling)
    - [External resources](../async/#external-resources)

+ [Truthy / Falsy](../truthy/#truthy--falsy)
    - [External resources](../truthy/#external-resources)

+ [Anamorphisms / Catamporphisms](../anamorphisms/#anamorphisms-and-catamorphisms)
    - [Anamorphisms](../anamorphisms/#anamorphisms)
    - [Catamorphisms](../anamorphisms/#catamorphisms)
    - [External resources](../anamorphisms/#external-resources)

+ [Generators](../generators/#generators)
    - [External resources](../generators/#external-resources)

+ [Static Methods](../static_method/#static-methods)
    - [Short Explanation](../static_method/#short-explanation)
    - [Sample Code](../static_method/#sample-code)
    - [Detailed Explanation](../static_method/#detailed-explanation)
        * [Calling other static methods from a static method](../static_method/#calling-other-static-methods-from-a-static-method)
        * [Calling static methods from non-static methods](../static_method/#calling-static-methods-from-non-static-methods)
    - [External resources](../static_method/#external-resources)

+ [Glossary](#glossary)
    - [Scope](#scope)
    - [Variable mutation](#variable-mutation)

### Complementary Resources

When you struggle to understand a notion, I suggest you look for answers on the following resources:

- [MDN (Mozilla Developer Network)](https://developer.mozilla.org/en-US/search?q=)
- [You don't know JS (book)](https://github.com/getify/You-Dont-Know-JS)
- [Eloquent JavaScript (book)](https://eloquentjavascript.net)
- [Douglas Crockford's blog](https://www.crockford.com/javascript/)
- [ES6 Features with examples](http://es6-features.org)
- [Wes Bos blog (ES6)](http://wesbos.com/category/es6/)
- [Javascript Basics for Beginners](https://www.udacity.com/course/javascript-basics--ud804) - a free Udacity course
- [Reddit (JavaScript)](https://www.reddit.com/r/javascript/)
- [Google](https://www.google.com/) to find specific blog and resources
- [StackOverflow](https://stackoverflow.com/questions/tagged/javascript)

## Glossary

### <a name="scope_def"></a> Scope

The context in which values and expressions are "visible," or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use.

Source: [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Scope)

### <a name="mutation_def"></a> Variable mutation

A variable is said to have been mutated when its initial value has changed afterward.

```js
var myArray = [];
myArray.push("firstEl") // myArray is being mutated
```

A variable is said to be *immutable* if it can't be mutated.

[Check MDN Mutable article](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) for more details.

// src/data/concepts.js

 
const concepts = [
    {
      id: 1,
      title: "Why is JavaScript Single-Threaded?",
      description: "JavaScript is single-threaded because it uses a single call stack to execute code. This design simplifies concurrency management, ensuring that only one task runs at a time, preventing race conditions and making debugging easier.",
      example: `// Example of single-threaded nature
  console.log("Task 1");
  setTimeout(() => console.log("Task 2"), 1000);
  console.log("Task 3");
  // Output: Task 1, Task 3, Task 2`,
    },
    {
      id: 2,
      title: "CORS Issues from the Front End",
      description: "CORS (Cross-Origin Resource Sharing) restricts web applications from making requests to a different domain than the one that served the web page unless the server explicitly allows it. This is a security feature to prevent malicious activities.",
      example: `// Example of a CORS error
  // Frontend request
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('CORS Error:', error));
  // Error: Access to fetch at 'https://api.example.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy.`,
    },
    {
      id: 3,
      title: "Difference Between Async, Await, and Promises",
      description: "Promises represent the eventual completion or failure of an asynchronous operation. `async` and `await` are syntactic sugar built on top of promises that allow writing asynchronous code in a more synchronous manner.",
      example: `// Using Promises
  const getData = () => Promise.resolve('Data fetched');
  getData().then(data => console.log(data));
  
  // Using async/await
  async function fetchData() {
    const data = await getData();
    console.log(data);
  }
  fetchData(); // Output: Data fetched`,
    },
    {
      id: 4,
      title: "Can We Create an Async Function Without Using Await?",
      description: "Yes, you can create an async function without using `await`. However, without `await`, the function will not pause execution and will return a promise immediately.",
      example: `async function asyncFunc() {
    return "Hello";
  }
  asyncFunc().then(response => console.log(response)); // Output: Hello`,
    },
    {
      id: 5,
      title: "Call Stack",
      description: "The call stack is a data structure that keeps track of the execution context in JavaScript. It manages function invocations and ensures that functions execute in the correct order.",
      example: `function a() {
    b();
  }
  function b() {
    console.log("In function B");
  }
  a(); // Call stack: a -> b`,
    },
    {
      id: 6,
      title: "Web APIs",
      description: "Web APIs are browser-provided interfaces that allow JavaScript to interact with the browser and perform tasks like making HTTP requests, manipulating the DOM, and handling timers.",
      example: `// Using Web API setTimeout
  setTimeout(() => console.log("Web API example"), 1000); // Logs after 1 second`,
    },
    {
      id: 7,
      title: "Micro Tasks",
      description: "Microtasks are tasks like promise callbacks that are executed after the current operation but before the next event loop tick. They have higher priority than macrotasks.",
      example: `Promise.resolve().then(() => console.log("Microtask"));
  console.log("Main task");
  // Output: Main task, Microtask`,
    },
    {
      id: 8,
      title: "Macro Tasks",
      description: "Macrotasks include events like `setTimeout`, `setInterval`, and I/O operations. They are handled after all microtasks have been executed in the event loop.",
      example: `setTimeout(() => console.log("Macrotask"), 0);
  Promise.resolve().then(() => console.log("Microtask"));
  // Output: Microtask, Macrotask`,
    },
    {
      id: 9,
      title: "Event Loop",
      description: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by handling asynchronous callbacks. It continuously checks the call stack and the task queues to execute tasks.",
      example: `console.log("1");
  setTimeout(() => console.log("2"), 0);
  console.log("3");
  // Output: 1, 3, 2`,
    },
    {
      id: 10,
      title: "Promise, Callbacks, Synchronous, Asynchronous, Await",
      description: `
  - **Promises**: Objects representing the future result of an asynchronous operation.
  - **Callbacks**: Functions passed as arguments to be executed after a task completes.
  - **Synchronous**: Code that runs sequentially, blocking further execution until complete.
  - **Asynchronous**: Code that runs independently of the main execution thread.
  - **Await**: Pauses async function execution until a promise resolves.
  `,
      example: `// Callback Example
  function callbackExample(cb) {
    setTimeout(() => cb("Done"), 1000);
  }
  callbackExample(console.log); // "Done" after 1 second
  
  // Promise Example
  const promise = new Promise((resolve) => resolve("Promise Resolved"));
  promise.then(console.log); // "Promise Resolved"
  
  // Async/Await Example
  async function asyncFunc() {
    const result = await promise;
    console.log(result); // "Promise Resolved"
  }
  asyncFunc();`,
    },
    {
      id: 11,
      title: "Event-Driven Model",
      description: "The event-driven model executes code in response to events such as user interactions, system events, or messages from other programs. It allows for asynchronous and non-blocking operations.",
      example: `// Event-driven example with button click
  document.getElementById('myButton').addEventListener('click', () => {
    console.log("Button was clicked!");
  });`,
    },
    {
      id: 12,
      title: "What is Global Execution?",
      description: "The global execution context is the default context where JavaScript code runs when it starts. It encompasses global variables and functions and is the first execution context created.",
      example: `// Global execution context
  var x = 10;
  function greet() {
    console.log("Hello");
  }
  greet(); // Accessed from global context`,
    },
    {
      id: 13,
      title: "JS Execution Contexts",
      description: "JavaScript creates an execution context for every function invocation, handling variable scoping, hoisting, and closures. It manages the environment in which the code is executed.",
      example: `function first() {
    var a = 1;
    second();
  }
  function second() {
    var b = 2;
  }
  first();
  // Execution contexts: global -> first -> second`,
    },
    {
      id: 14,
      title: "What is Lexical Scoping?",
      description: "Lexical scoping refers to the accessibility of variables based on their physical placement within the nested function scopes in the code. JavaScript determines variable scope at compile time.",
      example: `function outer() {
    let x = 10;
    function inner() {
      console.log(x); // Lexical scope
    }
    inner();
  }
  outer(); // Output: 10`,
    },
    {
      id: 15,
      title: "Scope Chaining",
      description: "Scope chaining is the process of searching for variables in the current scope and moving outward to parent scopes until the variable is found or the global scope is reached.",
      example: `let globalVar = "Global";
  
  function outer() {
    let outerVar = "Outer";
    function inner() {
      let innerVar = "Inner";
      console.log(innerVar); // Inner
      console.log(outerVar); // Outer
      console.log(globalVar); // Global
    }
    inner();
  }
  outer();`,
    },
    {
      id: 16,
      title: "What is Hoisting?",
      description: "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their containing scope during the compilation phase, allowing them to be used before they are declared.",
      example: `// Variable Hoisting
  console.log(a); // undefined
  var a = 5;
  
  // Function Hoisting
  greet(); // "Hello"
  function greet() {
    console.log("Hello");
  }`,
    },
    {
      id: 17,
      title: "What is a Temporal Dead Zone?",
      description: "The Temporal Dead Zone (TDZ) is the period between entering a scope and the actual declaration of a variable with `let` or `const`. Accessing the variable before its declaration results in a `ReferenceError`.",
      example: `console.log(a); // ReferenceError
  let a = 5;`,
    },
    {
      id: 18,
      title: "What is Closure?",
      description: "A closure is a function that retains access to its outer scope even after the outer function has finished executing. This allows the inner function to access variables from the outer function.",
      example: `function outer() {
    let count = 0;
    return function inner() {
      count++;
      console.log(count);
    };
  }
  const increment = outer();
  increment(); // 1
  increment(); // 2`,
    },
    {
      id: 19,
      title: "What is a Callback Function?",
      description: "A callback function is a function passed as an argument to another function, which is then invoked inside the outer function to complete some action or operation.",
      example: `function greet(name, callback) {
    callback(name);
  }
  greet("John", (name) => console.log("Hello " + name)); // Hello John`,
    },
    {
      id: 20,
      title: "What is Callback Hell?",
      description: "Callback hell refers to the situation where multiple nested callback functions make the code hard to read and maintain. It often leads to deeply indented code structures.",
      example: `// Callback Hell example
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        console.log("Nested Hell");
      }, 1000);
    }, 1000);
  }, 1000);`,
    },
    {
      id: 21,
      title: "What is a Syntax Error?",
      description: "A syntax error occurs when JavaScript code violates the language's grammatical rules, preventing the code from being parsed and executed.",
      example: `// Syntax Error example
  console.log("Hello world" // Missing closing parenthesis`,
    },
    {
      id: 22,
      title: "What is a ReferenceError?",
      description: "A `ReferenceError` occurs when JavaScript tries to access a variable that hasn't been declared or is out of scope.",
      example: `console.log(a); // ReferenceError: a is not defined`,
    },
    {
      id: 23,
      title: "What is a TypeError?",
      description: "A `TypeError` occurs when a value is not of the expected type, such as trying to call a non-function or accessing a property of `undefined`.",
      example: `let num = 10;
  num(); // TypeError: num is not a function`,
    },
    {
      id: 24,
      title: "Runtime Error, Logical Error, and Different Types of Errors",
      description: `
  - **Runtime Error**: Errors that occur during the execution of the program, such as division by zero or accessing undefined variables.
  - **Logical Error**: Mistakes in the logic of the code that lead to incorrect results, even though the code runs without crashing.
  - **Syntax Error**: Errors in the code's syntax that prevent it from running.
  - **ReferenceError**: Accessing undeclared variables.
  - **TypeError**: Performing invalid operations on data types.
  `,
      example: `// Runtime Error
  function divide(a, b) {
    return a / b;
  }
  console.log(divide(10, 0)); // Infinity (could be considered a logical error)
  
  // Logical Error
  function add(a, b) {
    return a - b; // Incorrect operation
  }
  console.log(add(5, 3)); // 2 instead of 8`,
    },
    {
      id: 25,
      title: "Event Bubbling in JavaScript",
      description: "Event bubbling is the propagation of an event from the innermost target element to the outermost elements. It allows parent elements to handle events triggered by their child elements.",
      example: `// Event Bubbling example
  // HTML
  <div onclick="alert('Div clicked')">
    <button onclick="alert('Button clicked')">Click me</button>
  </div>
  // When the button is clicked, alerts: "Button clicked" then "Div clicked"`,
    },
    {
      id: 26,
      title: "Event Capturing in JavaScript",
      description: "Event capturing is the phase where an event starts from the outermost element and propagates inward to the target element. It is the opposite of event bubbling.",
      example: `// Event Capturing example
  document.querySelector('div').addEventListener('click', () => alert('Div'), true);
  document.querySelector('button').addEventListener('click', () => alert('Button'), true);
  // When the button is clicked, alerts: "Div" then "Button"`,
    },
    {
      id: 27,
      title: "Event Propagation in JavaScript",
      description: "Event propagation refers to the order in which event handlers are invoked during the event capturing and bubbling phases.",
      example: `// Event Propagation example
  // HTML
  <div id="parent">
    <button id="child">Click me</button>
  </div>
  
  // JavaScript
  document.getElementById('parent').addEventListener('click', () => console.log('Parent Clicked'), true); // Capturing
  document.getElementById('child').addEventListener('click', () => console.log('Child Clicked'), false); // Bubbling
  
  // Click on button logs:
  // "Parent Clicked" (capturing phase)
  // "Child Clicked" (target phase)`,
    },
    {
      id: 28,
      title: "What is an Immediately Invoked Function Expression (IIFE)?",
      description: "An IIFE is a function that is executed immediately after its definition. It helps in creating a new scope and avoiding polluting the global namespace.",
      example: `// IIFE example
  (function() {
    console.log("IIFE executed");
  })(); // Output: IIFE executed`,
    },
    {
      id: 29,
      title: "What is an Anonymous Function?",
      description: "An anonymous function is a function without a name, often used as a callback or immediately invoked. They are useful for short, one-time operations.",
      example: `// Anonymous function as a callback
  setTimeout(function() {
    console.log("Anonymous function executed");
  }, 1000); // Output after 1 second: Anonymous function executed`,
    },
    {
      id: 30,
      title: "Generator Function",
      description: "A generator function is a special type of function that can pause its execution and resume later, yielding multiple values over time.",
      example: `// Generator function example
  function* generatorFunc() {
    yield 1;
    yield 2;
  }
  const gen = generatorFunc();
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2`,
    },
    {
      id: 31,
      title: "JavaScript Pass by Reference and Pass by Value",
      description: `
  - **Pass by Value**: Primitive types (strings, numbers, booleans) are passed by value, meaning a copy is made.
  - **Pass by Reference**: Objects and arrays are passed by reference, meaning the original reference is used.
  `,
      example: `// Pass by Value
  let a = 5;
  let b = a;
  a = 10;
  console.log(b); // 5
  
  // Pass by Reference
  let obj1 = { x: 1 };
  let obj2 = obj1;
  obj1.x = 2;
  console.log(obj2.x); // 2`,
    },
    {
      id: 32,
      title: "Event Delegation in JavaScript",
      description: "Event delegation allows a single event handler to manage events for multiple child elements by attaching the handler to a common ancestor.",
      example: `// Event Delegation example
  // HTML
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
  </ul>
  
  // JavaScript
  document.getElementById('list').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
      console.log(e.target.textContent);
    }
  });
  // Clicking on any <li> logs its text content`,
    },
    {
      id: 33,
      title: "Difference Between a Method and a Function in JavaScript",
      description: "A **method** is a function that is a property of an object and is accessed using the dot operator. A **function** is an independent block of code.",
      example: `// Method
  const obj = {
    method() {
      console.log("Method called");
    }
  };
  obj.method(); // Output: Method called
  
  // Function
  function func() {
    console.log("Function called");
  }
  func(); // Output: Function called`,
    },
    {
      id: 34,
      title: "This Keyword in JavaScript",
      description: "The `this` keyword refers to the object that is executing the current function. Its value depends on how the function is called.",
      example: `const person = {
    name: 'John',
    greet() {
      console.log(this.name);
    }
  };
  person.greet(); // Output: John
  
  const greet = person.greet;
  greet(); // Output: undefined (or window.name in browsers)`,
    },
    {
      id: 35,
      title: "What is Prototype?",
      description: "A prototype is an object from which other objects inherit properties and methods. Every JavaScript object has a prototype, forming a prototype chain for inheritance.",
      example: `// Prototype example
  function Person(name) {
    this.name = name;
  }
  Person.prototype.greet = function() {
    console.log("Hello " + this.name);
  };
  const person1 = new Person("John");
  person1.greet(); // Output: Hello John`,
    },
    {
      id: 36,
      title: "Prototypal Inheritance in JavaScript",
      description: "Prototypal inheritance allows objects to inherit properties and methods from other objects through the prototype chain.",
      example: `const animal = {
    speak() {
      console.log("Animal speaks");
    }
  };
  
  const dog = Object.create(animal);
  dog.bark = function() {
    console.log("Dog barks");
  };
  
  dog.speak(); // Output: Animal speaks
  dog.bark();  // Output: Dog barks`,
    },
    {
      id: 37,
      title: "Prototype Chaining",
      description: "Prototype chaining is the mechanism by which JavaScript objects inherit properties from one another. If a property isn't found on an object, JavaScript looks up its prototype chain until it finds the property or reaches the end.",
      example: `// Prototype Chaining example
  const grandparent = {
    grandparentProp: "grandparent"
  };
  
  const parent = Object.create(grandparent);
  parent.parentProp = "parent";
  
  const child = Object.create(parent);
  child.childProp = "child";
  
  console.log(child.childProp); // child
  console.log(child.parentProp); // parent
  console.log(child.grandparentProp); // grandparent`,
    },
    {
      id: 38,
      title: "Array Methods",
      description: "JavaScript arrays come with built-in methods for manipulating and iterating over data, such as `.map()`, `.filter()`, `.reduce()`, and `.forEach()`.",
      example: `const arr = [1, 2, 3, 4];
  
  // map
  const doubled = arr.map(num => num * 2); // [2, 4, 6, 8]
  
  // filter
  const even = arr.filter(num => num % 2 === 0); // [2, 4]
  
  // reduce
  const sum = arr.reduce((acc, num) => acc + num, 0); // 10
  
  // forEach
  arr.forEach(num => console.log(num)); // Logs 1, 2, 3, 4`,
    },
    {
      id: 39,
      title: "Object Methods",
      description: "JavaScript provides several methods for working with objects, such as `Object.keys()`, `Object.values()`, and `Object.assign()`.",
      example: `const obj = { a: 1, b: 2 };
  
  // Object.keys()
  const keys = Object.keys(obj); // ['a', 'b']
  
  // Object.values()
  const values = Object.values(obj); // [1, 2]
  
  // Object.assign()
  const newObj = Object.assign({}, obj, { c: 3 }); // { a: 1, b: 2, c: 3 }`,
    },
    {
      id: 40,
      title: "When to Use bind vs call vs apply?",
      description: ` 
  - **call**: Immediately invokes a function with a specified "this" value and arguments provided individually.
  - **apply**: Similar to "call", but arguments are provided as an array.
  - **bind**: Returns a new function with a specified "this" value, without invoking it immediately.
  `,
      example: `const person = { name: 'John' };
  function greet(greeting, punctuation) {
    console.log(greeting + ' ' + this.name + punctuation);
  }
  
  // Using call
  greet.call(person, 'Hello', '!'); // Output: Hello John!
  
  // Using apply
  greet.apply(person, ['Hi', '?']); // Output: Hi John?
  
  // Using bind
  const greetJohn = greet.bind(person, 'Hey');
  greetJohn('.'); // Output: Hey John.`,
    },
    {
      id: 41,
      title: "JS Declaration, Initialization, and Assignment",
      description: `
  - **Declaration**: Creating a variable (e.g., "let x;").
  - **Initialization**: Assigning an initial value to a variable (e.g., "let x = 10;").
  - **Assignment**: Updating a variable's value after declaration (e.g., "x = 20;)".
  `,
      example: `// Declaration
  let x;
  
  // Initialization
  x = 10;
  
  // Assignment
  x = 20;
  console.log(x); // 20`,
    },
    {
      id: 42,
      title: "Let, Const, Var Scopes",
      description: `
  - **var**: Function-scoped, hoisted, can be redeclared and updated.
  - **let**: Block-scoped, not hoisted, can be updated but not redeclared in the same scope.
  - **const**: Block-scoped, not hoisted, cannot be updated or redeclared.
  `,
      example: `// var
  function varTest() {
    var x = 1;
    if (true) {
      var x = 2;
      console.log(x); // 2
    }
    console.log(x); // 2
  }
  varTest();
  
  // let
  function letTest() {
    let y = 1;
    if (true) {
      let y = 2;
      console.log(y); // 2
    }
    console.log(y); // 1
  }
  letTest();
  
  // const
  const z = 10;
  // z = 20; // TypeError: Assignment to constant variable.`,
    },
    {
      id: 43,
      title: "Pure Function and Impure Function",
      description: `
  - **Pure Function**: A function that always produces the same output given the same input and has no side effects.
  - **Impure Function**: A function that relies on external state or has side effects, making its output not solely dependent on its input.
  `,
      example: `// Pure Function
  function add(a, b) {
    return a + b;
  }
  
  // Impure Function
  let counter = 0;
  function increment() {
    counter++;
  }`,
    },
    {
      id: 44,
      title: "Three Phases of Event Propagation",
      description: `
  1. **Capturing Phase**: The event propagates from the root down to the target element.
  2. **Target Phase**: The event reaches the target element.
  3. **Bubbling Phase**: The event bubbles up from the target element back to the root.
  `,
      example: `// Event Propagation example
  // HTML
  <div id="parent">
    <button id="child">Click me</button>
  </div>
  
  // JavaScript
  document.getElementById('parent').addEventListener('click', () => console.log('Parent Clicked'), true); // Capturing
  document.getElementById('child').addEventListener('click', () => console.log('Child Clicked'), false); // Bubbling
  
  // Clicking on button logs:
  // "Parent Clicked" (capturing phase)
  // "Child Clicked" (target phase)`,
  
    },
    {
      id: 45,
      title: "Debounce and Throttling Concepts",
      description: `
  - **Debounce**: Ensures a function is only called after a certain amount of time has passed since the last invocation. Useful for scenarios like search input where you wait for the user to stop typing.
  - **Throttle**: Ensures a function is called at most once in a specified time frame. Useful for scenarios like scrolling where you want to limit the frequency of function calls.
  `,
      example: `// Debounce Example
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }
  const debouncedFunc = debounce(() => console.log("Debounced"), 1000);
  window.addEventListener('resize', debouncedFunc);
  
  // Throttle Example
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      if (!lastRan) {
        func.apply(this, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if ((Date.now() - lastRan) >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  const throttledFunc = throttle(() => console.log("Throttled"), 1000);
  window.addEventListener('scroll', throttledFunc);`,
    },
    {
      id: 46,
      title: "What is React?",
      description: "React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state efficiently.",
      example: `// Simple React component
  import React from 'react';
  
  function App() {
    return <h1>Hello, React!</h1>;
  }
  
  export default App;`,
    },
    {
      id: 47,
      title: "Difference Between ES6 and ES5",
      description: "ES6 (ECMAScript 2015) introduced new features like arrow functions, classes, modules, template literals, destructuring, `let`/`const`, and more. ES5 lacked these modern features and primarily used `var` for variable declarations.",
      example: `// ES5 Function
  var add = function(a, b) {
    return a + b;
  };
  
  // ES6 Arrow Function
  const add = (a, b) => a + b;`,
    },
    {
      id: 48,
      title: "Synthetic Event in React",
      description: "React uses a synthetic event system that wraps native browser events to provide cross-browser compatibility and performance optimizations. Synthetic events are pooled for efficiency.",
      example: `// Synthetic Event example
  function handleClick(event) {
    console.log(event.type); // 'click'
  }
  
  function App() {
    return <button onClick={handleClick}>Click Me</button>;
  }`,
    },
    {
      id: 49,
      title: "How to Optimize React Code",
      description: "React code can be optimized by preventing unnecessary re-renders, using memoization techniques, code-splitting, lazy loading components, and leveraging React's built-in optimization hooks like `React.memo`, `useMemo`, and `useCallback`.",
      example: `// Using React.memo to prevent unnecessary re-renders
  import React from 'react';
  
  const Child = React.memo(function Child({ value }) {
    console.log("Child Rendered");
    return <div>{value}</div>;
  });
  
  function App() {
    const [count, setCount] = React.useState(0);
    return (
      <div>
        <Child value="I am a child component" />
        <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      </div>
    );
  }`,
    },
    {
      id: 50,
      title: "Strict Mode in React",
      description: "`React.StrictMode` is a tool for highlighting potential problems in an application. It activates additional checks and warnings for its descendants, helping developers identify unsafe lifecycles, legacy API usage, and more.",
      example: `// Using StrictMode
  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );`,
    },
    {
      id: 51,
      title: "Code Splitting in React and How It Improves Performance",
      description: "Code splitting breaks down the application into smaller bundles that can be loaded on demand. This reduces the initial load time by only loading the necessary code for the current view, improving performance.",
      example: `// Code Splitting with React.lazy and Suspense
  import React, { Suspense, lazy } from 'react';
  
  const LazyComponent = lazy(() => import('./LazyComponent'));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  
  export default App;`,
    },
    {
      id: 52,
      title: "Error Boundaries in React with Example",
      description: "Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of the crashed component tree.",
      example: `// Error Boundary Component
  import React from 'react';
  
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("ErrorBoundary caught an error", error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  
  // Using ErrorBoundary
  function App() {
    return (
      <ErrorBoundary>
        <ComponentThatMayThrow />
      </ErrorBoundary>
    );
  }`,
    },
    {
      id: 53,
      title: "Common Pitfalls When Using React Hooks and How to Avoid Them",
      description: `
  - **Missing Dependencies in useEffect**: Always include all necessary dependencies in the dependency array to avoid stale closures.
  - **Using Hooks Conditionally**: Hooks should be called at the top level of the component, not inside conditions or loops.
  - **Mutating State Directly**: Always use state updater functions to modify state without mutating it directly.
  - **Overusing useState**: Sometimes it's better to manage related state together using "useReducer".
  `,
      example: `// Correct usage of useEffect with dependencies
  useEffect(() => {
    // Effect code
  }, [dependency1, dependency2]);
  
  // Avoid conditional hooks
  // Incorrect
  if (condition) {
    useEffect(() => { /* ... */ }, []);
  }
  
  // Correct
  useEffect(() => {
    if (condition) {
      // ...
    }
  }, [condition]);`,
    },
    {
      id: 54,
      title: "React Fiber Architecture",
      description: "React Fiber is a reimplementation of React's core algorithm, introducing incremental rendering, prioritizing updates, and enabling features like suspense and concurrent mode. It improves the performance and responsiveness of React applications.",
      example: `// Fiber architecture is internal to React and not directly exposed to developers.
  // However, understanding that React can interrupt and resume rendering helps in optimizing components.`,
    },
    {
      id: 55,
      title: "React Suspense and Concurrent Mode",
      description: `
  - **React Suspense**: Allows components to "wait" for something before rendering, such as data fetching, by showing fallback content.
  - **Concurrent Mode**: Enables React to prepare multiple versions of the UI at the same time, making the app more responsive by prioritizing updates.
  `,
      example: `// React Suspense example with lazy loading
  import React, { Suspense, lazy } from 'react';
  
  const LazyComponent = lazy(() => import('./LazyComponent'));
  
  function App() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    );
  }
  
  export default App;`,
    },
    {
      id: 56,
      title: "What is SPA (Single Page Application)?",
      description: "A Single Page Application (SPA) is a web application that loads a single HTML page and dynamically updates the content as the user interacts with the app, without refreshing the entire page. This provides a seamless and responsive user experience.",
      example: `// React is commonly used to build SPAs
  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import Home from './Home';
  import About from './About';
  
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;`,
    },
    {
      id: 57,
      title: "What is JSX?",
      description: "JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript. It makes writing React components more intuitive and resembles the structure of the final UI.",
      example: `// JSX example
  function App() {
    return (
      <div>
        <h1>Hello, JSX!</h1>
        <p>This is a paragraph.</p>
      </div>
    );
  }`,
    },
    {
      id: 58,
      title: "className vs class in React",
      description: "In React, `className` is used instead of `class` to define CSS classes on elements because `class` is a reserved keyword in JavaScript.",
      example: `// Correct usage in React
  function App() {
    return <div className="container">Hello, World!</div>;
  }
  
  // Incorrect usage (will cause errors)
  function App() {
    return <div class="container">Hello, World!</div>;
  }`,
    },
    {
      id: 59,
      title: "How to Swap Values Without Using a Third Variable",
      description: "Values can be swapped without a third variable by using arithmetic operators or destructuring assignment in JavaScript.",
      example: `// Using Arithmetic Operators
  let a = 5, b = 10;
  a = a + b; // a = 15
  b = a - b; // b = 5
  a = a - b; // a = 10
  console.log(a, b); // 10, 5
  
  // Using Destructuring (ES6)
  let x = 5, y = 10;
  [x, y] = [y, x];
  console.log(x, y); // 10, 5`,
    },
    {
      id: 60,
      title: "Interceptors in Custom Hooks",
      description: "Interceptors in custom hooks, especially with libraries like Axios, allow you to intercept and modify requests or responses globally before they are handled by the application.",
      example: `// Custom hook with Axios interceptors
  import { useEffect } from 'react';
  import axios from 'axios';
  
  function useAxiosInterceptors() {
    useEffect(() => {
      const requestInterceptor = axios.interceptors.request.use(config => {
        // Modify request config
        config.headers['Authorization'] = 'Bearer token';
        return config;
      }, error => Promise.reject(error));
  
      const responseInterceptor = axios.interceptors.response.use(response => response, error => {
        // Handle response errors
        return Promise.reject(error);
      });
  
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, []);
  }
  
  export default useAxiosInterceptors;`,
    },
    {
      id: 61,
      title: "What is an Atomic Design Pattern?",
      description: "Atomic design is a methodology for creating design systems by breaking down UI components into smaller, reusable parts called atoms, molecules, organisms, templates, and pages.",
      example: `
  - **Atoms**: Basic building blocks like buttons, inputs.
  - **Molecules**: Combinations of atoms, like a form group.
  - **Organisms**: Complex components composed of molecules and atoms, like a header.
  - **Templates**: Page-level structures that define layout.
  - **Pages**: Specific instances of templates with real content.
  `,
    },
    {
      id: 62,
      title: "Lifting the State Up in React",
      description: "Lifting state up involves moving shared state to the nearest common ancestor of the components that need access to it. This allows multiple components to share and synchronize state.",
      example: `// Lifting state up example
  import React, { useState } from 'react';
  
  function Parent() {
    const [value, setValue] = useState('');
  
    return (
      <div>
        <ChildInput value={value} onChange={setValue} />
        <ChildDisplay value={value} />
      </div>
    );
  }
  
  function ChildInput({ value, onChange }) {
    return <input value={value} onChange={(e) => onChange(e.target.value)} />;
  }
  
  function ChildDisplay({ value }) {
    return <p>{value}</p>;
  }`,
    },
    {
      id: 63,
      title: "What are Props in React?",
      description: "Props (short for properties) are inputs to React components. They are used to pass data from parent to child components, making components reusable and dynamic.",
      example: `// Using props in React
  function Greeting({ message }) {
    return <h1>{message}</h1>;
  }
  
  function App() {
    return <Greeting message="Hello, Props!" />;
  }`,
    },
    {
      id: 64,
      title: "What is Prop Drilling?",
      description: "Prop drilling refers to the process of passing data from a parent component through multiple intermediate components to reach a deeply nested child component that needs the data.",
      example: `// Prop Drilling example
  function Grandparent() {
    const data = "Drilled Prop";
    return <Parent data={data} />;
  }
  
  function Parent({ data }) {
    return <Child data={data} />;
  }
  
  function Child({ data }) {
    return <div>{data}</div>;
  }`,
    },
    {
      id: 65,
      title: "What is Web Accessibility?",
      description: "Web accessibility ensures that websites are usable by people with disabilities. It involves designing and developing websites that can be navigated and understood by everyone, including those using assistive technologies.",
      example: `// Accessible button with aria-label
  <button aria-label="Close" onClick={handleClose}>
    &times;
  </button>`,
    },
    {
      id: 66,
      title: "Route-Based Code Splitting in React",
      description: "Route-based code splitting involves splitting your application into separate bundles based on routes. This means that only the code required for the current route is loaded, improving performance.",
      example: `// Route-based code splitting with React.lazy
  import React, { Suspense, lazy } from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  
  const Home = lazy(() => import('./Home'));
  const About = lazy(() => import('./About'));
  
  function App() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Router>
    );
  }
  
  export default App;`,
    },
    {
      id: 67,
      title: "Managing Nested Routes with Role-Based Routing",
      description: "Role-based routing ensures that only users with specific roles can access certain routes. When managing nested routes, parent routes can check user roles before rendering child routes.",
      example: `// Role-Based Routing example
  import React from 'react';
  import { Navigate, Outlet } from 'react-router-dom';
  
  function PrivateRoute({ roles }) {
    const userRole = getUserRole(); // Assume this function retrieves the user's role
    return roles.includes(userRole) ? <Outlet /> : <Navigate to="/login" />;
  }
  
  // Usage in routing
  <Routes>
    <Route path="/admin" element={<PrivateRoute roles={['admin']} />}>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="settings" element={<AdminSettings />} />
    </Route>
  </Routes>`,
    },
    {
      id: 68,
      title: "What is Virtual DOM?",
      description: "The Virtual DOM is a lightweight copy of the actual DOM used by React to optimize rendering. React updates the Virtual DOM first, compares it with the previous version, and then efficiently updates the real DOM with only the necessary changes.",
      example: `// Virtual DOM usage is internal to React
  // Example understanding:
  const element = <h1>Hello, Virtual DOM!</h1>;
  ReactDOM.render(element, document.getElementById('root'));`,
    },
    {
      id: 69,
      title: "DOM Reconciliation",
      description: "DOM reconciliation is the process where React compares the new Virtual DOM with the previous one to determine the minimal set of changes needed to update the actual DOM, enhancing performance.",
      example: `// React handles DOM reconciliation internally
  // Example:
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
  // Only the button's text is updated in the real DOM`,
    },
    {
      id: 70,
      title: "React Element vs Component",
      description: `
  - **React Element**: An immutable description of what you want to see on the screen. It's a plain object describing the DOM node or another component.
  - **React Component**: A function or class that returns React elements. Components can have their own state and lifecycle.
  `,
      example: `// React Element
  const element = <h1>Hello, Element!</h1>;
  
  // React Component
  function Greeting() {
    return <h1>Hello, Component!</h1>;
  }`,
    },
    {
      id: 71,
      title: "Higher-Order Component (HOC) in React",
      description: "A Higher-Order Component is a function that takes a component and returns a new component, often adding additional functionality or props.",
      example: `// HOC`
    }]
    export default concepts

const concepts = [
    {
      id: 1,
      title: "What is Node.js and why is it used?",
      type: "Node.js",
      description: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It is used for building scalable network applications because it is designed to handle asynchronous I/O.",
      example: "Example: Node.js allows developers to build server-side applications using JavaScript."
    },
    {
      id: 2,
      title: "Explain the event-driven architecture of Node.js.",
      type: "Node.js",
      description: "Node.js uses an event-driven architecture, where events trigger actions and callbacks handle the execution of those actions, enabling non-blocking I/O operations.",
      example: "Example: The 'event' module in Node.js allows you to create and manage events."
    },
    {
      id: 3,
      title: "What are the main features of Node.js?",
      type: "Node.js",
      description: "Key features include non-blocking I/O, single-threaded event loop, NPM (Node Package Manager), and support for asynchronous programming.",
      example: "Example: Node.js can handle multiple connections simultaneously without blocking the execution thread."
    },
    {
      id: 4,
      title: "How does Node.js handle asynchronous operations?",
      type: "Node.js",
      description: "Node.js uses an event loop and callbacks to handle asynchronous operations, allowing it to perform other tasks while waiting for operations to complete.",
      example: "Example: Using callbacks or promises to manage asynchronous file reads."
    },
    {
      id: 5,
      title: "What is the role of the event loop in Node.js?",
      type: "Node.js",
      description: "The event loop manages the execution of asynchronous operations and ensures that non-blocking I/O operations complete, handling multiple tasks concurrently.",
      example: "Example: The event loop processes callbacks after the main execution stack is empty."
    },
    {
      id: 6,
      title: "What is a callback function in Node.js?",
      type: "Node.js",
      description: "A callback function is a function passed as an argument to another function, executed after the completion of a specific task.",
      example: "Example: Using a callback function to handle results from a database query."
    },
    {
      id: 7,
      title: "Explain the concept of Promises in Node.js.",
      type: "Node.js",
      description: "Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value, providing a cleaner alternative to callbacks.",
      example: "Example: const promise = new Promise((resolve, reject) => { /* async code */ });"
    },
    {
      id: 8,
      title: "What is the purpose of the async and await keywords in Node.js?",
      type: "Node.js",
      description: "The async and await keywords simplify working with Promises by allowing asynchronous code to be written in a synchronous style, improving readability.",
      example: "Example: async function fetchData() { const data = await getData(); }"
    },
    {
      id: 9,
      title: "How does Node.js handle errors in asynchronous code?",
      type: "Node.js",
      description: "Errors in asynchronous code can be handled using try/catch blocks with async/await or by passing errors to callback functions.",
      example: "Example: try { const result = await someAsyncFunction(); } catch (error) { console.error(error); }"
    },
    {
      id: 10,
      title: "What is the difference between synchronous and asynchronous functions in Node.js?",
      type: "Node.js",
      description: "Synchronous functions block the execution until they complete, while asynchronous functions allow other operations to execute without waiting for completion.",
      example: "Example: Synchronous: const data = fs.readFileSync('file.txt'); Asynchronous: fs.readFile('file.txt', callback);"
    },
    {
      id: 11,
      title: "What is the purpose of the require function in Node.js?",
      type: "Node.js",
      description: "The require function is used to import modules, JSON, and local files in Node.js, allowing code reusability.",
      example: "Example: const express = require('express');"
    },
    {
      id: 12,
      title: "How does Node.js manage modules and dependencies?",
      type: "Node.js",
      description: "Node.js manages modules and dependencies using the CommonJS module system and the package.json file, which lists all dependencies required by the project.",
      example: "Example: npm install <package_name> adds a package to the project."
    },
    {
      id: 13,
      title: "What is the CommonJS module system?",
      type: "Node.js",
      description: "The CommonJS module system is a standard for structuring and managing modules in Node.js, allowing developers to export and import modules easily.",
      example: "Example: module.exports = myFunction; const myFunction = require('./myFunction');"
    },
    {
      id: 14,
      title: "Explain the concept of middleware in Express.js.",
      type: "Node.js",
      description: "Middleware are functions that execute during the request-response cycle in Express.js, allowing for tasks such as logging, authentication, and error handling.",
      example: "Example: app.use((req, res, next) => { console.log(req.url); next(); });"
    },
    {
      id: 15,
      title: "How can you handle uncaught exceptions in Node.js?",
      type: "Node.js",
      description: "Uncaught exceptions can be handled using process.on('uncaughtException', callback) to prevent crashes and log errors appropriately.",
      example: "Example: process.on('uncaughtException', (err) => { console.error('Caught exception:', err); });"
    },
    {
      id: 16,
      title: "What are Streams in Node.js and how are they used?",
      type: "Node.js",
      description: "Streams in Node.js are used to read or write data in chunks instead of loading it all at once, improving memory efficiency.",
      example: "Example: const readStream = fs.createReadStream('file.txt');"
    },
    {
      id: 17,
      title: "Explain the different types of streams in Node.js.",
      type: "Node.js",
      description: "There are four types of streams: Readable, Writable, Duplex, and Transform, each serving different purposes in data handling.",
      example: "Example: Readable: fs.createReadStream(), Writable: fs.createWriteStream(), Duplex: net.Socket, Transform: zlib.createGzip()."
    },
    {
      id: 18,
      title: "What is the purpose of the process object in Node.js?",
      type: "Node.js",
      description: "The process object provides information and control over the current Node.js process, including environment variables and process exit status.",
      example: "Example: console.log(process.env.NODE_ENV);"
    },
    {
      id: 19,
      title: "How can you manage environment variables in Node.js applications?",
      type: "Node.js",
      description: "Environment variables can be managed using the dotenv package, which loads variables from a .env file into process.env.",
      example: "Example: require('dotenv').config(); const dbPassword = process.env.DB_PASSWORD;"
    },
    {
      id: 20,
      title: "What is the role of package.json in a Node.js project?",
      type: "Node.js",
      description: "The package.json file defines metadata about the project, including dependencies, scripts, and project information.",
      example: "Example: The scripts section in package.json can define commands like 'start' and 'test'."
    },
    {
      id: 21,
      title: "How do you create and use custom modules in Node.js?",
      type: "Node.js",
      description: "Custom modules can be created by defining functions or variables in a separate file and exporting them using module.exports, then importing them using require.",
      example: "Example: In module.js: module.exports = myFunction; In app.js: const myFunction = require('./module');"
    },
    {
      id: 22,
      title: "Explain the concept of the buffer in Node.js.",
      type: "Node.js",
      description: "A buffer is a temporary storage area in memory used to hold binary data, allowing for efficient data processing and manipulation.",
      example: "Example: const buffer = Buffer.from('Hello World');"
    },
    {
      id: 23,
      title: "What are the differences between Buffer.from() and Buffer.alloc()?",
      type: "Node.js",
      description: "Buffer.from() creates a buffer from existing data, while Buffer.alloc() creates a buffer of a specified size initialized with zeros.",
      example: "Example: const bufFrom = Buffer.from('Hello'); const bufAlloc = Buffer.alloc(10);"
    },
    {
      id: 24,
      title: "How does Node.js handle file operations?",
      type: "Node.js",
      description: "Node.js handles file operations using the fs module, providing methods for reading, writing, and manipulating files asynchronously.",
      example: "Example: fs.readFile('file.txt', (err, data) => { /* handle data */ });"
    },
    {
      id: 25,
      title: "What is the purpose of the HTTP module in Node.js?",
      type: "Node.js",
      description: "The HTTP module allows developers to create HTTP servers and clients, enabling the handling of HTTP requests and responses.",
      example: "Example: const http = require('http'); http.createServer((req, res) => { res.end('Hello World'); }).listen(3000);"
    },
    {
      id: 26,
      title: "How do you create a simple web server using Node.js?",
      type: "Node.js",
      description: "A simple web server can be created using the HTTP module to listen for incoming requests and send responses.",
      example: "Example: http.createServer((req, res) => { res.writeHead(200, {'Content-Type': 'text/plain'}); res.end('Hello World'); }).listen(3000);"
    },
    {
      id: 27,
      title: "What is the difference between process.nextTick() and setImmediate()?",
      type: "Node.js",
      description: "process.nextTick() schedules a callback to be invoked in the same phase of the event loop, while setImmediate() schedules a callback to be invoked in the next iteration.",
      example: "Example: process.nextTick(() => { /* immediate code */ }); setImmediate(() => { /* next iteration code */ });"
    },
    {
      id: 28,
      title: "What is the purpose of the express.json() middleware?",
      type: "Node.js",
      description: "The express.json() middleware parses incoming requests with JSON payloads, enabling the server to process JSON data in the request body.",
      example: "Example: app.use(express.json());"
    },
    {
      id: 29,
      title: "How can you handle CORS in a Node.js application?",
      type: "Node.js",
      description: "CORS can be handled by using the cors middleware, which adds the appropriate headers to responses, allowing or denying cross-origin requests.",
      example: "Example: app.use(cors());"
    },
    {
      id: 30,
      title: "What are HTTP status codes and how are they used in Node.js?",
      type: "Node.js",
      description: "HTTP status codes indicate the result of an HTTP request, such as 200 for success or 404 for not found, and are used in responses to inform clients.",
      example: "Example: res.status(404).send('Not Found');"
    },
    {
      id: 31,
      title: "How can you implement logging in a Node.js application?",
      type: "Node.js",
      description: "Logging can be implemented using middleware such as morgan or by using console.log statements in various parts of the application.",
      example: "Example: app.use(morgan('tiny'));"
    },
    {
      id: 32,
      title: "What is the role of the npm script in a Node.js project?",
      type: "Node.js",
      description: "NPM scripts allow developers to automate common tasks like testing, building, and starting the application directly from the command line.",
      example: "Example: \"scripts\": { \"start\": \"node app.js\" }"
    },
    {
      id: 33,
      title: "How do you connect a Node.js application to a database?",
      type: "Node.js",
      description: "A Node.js application can connect to a database using a database driver or ORM (like mongoose for MongoDB), allowing for data interaction.",
      example: "Example: const mongoose = require('mongoose'); mongoose.connect('mongodb://localhost/test');"
    },
    {
      id: 34,
      title: "What is the purpose of the cookie-parser middleware?",
      type: "Node.js",
      description: "The cookie-parser middleware parses cookies attached to the client request object, making them available for use in the application.",
      example: "Example: app.use(cookieParser());"
    },
    {
      id: 35,
      title: "How do you handle user authentication in a Node.js application?",
      type: "Node.js",
      description: "User authentication can be handled using strategies like sessions, JWTs (JSON Web Tokens), or OAuth, depending on the application's needs.",
      example: "Example: Using Passport.js for authentication strategies."
    },
    {
      id: 36,
      title: "What is clustering in Node.js and why is it used?",
      type: "Node.js",
      description: "Clustering allows you to take advantage of multi-core systems by spawning multiple instances of a Node.js application, improving performance and reliability.",
      example: "Example: const cluster = require('cluster'); if (cluster.isMaster) { cluster.fork(); }"
    },
    {
      id: 37,
      title: "How can you serve static files in a Node.js application?",
      type: "Node.js",
      description: "Static files can be served using the express.static middleware, which allows for easy serving of files like HTML, CSS, and images.",
      example: "Example: app.use(express.static('public'));"
    },
    {
      id: 38,
      title: "What is the use of the body-parser middleware?",
      type: "Node.js",
      description: "The body-parser middleware parses incoming request bodies in a middleware before your handlers, available under the req.body property.",
      example: "Example: app.use(bodyParser.urlencoded({ extended: true }));"
    },
    {
      id: 39,
      title: "How can you implement validation in a Node.js application?",
      type: "Node.js",
      description: "Validation can be implemented using libraries like express-validator or by manually checking request parameters in route handlers.",
      example: "Example: const { body, validationResult } = require('express-validator');"
    },
    {
      id: 40,
      title: "What is the purpose of the nodemon tool?",
      type: "Node.js",
      description: "Nodemon is a utility that automatically monitors for changes in your source code and restarts your server, streamlining the development process.",
      example: "Example: Run your app using 'nodemon app.js' instead of 'node app.js'."
    },
    {
      id: 41,
      title: "How can you implement session management in a Node.js application?",
      type: "Node.js",
      description: "Session management can be implemented using the express-session middleware, which stores session data on the server-side.",
      example: "Example: app.use(session({ secret: 'secret', resave: false, saveUninitialized: true }));"
    },
    {
      id: 42,
      title: "What are WebSockets and how do you use them in Node.js?",
      type: "Node.js",
      description: "WebSockets provide a way to open interactive communication sessions between the client and server, allowing for real-time data exchange.",
      example: "Example: const WebSocket = require('ws'); const ws = new WebSocket('ws://example.com/socket');"
    },
    {
      id: 43,
      title: "How can you create RESTful APIs using Node.js?",
      type: "Node.js",
      description: "RESTful APIs can be created using the Express.js framework, defining routes that correspond to HTTP methods for CRUD operations.",
      example: "Example: app.get('/api/users', (req, res) => { /* return users */ });"
    },
    {
      id: 44,
      title: "What is the significance of the 'this' keyword in Node.js?",
      type: "Node.js",
      description: "'this' refers to the context in which a function is executed, which can vary based on how a function is called.",
      example: "Example: In a method, 'this' refers to the object the method belongs to."
    },
    {
      id: 45,
      title: "How do you handle file uploads in a Node.js application?",
      type: "Node.js",
      description: "File uploads can be handled using middleware like multer, which processes multipart/form-data and saves uploaded files.",
      example: "Example: const multer = require('multer'); const upload = multer({ dest: 'uploads/' });"
    },
    {
      id: 46,
      title: "What are some common security practices in Node.js applications?",
      type: "Node.js",
      description: "Common security practices include validating user input, sanitizing data, using HTTPS, and protecting against SQL injection and XSS.",
      example: "Example: Using helmet.js to set various HTTP headers for security."
    },
    {
      id: 47,
      title: "How can you implement rate limiting in a Node.js application?",
      type: "Node.js",
      description: "Rate limiting can be implemented using middleware like express-rate-limit, which limits the number of requests a client can make to the server.",
      example: "Example: app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));"
    },
    {
      id: 48,
      title: "What are the best practices for error handling in Node.js?",
      type: "Node.js",
      description: "Best practices include using try/catch with async/await, handling errors in middleware, and providing meaningful error messages.",
      example: "Example: app.use((err, req, res, next) => { res.status(500).send('Internal Server Error'); });"
    },
    {
      id: 49,
      title: "What is the purpose of using environment variables in a Node.js application?",
      type: "Node.js",
      description: "Environment variables allow you to store configuration values outside of your code, making it easier to manage sensitive data like API keys.",
      example: "Example: Using dotenv package to load environment variables from a .env file."
    },
    {
      id: 50,
      title: "How can you optimize performance in a Node.js application?",
      type: "Node.js",
      description: "Performance can be optimized by using asynchronous programming, caching responses, and utilizing clustering for multi-core systems.",
      example: "Example: Implementing Redis for caching frequently accessed data."
    },


    {
        id: 51,
        title: "How can you handle file uploads in a Node.js application?",
        type: "Node.js",
        description: "File uploads can be handled using middleware like multer to process multipart/form-data.",
        example: "Example: Using multer to save uploaded files to a designated folder."
      },
      {
        id: 52,
        title: "What are some best practices for error handling in Node.js applications?",
        type: "Node.js",
        description: "Best practices include using try-catch blocks, centralized error handling, and providing meaningful error messages.",
        example: "Example: Implementing a middleware for catching and handling errors globally."
      },
      {
        id: 53,
        title: "How can you implement logging in a Node.js application?",
        type: "Node.js",
        description: "Logging can be implemented using libraries like Winston or Morgan for better log management.",
        example: "Example: Using Winston to log errors and requests in a structured format."
      },
      {
        id: 54,
        title: "What is the role of the os module in Node.js?",
        type: "Node.js",
        description: "The os module provides operating system-related utility methods and properties.",
        example: "Example: Using os.platform() to determine the operating system platform."
      },
      {
        id: 55,
        title: "How can you perform background tasks in Node.js?",
        type: "Node.js",
        description: "Background tasks can be performed using libraries like Bull or agenda for job scheduling.",
        example: "Example: Using Bull to process jobs in a Redis-backed queue."
      },
      {
        id: 56,
        title: "What are WebSockets and how can you implement them in Node.js?",
        type: "Node.js",
        description: "WebSockets enable two-way communication between the client and server, implemented using the ws library.",
        example: "Example: Setting up a WebSocket server with the ws library to handle real-time updates."
      },
      {
        id: 57,
        title: "How does Node.js handle concurrency?",
        type: "Node.js",
        description: "Node.js handles concurrency using an event-driven, non-blocking I/O model.",
        example: "Example: Utilizing callbacks, promises, or async/await to manage asynchronous operations."
      },
      {
        id: 58,
        title: "What are the benefits of using Node.js for building APIs?",
        type: "Node.js",
        description: "Benefits include fast performance, scalability, and the ability to handle multiple connections simultaneously.",
        example: "Example: Creating a RESTful API using Express for efficient routing and middleware support."
      },
      {
        id: 59,
        title: "How can you test Node.js applications?",
        type: "Node.js",
        description: "Testing can be done using frameworks like Mocha, Jest, or Chai for unit and integration tests.",
        example: "Example: Writing test cases with Mocha and Chai to verify API endpoints."
      },
      {
        id: 60,
        title: "What are some popular testing frameworks for Node.js?",
        type: "Node.js",
        description: "Popular frameworks include Mocha, Jest, Chai, and Supertest for HTTP assertions.",
        example: "Example: Using Jest for running unit tests and snapshot testing."
      },
      {
        id: 61,
        title: "How do you use the mocha and chai libraries for testing in Node.js?",
        type: "Node.js",
        description: "Mocha provides the test runner, while Chai offers assertion libraries for validating results.",
        example: "Example: Writing tests using Mocha's describe/it syntax and Chai's expect assertions."
      },
      {
        id: 62,
        title: "What is a memory leak and how can you prevent it in Node.js?",
        type: "Node.js",
        description: "A memory leak occurs when memory that is no longer needed is not released, which can be prevented by avoiding global variables and using proper garbage collection.",
        example: "Example: Using the Node.js inspector to identify and fix memory leaks."
      },
      {
        id: 63,
        title: "How can you optimize the performance of a Node.js application?",
        type: "Node.js",
        description: "Performance can be optimized through asynchronous programming, caching, and minimizing I/O operations.",
        example: "Example: Using Redis for caching database queries to reduce latency."
      },
      {
        id: 64,
        title: "What are some common security issues in Node.js applications?",
        type: "Node.js",
        description: "Common issues include SQL injection, cross-site scripting (XSS), and improper authentication.",
        example: "Example: Using Helmet.js to set HTTP headers for securing Express apps."
      },
      {
        id: 65,
        title: "How can you secure a Node.js application from common vulnerabilities?",
        type: "Node.js",
        description: "Security can be enhanced by validating inputs, using HTTPS, and employing security headers.",
        example: "Example: Validating user input to prevent injection attacks."
      },
      {
        id: 66,
        title: "What is the purpose of the cluster module in Node.js?",
        type: "Node.js",
        description: "The cluster module allows you to create child processes that share server ports, improving performance on multi-core systems.",
        example: "Example: Using the cluster module to fork multiple workers for handling incoming requests."
      },
      {
        id: 67,
        title: "How can you scale a Node.js application?",
        type: "Node.js",
        description: "Scaling can be achieved through horizontal scaling, using load balancers, and implementing microservices.",
        example: "Example: Deploying Node.js instances behind a load balancer like NGINX."
      },
      {
        id: 68,
        title: "What is Node.js's role in microservices architecture?",
        type: "Node.js",
        description: "Node.js is often used to build lightweight, fast, and scalable microservices that communicate over APIs.",
        example: "Example: Creating microservices in Node.js that interact through REST or GraphQL."
      },
      {
        id: 69,
        title: "How do you handle concurrency in Node.js?",
        type: "Node.js",
        description: "Concurrency is handled through asynchronous programming models like callbacks, promises, and async/await.",
        example: "Example: Using async/await syntax to simplify asynchronous code."
      },
      {
        id: 70,
        title: "What are some tools for monitoring Node.js applications?",
        type: "Node.js",
        description: "Monitoring tools include PM2, New Relic, and Datadog for tracking application performance.",
        example: "Example: Using PM2 to manage and monitor Node.js application processes."
      },
      {
        id: 71,
        title: "How can you profile a Node.js application for performance bottlenecks?",
        type: "Node.js",
        description: "Profiling can be done using the built-in V8 profiler or tools like Clinic.js.",
        example: "Example: Running Clinic.js to visualize performance bottlenecks in your application."
      },
      {
        id: 72,
        title: "What is the purpose of the child_process module in Node.js?",
        type: "Node.js",
        description: "The child_process module allows you to spawn child processes to execute system commands or run scripts.",
        example: "Example: Using spawn() to run a script in a separate process."
      },
      {
        id: 73,
        title: "How can you manage and schedule tasks in a Node.js application?",
        type: "Node.js",
        description: "Task management can be achieved using libraries like node-schedule or agenda for job scheduling.",
        example: "Example: Using node-schedule to run tasks at specific intervals."
      },
      {
        id: 74,
        title: "What is the stream module and how do you use it in Node.js?",
        type: "Node.js",
        description: "The stream module provides an API for handling streaming data, allowing you to read and write data in chunks.",
        example: "Example: Using fs.createReadStream() to read a file in streams."
      },
      {
        id: 75,
        title: "Explain the concept of Node.js's non-blocking I/O.",
        type: "Node.js",
        description: "Non-blocking I/O allows Node.js to handle multiple operations simultaneously without waiting for each operation to complete.",
        example: "Example: Making multiple database queries concurrently without blocking the event loop."
      },
      {
        id: 76,
        title: "How do you handle large amounts of data in Node.js?",
        type: "Node.js",
        description: "Large data can be handled using streams to process data in chunks instead of loading it all into memory.",
        example: "Example: Using streams to read a large CSV file line by line."
      },
      {
        id: 77,
        title: "What is the purpose of npm and how does it differ from yarn?",
        type: "Node.js",
        description: "npm is the default package manager for Node.js, while yarn is an alternative package manager that focuses on speed and reliability.",
        example: "Example: Using yarn add to install packages with faster dependency resolution."
      },
      {
        id: 78,
        title: "How can you create a RESTful API using Node.js?",
        type: "Node.js",
        description: "Creating a RESTful API involves defining routes, handling HTTP methods, and responding with JSON data.",
        example: "Example: Using Express to set up routes for GET, POST, PUT, and DELETE requests."
      },
      {
        id: 79,
        title: "What is the role of the assert module in Node.js?",
        type: "Node.js",
        description: "The assert module provides a set of assertion tests that can be used to test if a condition is true.",
        example: "Example: Using assert.strictEqual() to verify expected outcomes in tests."
      },
      {
        id: 80,
        title: "How can you use environment variables to configure a Node.js application?",
        type: "Node.js",
        description: "Environment variables can be accessed using process.env to store sensitive information or configuration settings.",
        example: "Example: Storing database connection strings in environment variables."
      },
      {
        id: 81,
        title: "What are the differences between Node.js and other server-side technologies like Python and Ruby?",
        type: "Node.js",
        description: "Node.js is event-driven and non-blocking, while Python and Ruby often follow a multi-threaded or blocking approach.",
        example: "Example: Node.js's single-threaded nature allows it to handle many concurrent connections efficiently."
      },
      {
        id: 82,
        title: "How does Node.js handle backpressure in streams?",
        type: "Node.js",
        description: "Node.js uses the readable and writable stream interfaces to manage backpressure effectively by pausing and resuming streams.",
        example: "Example: Using stream.pipeline() to manage flow control between readable and writable streams."
      },
      {
        id: 83,
        title: "What are some common performance issues in Node.js applications?",
        type: "Node.js",
        description: "Common performance issues include blocking the event loop, inefficient database queries, and excessive memory usage.",
        example: "Example: Profiling an application to identify slow database queries."
      },
      {
        id: 84,
        title: "How can you debug a Node.js application?",
        type: "Node.js",
        description: "Debugging can be done using built-in debugging tools, logging, and external tools like Visual Studio Code.",
        example: "Example: Using the Node.js inspector to set breakpoints and inspect variables."
      },
      {
        id: 85,
        title: "What is the role of the v8 module in Node.js?",
        type: "Node.js",
        description: "The v8 module is the JavaScript engine that powers Node.js, providing performance optimizations and features.",
        example: "Example: Using v8.getHeapStatistics() to analyze memory usage."
      },
      {
        id: 86,
        title: "How can you use the debug module in Node.js?",
        type: "Node.js",
        description: "The debug module allows you to create debug logs that can be enabled or disabled based on environment variables.",
        example: "Example: Using DEBUG=app:* to enable debug logs for the application."
      },
      {
        id: 87,
        title: "What are the different ways to manage dependencies in Node.js?",
        type: "Node.js",
        description: "Dependencies can be managed using npm or yarn, along with package.json to track versions.",
        example: "Example: Using package.json to specify and manage project dependencies."
      },
      {
        id: 88,
        title: "How do you handle cross-platform issues in Node.js?",
        type: "Node.js",
        description: "Cross-platform issues can be addressed by using platform-agnostic code and libraries, and testing on different environments.",
        example: "Example: Using path.join() to handle file paths across different operating systems."
      },
      {
        id: 89,
        title: "How does Node.js integrate with frontend frameworks like React or Angular?",
        type: "Node.js",
        description: "Node.js can serve as a backend for frontend frameworks, providing APIs for data retrieval and handling server-side rendering.",
        example: "Example: Using Node.js to build RESTful APIs consumed by a React application."
      },
      {
        id: 90,
        title: "What are the best practices for structuring a Node.js application?",
        type: "Node.js",
        description: "Best practices include using a modular file structure, separating concerns, and following MVC patterns.",
        example: "Example: Organizing routes, controllers, and models in separate directories."
      },
      {
        id: 91,
        title: "How can you use pm2 for managing Node.js processes?",
        type: "Node.js",
        description: "PM2 is a process manager that helps manage and keep Node.js applications running continuously.",
        example: "Example: Using pm2 start to run your application and pm2 logs to view output."
      },
      {
        id: 92,
        title: "What are the security implications of using third-party modules in Node.js?",
        type: "Node.js",
        description: "Using third-party modules can introduce vulnerabilities; always review and maintain dependencies.",
        example: "Example: Regularly running npm audit to check for known vulnerabilities."
      },
      {
        id: 93,
        title: "How can you implement rate limiting in a Node.js application?",
        type: "Node.js",
        description: "Rate limiting can be implemented using libraries like express-rate-limit to restrict repeated requests.",
        example: "Example: Applying rate limiting to API endpoints to prevent abuse."
      },
      {
        id: 94,
        title: "What are some common patterns for handling asynchronous operations in Node.js?",
        type: "Node.js",
        description: "Common patterns include callbacks, promises, async/await, and event emitters.",
        example: "Example: Using async/await for cleaner asynchronous code."
      },
      {
        id: 95,
        title: "How can you create a CLI tool using Node.js?",
        type: "Node.js",
        description: "CLI tools can be created using Node.js by leveraging the readline or yargs libraries to handle input.",
        example: "Example: Building a simple CLI tool to process user commands."
      },
      {
        id: 96,
        title: "How does Node.js manage and optimize garbage collection?",
        type: "Node.js",
        description: "Node.js uses V8's garbage collector to automatically manage memory, cleaning up unused objects.",
        example: "Example: Using heap snapshots to analyze memory usage and optimize performance."
      },
      {
        id: 97,
        title: "What are some common pitfalls when working with Node.js?",
        type: "Node.js",
        description: "Common pitfalls include blocking the event loop, mishandling errors, and failing to manage dependencies properly.",
        example: "Example: Using setTimeout instead of a promise to handle asynchronous tasks."
      },
      {
        id: 98,
        title: "How can you implement caching in a Node.js application?",
        type: "Node.js",
        description: "Caching can be implemented using in-memory stores like Redis or caching libraries like node-cache.",
        example: "Example: Using Redis to cache database queries for faster access."
      },
      {
        id: 99,
        title: "How can you use the assert module for testing in Node.js?",
        type: "Node.js",
        description: "The assert module provides assertion functions that can be used in tests to verify conditions.",
        example: "Example: Using assert.deepEqual() to compare objects in tests."
      },
      {
        id: 100,
        title: "How do you handle different environments (development, staging, production) in Node.js applications?",
        type: "Node.js",
        description: "Different environments can be managed using environment variables and configuration files to separate settings.",
        example: "Example: Using dotenv to load environment-specific configuration."
      }

  ]
  export default concepts
import React from 'react'

const Async = () => {
  return (
    <div>
      <h1>Async</h1>
      <p>executing things in sequence works well. But you may sometimes need to fetch data from the server or execute a function with a delay, something you do not anticipate occurring NOW. So, you want the code to execute asynchronously.</p>
   <p>We can classify most asynchronous JavaScript operations with two primary triggers:

<b>Browser API/Web API events or functions: </b>These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
<b>Promises:</b> A unique JavaScript object that allows us to perform asynchronous operations.</p>
   
    </div>
  )
}

export default Async

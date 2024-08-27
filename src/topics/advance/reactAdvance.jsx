import React from 'react'

const reactAdvance = () => {
  return (
    <div>
        <h1>Advance</h1>
      <h5>
      What is React Fiber  </h5> 
<p> Fiber is an internal engine change geared to make React faster and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
</p>
<h6>Because Fiber is asynchronous, React can:</h6>

<p>Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance
This change allows React to break away from the limits of the synchronous stack reconciler. Previously, you could add or remove items, for example, but it had to work until the stack was empty, and tasks couldn’t be interrupted.

This change also allows React to fine-tune rendering components, ensuring that the most important updates happen as soon as possible.

Now, to truly understand the powers of Fiber, let’s talk about the old reconciler: the stack reconciler.
  </p>  
    </div>
  )
}

export default reactAdvance

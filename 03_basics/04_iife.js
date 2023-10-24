// Immeddiately Invoked Function Expressions (IIFE) 
// IIFE is used to deal with the problem of pollution of the global scope with certain functions a lot of time, because there might be a case that some function make use of certain things which are already present in the global scope.

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman

// Avoid polluting the global namespace
// Because our application could include many functions and global variables from different source files, it's important to limit the number of global variables. If we have some initiation code that we don't need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this case is better than using a function declaration or a function expression.

// Excample - 1 Named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})()

// Example - 2
(() => {
    // some initiation code
    let firstVariable;
    let secondVariable;
  })();
  
  // firstVariable and secondVariable will be discarded after the function is executed.
  

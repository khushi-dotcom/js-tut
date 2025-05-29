/*
JavaScript is a single-threaded interpreted language. 
*/
var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)
/*
When the JavaScript engine scans a script file, 
it makes an environment called the Execution Context 
that handles the entire transformation and execution of the code.

During the context runtime, 
the parser parses the source code and 
allocates memory for the variables and functions. 
The source code is generated and gets executed.

There are two types of execution contexts: global and function. :
        --> The global execution context is created when a JavaScript script first starts to run, 
            and it represents the global scope in JavaScript. 
        --> A function execution context is created whenever a function is called, 
            representing the function's local scope. 

There are two phases of JavaScript execution context:
        --> Memory Creation phase: In this phase, the JavaScript engine creates the execution context 
            and sets up the script's environment. ( allocation of mrmory for var and func ) if var --> undefined ; if function --> definittion
        --> Execution phase: In this phase, the JavaScript engine executes the code in the execution context. 
            It processes any statements or expressions in the script and evaluates any function calls.

Everything in JS happens inside this execution context. It is divided into two components. One is memory and the other is code. 
It is important to remember that these phases and components are applicable to both global and functional execution contexts.  

refer to this link : https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/
also check for this in inspect in soureces + call stack 
*/
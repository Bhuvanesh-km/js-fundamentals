//Throttling is a technique in JavaScript
//that limits the number of times a function can be called in a given period of time.

function throttledFunction() {
  console.log("throttle");
}

setInterval(throttledFunction, 2000);

//Debouncing waits for a certain time before invoking the function again.

//Write a function that can memoize (remember) the output for any function if we pass same arguments.

const addThreeNums = (a, b, c) => a + b + c;

const memoize = (func) => {
  if (typeof func !== "function")
    return "agrs should be of type function to memorize";
  const cache = {};
  return (...args) => {
    const argsStrting = JSON.stringify(args);
    if (cache[argsStrting]) {
      console.log("from cahe", cache[argsStrting]);
      return cache[argsStrting];
    } else {
      console.log("computing..");
      const result = func.call(this, ...args);
      cache[argsStrting] = result;
      return result;
    }
  };
};

const memoizedFuncOfAdd = memoize(addThreeNums);

// console.log(memoizedFuncOfAdd(1, 2, 3));
console.log(memoizedFuncOfAdd(1, 2, 4));
// console.log(memoizedFuncOfAdd(1, 2, 3));
console.log(memoizedFuncOfAdd(1, 2, 4));

const factorize = (number) => {
  if (number == 1) return 1;
  return number * factorize(number - 1);
};

// console.log(factorize(5));

const factMemo = memoize(factorize);

// console.log(factMemo(5));
// console.log(factMemo(5));

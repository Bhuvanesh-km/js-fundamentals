function checkIfInstanceOf(obj, classFunction) {
  if (obj === null || obj === undefined) {
    return false;
  }
  const prototype = Object.getPrototypeOf(obj);
  if (prototype === null) {
    return false;
  }
  if (prototype.constructor === classFunction) {
    return true;
  }
  return checkIfInstanceOf(prototype, classFunction);
}

func = () => checkIfInstanceOf(new Date(), Date);
console.log(func());

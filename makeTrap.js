let userObj = {
  private: {
    dob: "12/3/4",
  },
  public: {
    name: "Anas",
  },
};

function makeTrap(userObj) {
  let handler = {
    get: function (target, prop, receiver) {
      if (prop === "private") {
        return "Access not granted";
      } else return Reflect.get(...arguments);
    },
  };
  return new Proxy(userObj, handler);
}
let p = makeTrap(userObj);
console.log(p.private);
console.log(p.public);

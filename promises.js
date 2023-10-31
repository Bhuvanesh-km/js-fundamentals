const fs = require("fs");

const prom1 = fs.promises.readFile("./file.txt");

prom1
  .then(function (data) {
    console.log("data " + data);
  })
  .catch(function (err) {
    console.error(err);
  });

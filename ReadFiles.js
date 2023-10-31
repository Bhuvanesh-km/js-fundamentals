const fs = require("fs");

const onReadContent = (data, err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  return data;
};
fs.readFile("./file.txt", "utf8", onReadContent);

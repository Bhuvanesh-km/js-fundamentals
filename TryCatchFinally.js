try {
  let num = 10;
  console.log(num.toUpperCase());
} catch (err) {
  console.log("Error Name " + err.message);
  //   switch (err.name) {
  //     case "TypeError":
  //       this.handelTypeError();
  //       break;
  //   }
}

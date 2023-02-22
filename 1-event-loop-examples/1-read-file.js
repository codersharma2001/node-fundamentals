const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");

// The event loop is a critical component of Node.js, as it is responsible for handling asynchronous operations in the Node.js runtime environment. Essentially, the event loop is a mechanism that allows Node.js to handle multiple operations simultaneously, without blocking the execution of the program.

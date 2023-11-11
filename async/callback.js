function IamAsync(name, callback) {
  setTimeout(() => {
    console.log("I am async " + name);
    callback(name);
  }, 1000);
}

function AlsoAsync(name, callback) {
  setTimeout(() => {
    console.log("Also async " + name);
    callback();
  }, 1000);
}

console.log("initiating process");
IamAsync("cricadev", (name) => {
  AlsoAsync(name, () => {
    console.log("finishing process");
  });
});

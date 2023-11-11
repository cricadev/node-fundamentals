function IamAsync(name, callback) {
  setTimeout(() => {
    console.log("I am async " + name);
    callback(name);
  }, 1000);
}

function talk(callbackTalk) {
  setTimeout(() => {
    console.log("Bla bla bla bla...");
    callbackTalk();
  }, 1000);
}

function AlsoAsync(name, callback) {
  setTimeout(() => {
    console.log("Also async " + name);
    callback();
  }, 1000);
}

function conversation(name, times, callback) {
  if (times > 0) {
    talk(() => {
      conversation(name, --times, callback);
    });
  } else {
    AlsoAsync(name, callback);
  }
}

// --

console.log("initiating process");
IamAsync("cricadev", (name) => {
  conversation(name, 3, () => {
    console.log("finishing process");
  });
});
// IamAsync("cricadev", (name) => {
//   talk(() => {
//     talk(() => {
//       AlsoAsync(name, () => {
//         console.log("finishing process");
//       });
//     });
//   });
// });

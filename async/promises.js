function IamAsync(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am async " + name);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla bla...");
      //resolve(name);
      reject("Error inesperado");
    }, 1000);
  });
}

function AlsoAsync(name, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Also async " + name);
      resolve(name);
    }, 1000);
  });
}

//--
console.log("initiating process");
IamAsync("cricadev")
  .then(talk)
  .then(talk)
  .then(talk)
  .then(AlsoAsync)
  .then((name) => {
    console.log("finished process");
  })
  .catch((error) => {
    console.error("error");
    console.error(error);
  });

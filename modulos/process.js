process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
process.on("exit", () => {
  console.log("El proceso terminó");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  }, 0);
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya se nos ha olvidado capturar un error");
  console.error(err);

  setTimeout(() => {
    console.log("Esto viene desde las excepciones");
  }, 0);
});

functionDOesntExist();

console.log("Esto si el error no se recoje, no sale");

const { exec, spawn } = require("node:child_process");

// exec("node modulos/fs.js", (err, stdout, stderr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn("ls", ["-la"]);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (dato) => {
  console.log("¿Está muerto?");
  console.log(proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("El proceso terminó");
  console.log(proceso.killed);
});

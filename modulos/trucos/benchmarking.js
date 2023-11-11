console.time("todo");
let suma = 0;

console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma += 1;
}
console.timeEnd("bucle");

let suma2 = 0;

console.time("bucle");
for (let i = 0; i < 1000000000; i++) {
  suma2 += 1;
}

const asyncrona = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Termina el proceso asíncrono");
      resolve();
    });
  });
};

console.timeEnd("bucle");

console.time("asincrono");
asyncrona().then(() => {
  console.timeEnd("asincrono");
});

console.timeEnd("todo");

let i = 0;
let intervalId = setInterval(() => {
  console.log(i);
  if (i === 3) {
    clearInterval(intervalId);
  }
  i++;
}, 1000);

console.log(__filename);

let n = 0;
let m = 100;


let range = Math.abs(m - n);
let numberInRange;
  do {
    numberInRange = Math.floor(Math.random() * (-m - n));
  } while (numberInRange % 2 === 0);
let min = Math.min(n, m);

console.log(min + numberInRange);

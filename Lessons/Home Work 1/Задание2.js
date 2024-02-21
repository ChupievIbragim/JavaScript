let a = 13.123456789;
let b = 2.123;
let n = 5;

let aNormalized = Math.round (
  a * Math.pow(10, n)
)

let bNormalized = Math.round (
  b * Math.pow(10, n)
)

console.log("Исходные числа равны", a === b);
console.log("Числа равны", aNormalized === bNormalized);
console.log("Первое число больше", aNormalized > bNormalized);
console.log("Первое число меньше", aNormalized < bNormalized);
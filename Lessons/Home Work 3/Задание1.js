let m = 100;
let n = 0;
let count = 100;

let lines = [];

for (let i = 0; i < count; i++) {
    const randomNumber = Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m)));
    lines.push(randomNumber);
}

console.log(lines)
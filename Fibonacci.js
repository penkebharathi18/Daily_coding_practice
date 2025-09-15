
let fibonacci = [];
fibonacci.push(0);
fibonacci.push(1);

for (let i = 2; i < 10; i++) {
  let next = fibonacci[i - 1] + fibonacci[i - 2];
  fibonacci.push(next);
}

console.log("Fibonacci Series (first 10 terms):");
console.log(fibonacci);

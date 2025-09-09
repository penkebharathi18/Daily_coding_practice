// Function to check prime or not
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage
let number = 29;

if (isPrime(number)) {
  console.log(number + " is a Prime Number");
} else {
  console.log(number + " is NOT a Prime Number");
}

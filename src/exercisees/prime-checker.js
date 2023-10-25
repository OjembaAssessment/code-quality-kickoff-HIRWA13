function checkPrime(number, divisor = 2) {
  if (number < 2) return false;
  if (number % divisor === 0) return false;
  return true
}
// tests:
console.log(checkPrime(12)); // false
console.log(checkPrime(7)); // true
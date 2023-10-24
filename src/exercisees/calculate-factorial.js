// calculate factorial

const calculateFactorial = (number) => {
    let factorial = 1
    for (let index = 1; index <= number; index++) {
        factorial *= index
    }
    return factorial
}
// tests:
console.log(calculateFactorial(5))
console.log(calculateFactorial(10))
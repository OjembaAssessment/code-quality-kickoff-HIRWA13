const numbers = [1, 2, 3, 4, 5]

const findEvenNumbers = (numbers) => {
    return numbers.filter(number => number % 2 === 0)
}
// tests:
console.log(findEvenNumbers(numbers))
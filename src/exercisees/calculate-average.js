// calculate average of numbers in an array

const numbers = [1, 2, 3, 4, 5]

const calculateAverage = (numbers) => {
    return (
      numbers.reduce((accumulator, current) => current + accumulator, 0) /
      numbers.length
    );
}
// tests:
console.log(calculateAverage(numbers))

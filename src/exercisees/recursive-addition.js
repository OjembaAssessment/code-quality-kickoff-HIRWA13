const findSum = (arr, sum = 0) => arr.length === 0 ? sum : findSum(arr.slice(1), sum + arr[0]);
// tests:
console.log(findSum([1, 2, 3, 4, 5]));
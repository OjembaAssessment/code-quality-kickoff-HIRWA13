const reverseString = (str) => {
    return [...str].reverse().join("")
}
// tests
console.log(reverseString('hello'))
console.log(reverseString('hey there'))
const greetUser = (name='') => {
    return name ? `Hello ${name}!` : 'Hello!';
}
// tests: 
console.log(greetUser('Sam'))
console.log(greetUser())
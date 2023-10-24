const romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const romanDecoder = roman => {
    let number = 0;
    for(const key in romanNumerals) {
        while(number < romanNumerals[key]) {
            console.log(key)
        }
    }
    return number;
}

console.log(romanDecoder("II"))
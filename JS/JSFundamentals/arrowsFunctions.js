const calcAge = birthYear => new Date().getFullYear() - birthYear

const yearsUtilRetirement = birthYear => 65 - (new Date().getFullYear() - birthYear)

const messageRetirement = (birthYear, name) => `${name} retires in ${yearsUtilRetirement(birthYear)} years`

console.log(calcAge(1994))
console.log(yearsUtilRetirement(1994))
console.log(messageRetirement(1994, "João"))

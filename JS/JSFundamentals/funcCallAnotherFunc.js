const yearsUtilRetirement = birthYear => 65 - (new Date().getFullYear() - birthYear)
const messageRetirement = (birthYear, name) => `${name} retires in ${yearsUtilRetirement(birthYear)} years`

console.log(messageRetirement(1994, "João"))
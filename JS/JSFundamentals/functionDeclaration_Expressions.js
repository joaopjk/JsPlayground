//Function declaration
console.log(calcAge1(1994))
function calcAge1(birthYear) {
    return new Date().getFullYear() - birthYear
}

const calcAge2 = function (birthYear){
    return new Date().getFullYear() - birthYear
}

const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear

const calcAge4 = (birthYear) => {
    return new Date().getFullYear() - birthYear
}

console.log(calcAge1(1994))
console.log(calcAge2(1994))
console.log(calcAge3(1994))
console.log(calcAge4(1994))
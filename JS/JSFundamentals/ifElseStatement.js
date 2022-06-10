const age = 19
const isOldEnough = age >= 18

if (isOldEnough)
    console.log('João can start driving license')
else
    console.log(`João can't start driving license, years left: ${18 - age}`)

const birthYear = 1994;
let century
if (birthYear <= 2000)
    century = 20
else
    century = 21

console.log(century)
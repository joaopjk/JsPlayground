// 5 falsy values : 0,'',undefined, null and NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(''))
console.log(Boolean(NaN))

const money = 0
if (money)
    console.log('Has money')
else
    console.log('Poor guy')

let height
if(height)
    console.log('YAY! height is defined')
else 
    console.log('Height is UNDEFINED')
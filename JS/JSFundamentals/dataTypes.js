/* Primitive data types
    Number : floating point numbers. Used for decimals and integers
    Sting: sequence of characters. Used for text
    Boolean: logical type that can only be true or false. Used for taking decisions
    Undefined: value taken by a variable that is not yet defined('empty value')
    Null : also means 'empty value'
    Symbol (ES2015): value that is unique and cannot be changed
    Bigint(ES2020): large integers than the Number type can hold

    JS has dynamic typing: We do not have to manually define the data type of the value stored in a variable.
    Instead, data types are determined automatically
*/

console.log(true)
let jsIsFun = true
console.log(jsIsFun)

console.log(typeof (jsIsFun))
console.log(typeof jsIsFun)
console.log(typeof 32)
console.log(typeof 'João')

jsIsFun = 'Yes'
console.log(jsIsFun)
console.log(typeof jsIsFun)

let notDefined = undefined
console.log(typeof notDefined)

let year
console.log(year)

year = 1994
console.log(year)
console.log(typeof year)

/*====EXC
    1) Declares variables calles country, continent and populations and assign their values to own country
    (population in millions)
    2) Log thei values to the console
*/
const country = 'Brazil'
const continent = 'South America'
let population = 223000000
console.log(`${country} ${continent} ${population}`)

/*====EXC
    1) Declare a variable called 'isIsland' and set its value to your country. The variable should hold a
    boolean type value. Also declare a variable 'language', but don't assign it any value yet
    2) Log the types of 'isIsland', 'population',country and 'language' to the console
*/
const isIsland = false
let language;

console.log(typeof isIsland)
console.log(typeof population)
console.log(typeof country)
console.log(typeof language)
console.log(typeof continent)

/*====EXC
    1) Se the value of 'language' to the language spoken where you live(some countries have multiple languages
    but choose one)
    2) Think about wich variables should be const variables (wich values will never change, and might change?)
    Then, change these variables to const.
    3) Try to change one of the changed variables now, and observe what happens
*/
language = 'portuguese'
console.log(language)

/* Basic operators
    1) If your country split in half, and each half would contain half the population, then how many people
    would live in each half?
    2) Increase the population of your country by 1 and log result to the console
    3) Finland has a population of 6 million. Does your country have more people than Finland ?
    4) The average population of a country is 33 million people. Does your Country have less than average
    country ?
    5) Bases on the variables your created, create a new variable 'descprition' wich contains a string with
    this format 'Portugal is in Europe, and its 11 millions people speak portugues'
*/

const halfPopulation = population / 2
console.log(halfPopulation)
population++
console.log(population)
const Finland = 6000000
console.log(population > Finland)
const averagePeoplePerCountry = 33000000
console.log(averagePeoplePerCountry > population)
let description = 'Portugal is in Europe, and it 11 million people speak portuguese'
console.log(description)

/* Strings and Template literals
    1) Recreate the 'description' variable from the last assignment, this time using the template literal
    syntax
*/

description = `Portugal is in Europe, and it 11 million people speak portuguese`

/* if else statements
    1) If yout country's population is greater that 33 million, log a string like to the console "Portugal's
    is above average". Otherwise, log a string like "Portugal population is 22 million below average"(The
    22 is the average of 33 minus the country's population)
    2) After checking the result, change the population temporarily to 13 and then to 130. See the different
    results, and set the population back to original
 */
if (population > 33)
    console.log("Brazil's population is above average")
else
    console.log(`Brazil's population is ${33000000 - population} below average`)

/* Type conversion and coecion
    1) Predict the result of these 5 operations without executing them:
    '9' - '5';
    '19' - '13' + '17';
    '19' - '13' + 17;
    '123' < 57;
    5 + 6 + '4' + 9 - 4 - 2;
    2) Execute the operation to check if you were right
 */
console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17)
console.log('123' < 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)

/*
    1) Use a switch statemente to log the following string for the given 'language":
        chinese or mandarian: 'Most number of native speakers!'
        spanish: '2nd place in number of native speakers'
        english: '3rd place'
        hindi: 'Number 4'
        arabic: '5th most spoken language'
        default: 'great language too :D'
 */

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('most number of native speakers')
        break
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break
    case 'english':
        console.log('3rd plance')
        break
    case 'hindi':
        console.log('number 4')
        break
    case 'arabic':
        console.log('5th most spoken language')
        break
    default:
        console.log('great language too :D')
        break
}
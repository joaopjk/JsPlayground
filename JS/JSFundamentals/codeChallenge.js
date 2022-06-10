/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Jones weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

class Body {
    constructor(name, mass, height) {
        this.name = name
        this.mass = mass
        this.height = height
    }

    imc() {
        return (this.mass / (this.height ** 2)).toFixed(2)
    }

    BMIText() {
        return `${this.name} BMI: ${this.imc()}`
    }
}


const mark = new Body('Mark', 78, 1.69)
console.log(mark.BMIText())
const jones = new Body('Jones', 95, 1.88)
console.log(jones.BMIText())

/*
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than Jones's!" or "Jones's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

 */
if (mark.imc() > jones.imc())
    console.log(`Mark's BMI(${mark.imc()}) is higher than Jones's (${jones.imc()})!`)
else
    console.log("Jone's BMI is higjer then Mark's")
/*
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 */

class Team {
    constructor(name) {
        this.name = name
        this._scores = []
    }

    addScore(...score) {
        this._scores = score
    }

    calcAverage() {
        const soma = this._scores.reduce((t, n) => t + n,0)
        return (soma / this._scores.length).toFixed(2)
    }
}

let doplhins = new Team('Dolphins')
doplhins.addScore(96, 108, 89)
let koalas = new Team('Koalas')
koalas.addScore(88, 91, 110)
console.log((doplhins.calcAverage() > koalas.calcAverage() ? "Dolphins" : "Koalas") + " win thins series ")

doplhins = new Team('Dolphins')
doplhins.addScore(97, 112, 101)
koalas = new Team('Koalas')
koalas.addScore(109, 95, 123)
console.log((doplhins.calcAverage() > koalas.calcAverage() ? "Dolphins" : "Koalas") + " win thins series ")

doplhins = new Team('Dolphins')
doplhins.addScore(1150, 112, 101)
koalas = new Team('Koalas')
koalas.addScore(109, 95, 106)
console.log((doplhins.calcAverage() > koalas.calcAverage() ? "Dolphins" : "Koalas") + " win thins series ")

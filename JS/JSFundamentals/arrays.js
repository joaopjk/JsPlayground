const friends = ['João', 'Francini', 'Jucemie', 'Sousa']

console.log(typeof friends)
console.log(Array.isArray(friends))
console.log(friends)

const years = [1991, 1992, 1993, 1994]
//console.log(years)

//First element in array
console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length - 1])

friends[3] = "Cicero"
friends[4] = "Paulo"
console.log(friends)

friends.push('Camila')
console.log(friends)
friends.unshift('Camila')
friends.shift() // Remove de first item in array
console.log(friends)
console.log(friends.indexOf('João'))
console.log(friends.includes('João'))

const name = friends.pop()
console.log(name)

const joao = ['João', 'Cicero', new Date().getFullYear() - 1994, true, friends]
console.log(joao)

const calcAge = (birthYear) => new Date().getFullYear() - birthYear
const listAges = []

years.map(e => {
    listAges.push(calcAge(e))
})
console.log(listAges)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3])]
console.log(ages)
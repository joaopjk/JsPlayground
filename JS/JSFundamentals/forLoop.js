for (let i = 1; i <= 10; i++) {
    console.log(`Lifting wights repetition ${i}`)
}

const joao = [
    'João',
    'Cícero',
    'Vicente',
    'Sousa',
    1994,
    ['Jucemie', 'Francini', 'Wellington'],
    true
]
const types = []

for (let i = 0; i < joao.length; i++) {
    console.log(joao[i], typeof joao[i])
    types[i] = typeof joao[i]
}

console.log(types)

const ages = [1991, 1992, 1994, 1995, 2002, 2008]
const arrayAges = []

for (let i = 0; i < ages.length; i++) {
    console.log(2021 - ages[i])
    arrayAges.push(2021 - ages[i])
}

console.log(arrayAges)

//continue and break
for (let i =0;i<100;i++){
    if(i%2===0)
        console.log('Something')
    else if(i ===99)
        continue // This continue
    else
        break
}
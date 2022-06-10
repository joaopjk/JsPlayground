function logger() {
    console.log("Logger function")
}

const loggerName = (name) => {
    console.log(name)
}

function fruitProcessor(fruit) {
    console.log(fruit)
    return `Juice with ${fruit}`
}

logger()
loggerName('João')
console.log(fruitProcessor('apple'))
const hasDriverLicense = true
const hasGoodVision = true

console.log(hasDriverLicense && hasGoodVision)//True
console.log(hasDriverLicense && hasGoodVision && false) //False
console.log(hasDriverLicense || false) //True
console.log(hasDriverLicense && !false)

const shouldDrive = hasDriverLicense && hasDriverLicense

if (shouldDrive) console.log("João is able to drive")
else console.log('Someone else should drive')

console.log(hasDriverLicense || hasDriverLicense || true)
console.log(hasDriverLicense && hasDriverLicense && !false)
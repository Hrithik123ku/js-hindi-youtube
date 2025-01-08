let score = "33"
let valueofScore = Number(score)
console.log(valueofScore)
console.log(typeof valueofScore)  // number


let score1 = "33abc"
let value = Number(score1)
console.log(value)
console.log(typeof value)  // NaN

let score2 = null
let value1 = Number(score2)
console.log(value1)
console.log(typeof value1) // 0

let score3 = undefined
let value2 = Number(score3)
console.log(value2)
console.log(typeof value2) // NaN

let score4 = true
let value3 = Number(score4)
console.log(value3)
console.log(typeof value3) // 1

let score5 = "hrithik"
let value4 = Number(score5)
console.log(value4)
console.log(typeof value4) // NaN

let score6 = null
let value5 = Boolean(score6)
console.log(value5)

let score7 = undefined
let value6 = Boolean(score7)
console.log(value6)


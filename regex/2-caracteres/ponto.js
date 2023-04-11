const helper = '>>>>>>>>>'
const baseText = '1,2,3,4,5,6,7,8,9,0'


const regexLiteralOneAnyLiteralLiteralTwo = /1.2/g
console.log(`${helper} Found '1.2':`)
console.log(baseText.match(regexLiteralOneAnyLiteralLiteralTwo))
console.log(``)

const regexLiteralOneAnyLiteralAnyLiteralLiteralTwo = /1..2/g
console.log(`${helper} Not found:`)
console.log(baseText.match(regexLiteralOneAnyLiteralAnyLiteralLiteralTwo))
console.log(``)

const regexLiteralOneAnyLiteralAnyLiteralLiteralComma = /1..,/g
console.log(`${helper} Found '1,2,'`)
console.log(baseText.match(regexLiteralOneAnyLiteralAnyLiteralLiteralComma))
console.log(``)

const baseTextGrade = '8.3,7.1,8.8,10.0'

const regexLiteralEightAnyLiteralAnyLiteral = /8../g
console.log(`${helper} Found '8.3 8.8':`)
console.log(baseTextGrade.match(regexLiteralEightAnyLiteralAnyLiteral))
console.log(``)

const regexAnyLiteralLiteralDotAnyLiteral = /.\../g
console.log(`${helper} Found '8.3 7.1 8.8 0.0':`)
console.log(baseTextGrade.match(regexAnyLiteralLiteralDotAnyLiteral))
console.log(``)
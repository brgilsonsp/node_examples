const helper = '>>>>>>>>>'
const baseText = '1,2,3,4,5,6,7,a.b c!d?e'

const regexJustComma = /,/
console.log(`${helper} Made array split by:`)
console.log(baseText.split(regexJustComma))
console.log(``)
console.log(`${helper} Found just one comma:`)
console.log(baseText.match(regexJustComma))
console.log(``)


const regexGlobalComma = /,/g
console.log(`${helper} Found all commas (7 in total):`)
console.log(baseText.match(regexGlobalComma))
console.log(``)

const regexGlobalLiteralA = /A/g
console.log(`${helper} Not found, because in baseText hasn't letter A upper case:`)
console.log(baseText.match(regexGlobalLiteralA))
console.log(``)

const regexGlobalAndCaseInsensitiveLiteralA = /A/gi
console.log(`${helper} Found one literal 'A':`)
console.log(baseText.match(regexGlobalAndCaseInsensitiveLiteralA))
console.log(``)

const regexGlobalLiteral2 = /2/gi
console.log(`${helper} Found one literal '2':`)
console.log(baseText.match(regexGlobalLiteral2))
console.log(``)

const regexPhrase = /a.b c!/gi
console.log(`${helper} Found one literal 'a.b c!':`)
console.log(baseText.match(regexPhrase))
console.log(``)
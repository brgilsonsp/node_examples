const helper = '>>>>>>>>>'
const baseText = '1,2,3,4,5,6,7,a.b c!d?e'

const regexDot = /\./
console.log(`${helper} Made array split by dot:`)
console.log(baseText.split(regexDot))
console.log(``)

const regexGlobalCommaOrDotOrInterrogationOrExclamationOrSpace = /,|\.|\?|!| /g
console.log(`${helper} Split ny Comma Or Dot Or Interrogation Or Exclamation Or whitespace:`)
console.log(baseText.split(regexGlobalCommaOrDotOrInterrogationOrExclamationOrSpace))
console.log(``)
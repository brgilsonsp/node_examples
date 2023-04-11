const helper = '>>>>>>>>>'
const baseText = 'a©ýh'

console.log(`${helper} '\\00A9 e \\00FD':`)
console.log(baseText.match(/\u00A9|\u00FD/g))
console.log(``)
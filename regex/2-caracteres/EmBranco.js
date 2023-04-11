const helper = '>>>>>>>>>'
const baseText = `
ca	r
r	o s!
`

const regexTabOrNewLineOrEmpty = /\t|\n|\s/g
console.log(`${helper} Found six references:`)
console.log(baseText.match(regexTabOrNewLineOrEmpty))
console.log(``)
console.log(`${helper} Word 'carros':`)
console.log(baseText.replace(regexTabOrNewLineOrEmpty, ''))
console.log(``)
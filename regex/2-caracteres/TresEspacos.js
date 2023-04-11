const helper = '>>>>>>>>>'
const baseText = 'a   b'

console.log(`${helper} Using 3x '\\s':`)
console.log(baseText.match(/a\s\s\sb/))
console.log(``)

console.log(`${helper} Using 3x ' ':`)
console.log(baseText.match(/a   b/))
console.log(``)

console.log(`${helper} Using 3x '.':`)
console.log(baseText.match(/a...b/))
console.log(``)

console.log(`${helper} Using '\\s*':`)
console.log(baseText.match(/a\s*b/))
console.log(``)

console.log(`${helper} Using ' *':`)
console.log(baseText.match(/a *b/))
console.log(``)

console.log(`${helper} Using '\\s+':`)
console.log(baseText.match(/a\s+b/))
console.log(``)

console.log(`${helper} Using ' +':`)
console.log(baseText.match(/a +b/))
console.log(``)

console.log(`${helper} Using '\\s{n,m}':`)
console.log(baseText.match(/a\s{3}b/))
console.log(``)

console.log(`${helper} Using ' {n,m}':`)
console.log(baseText.match(/a {3}b/))
console.log(``)
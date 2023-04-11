const helper = '>>>>>>>>>'
const baseText = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

const regexReferencesDotMp3 = /\.mp3/g
console.log(`${helper} Found four references:`)
console.log(baseText.match(regexReferencesDotMp3))
console.log(``)
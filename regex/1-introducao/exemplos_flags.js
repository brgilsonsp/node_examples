const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

//Criando a regex, nosso padrão irá procurar o '9'
const regexNove = RegExp('9')

console.log('Métodos da RegExp')
console.log('-------------------------------')
console.log(' >>>>>>>>>>>> test')
console.log(regexNove.test(texto))
console.log(' >>>>>>>>>>>> exec')
console.log(regexNove.exec(texto))
console.log("###################################################")
console.log("")


const regexLetras = /[a-d]/ig
console.log('Métodos da String')
console.log('-------------------------------')
console.log(' >>>>>>>>>>>> match')
console.log(texto.match(regexLetras))
console.log(' >>>>>>>>>>>> search, exibe a partir do índice que encontrou o padrão')
console.log(texto.search(regexLetras))
console.log(' >>>>>>>>>>>> replace')
console.log(texto.replace(regexLetras, "Found"))
console.log(' >>>>>>>>>>>> split')
console.log(texto.split(regexLetras))


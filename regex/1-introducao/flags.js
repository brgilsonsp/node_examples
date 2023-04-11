const texto = 'Carlos assinou o abaixo-assinado.'

//Deve encontrar apenas o 'C', não possui nenhum flag
console.log(texto.match(/C|ab/))

//Deve encontrar apenas o 'C', apesar do padrão ser 'c', minusculo, estamos usando a flah 'i'
console.log(texto.match(/c|ab/i))

//Deve encontrar o 'C' e o 'ab', estamos usando a flah 'i' e a flag 'g', global, que retorna 
//todas as ocorrências definida na regex
console.log(texto.match(/c|ab/ig))

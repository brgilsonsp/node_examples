# Regex

Conteúdo aprendido no curso [Fundamentos Regex](https://itau.udemy.com/course/curso-regex).
</br>
Consulte a [apostila](./apostila-regex.pdf)
<br/>

Para criar a sua expressão, utilizar o `/<SUA_EXPRESSAO>/`, por exemplo

```javascript
"texto".match(/x/)
```
Esse exemplo vai procurar o caracter `x` minusculo em `"texto"`

## Flags
São parâmetros que passamos para o nosso regex afim de definir escopo:

* **i** - case-insensite
* **g** - global, procura a sua regex em todo o texto
* **** - 

## Metacaracter

#### Representantes
| Metacaracter      | Nome              | Sginificado       |
| ----------------- | ----------------- | ----------------- |
| .                 | Ponto             | Um caractere qualquer, válido apenas para um posição |
| []                | Conjunto          | Conjunto de caracteres permitidos |
| [^]               | Conjunto negado   | Conjunto de caracteres negado |

#### Quantificadores
| Metacaracter      | Nome              | Sginificado       |
| ----------------- | ----------------- | ----------------- |
| ?                 | Opcional          | Zero ou um caracter |
| *                 | Asterisco         | Zero ou mais caracteres |
| +                 | Mais              | Um ou mais caracteres |
| {n, m}            | Chaves            | De n até m caracteres |

#### Âncoras - Delimitadores
| Metacaracter      | Nome              | Sginificado       |
| ----------------- | ----------------- | ----------------- |
| ^                 | Circunflexo       | Início de linha |
| $                 | Cifrão            | Fim de linha |
| \b                | Borda             | Iníco ou fim de palavra |

#### Outros
| Metacaracter      | Nome              | Sginificado       |
| ----------------- | ----------------- | ----------------- |
| \                 | Escape            | Uso de metacaracteres como literal |
| |                 | Ou                | Operação de OU |
| ( )               | Grupo             | Define um grupo |
| \1...\9           | Retroviso         | Resgata grupos já definidos |

#### Brancos com escape
| Metacaracter      | Nome              | Sginificado       |
| ----------------- | ----------------- | ----------------- |
| \t                | Tabulação         | Representa um tab |
| \n                | nova linha        | Representa uma nova linha no texto |
| \s                | Espaço em branco  | Representa um espaço em branco. O espaço em branco, ' ', tem o mesmo significado |


## Unicode

No início da computação utilizávamos um byte, que são 8 bits. Nesse caso conseguiríamos mapear até 256 caracteres. Com isso mapeávamos poucos símbolos, poucas pontuações, letras maíusculas (A-Z) e minúsculas (a-z) e os dígitos (0-9).
<br/>
Posteriomente começamos a utilizar dois bytes(16 bits). Com isso ganhamos o poder de mapear até 65534 caracteres.
<br/>
Mas isso não foi o suficiente. Sendo assim foi adotado a quantidade de bytes variável, permitindo expandir até mais de 1MM.
<br/>
Podemos verificar os caracteres unidores no [site](https://old.unicode-table.com/)

Para utilizar o código **Unicode** na receita, utilize
```\u<CODE>```, por exemplo para pesquisar o ```©``` faça ```\u00A9```
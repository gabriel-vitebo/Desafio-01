let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo 
const resDiv = numberOne % numberTwo 
const sumRestDiv = sum % 2
const isEqual = numberOne == numberTwo 

alert(`O resultado da soma é ${sum}`)
alert(`O resultado da subtração é ${sub}`)
alert(`O resultado da multiplicação é ${multi}`)
alert(`O resultado da divisão é ${div.toFixed(2)}`)
alert(`O resultado do resto da divisão é ${resDiv}`)

if(sumRestDiv == 0) {
    alert("A soma dos dois númeors é par")
}else {
    alert("A soma dos dois númeors é impar")
}

if(isEqual) {
    alert("Os dois números são iguais")
}else {
    alert("Os dois números são diferentes")
}


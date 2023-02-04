/*
Por fim criamos uma calculadora com tudo que já foi repassado anteriormente.
*/

function fn_somar () {
    primeiroNumero = prompt("Digite o primeiro número: ")
    segundoNumero = prompt("Digite o segundo número: ")

    resultado = primeiroNumero+segundoNumero

    alert(`O resultado é ${resultado}`)
}

function fn_subtrair () {
    primeiroNumero = prompt("Digite o primeiro número: ")
    segundoNumero = prompt("Digite o segundo número: ")

    resultado = primeiroNumero-segundoNumero

    alert(`O resultado é ${resultado}`)
}

function fn_multiplicar () {
    primeiroNumero = prompt("Digite o primeiro número: ")
    segundoNumero = prompt("Digite o segundo número: ")

    resultado = primeiroNumero*segundoNumero

    alert(`O resultado é ${resultado}`)
}

function fn_dividir() {
    primeiroNumero = prompt("Digite o primeiro número: ")
    segundoNumero = prompt("Digite o segundo número: ")

    resultado = primeiroNumero/segundoNumero

    alert(`O resultado é ${resultado}`)
}

let inicioCalculadora = "soma"

while(inicioCalculadora != "sair") {

inicioCalculadora = prompt("Com qual operação você deseja trabalhar? 'soma', 'subtração', 'multiplicação', 'divisão', ou deseja 'sair' ?");

switch (inicioCalculadora) {
    case 'soma':
        fn_somar();
    break;    
    case 'subtração': 
        fn_subtrair();
    break;
    case 'multiplicação': 
        fn_multiplicar();
    break;
    case 'divisão': 
        fn_dividir();
    break;
    case 'sair': 
        alert(`Até a próxima, obrigado por usar nossa calculadora`)
    break;
    default:
        alert(`Sua resposta ${inicioCalculadora} não se encaixa com nenhuma opção, tente novamente.`)
}
}

// Com o IF, nesse caso você economizaria algumas linhas 
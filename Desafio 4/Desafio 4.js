/*
Melhorando o código com a utilização de funções.
Aqui temos o desafio de adivinha o número aleatoriamente escolhido entre 0 a 10, com a quantidade de chances que você desejar.
*/

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
  }

let numeroAleatorio = getRandomInt()

let chutesRestante = prompt("Quantos chances você desejar ter? ")

console.log(numeroAleatorio) //Colinha hehe

while (chutesRestante >= 1) {

    let numeroChute = prompt("Qual numero você deseja chutar ?");
    chutesRestante --

if (numeroChute == numeroAleatorio)
    {
        alert("Parabéns, você acertou!!!");
        break   
    }
    
else if (chutesRestante > 0 && numeroChute < numeroAleatorio) {
        alert(`Tente novamente, chances restante ${chutesRestante}. Chute um pouco mais alto :)`);
}

else if (chutesRestante > 0 && numeroChute > numeroAleatorio) {
    alert(`Tente novamente, chances restante ${chutesRestante}. Chute um pouco mais baixo :) `);
}

else alert(`Ahh que pena, o número inicial era ${numeroAleatorio}`)

}
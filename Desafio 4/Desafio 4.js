    function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
  }

let numeroAleatorio = getRandomInt()

let chutesRestante = 3

console.log(numeroAleatorio) //Colinha hehe

while (chutesRestante >= 1) {

    let numeroChute = prompt("Qual numero você deseja chutar ?");
    chutesRestante --

if (numeroChute == numeroAleatorio)
    {
        alert("Parabéns, você acertou!!!");
        break   
    }
    
else if (chutesRestante > 0) {
        alert(`Tente novamente, chances restante ${chutesRestante}`);
}

else alert(`Ahh que pena, o número inicial era ${numeroAleatorio}`)

}
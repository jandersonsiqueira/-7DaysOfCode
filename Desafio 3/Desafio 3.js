const pergunta1 = prompt("Qual área deseja seguir ? Front-End ou Back-End?");

if (pergunta1 == "Front-End") {
    const adicional1 = prompt("Você deseja aprender React ou Vue?");
    switch (adicional1) {
        case 'React':
        case 'Vue': 
            alert(`O framework ${adicional1} é muito bom mesmo.`)
        break;
        default:
            alert(`Sua resposta ${adicional1} não se encaixa.`)
    }
}

else if (pergunta1 == "Back-End") {
    const adicional1 = prompt("Você deseja aprender Java ou C#?");
    switch (adicional1) {
        case 'Java':
        case 'C#': 
            alert(`A linguagem ${adicional1} é muito bom mesmo.`)
        break;
        default:
            alert(`Sua resposta ${adicional1} não se encaixa.`)
    }
}

else   {
    alert(`Opa, tem algo errado`)
}


const msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
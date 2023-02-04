/*
Nesse desafio temos a missão de criar uma lista de compras e classificar de acordo com sua categoria.
Aqui trabalhamos com a utilização de listas, e o método push para inserir o dado na minha lista.
*/

let frutas = [];
let massas = [];
let doces = [];
let frios = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim"; 
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    while (adicionarMais != "sim" && adicionarMais != "não") { 
	alert(`Operação não reconhecida!`);
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. Digite 'remover' para retirar algum item.");
    }
	
    if (adicionarMais === "não"){  
        break;
    }
	
    comida = prompt("Qual comida você deseja inserir?");
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'massas', 'doces' ou 'frios'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'massas'){
            massas.push(comida);
        } else if (categoria === 'doces'){
            doces.push(comida);
        } else if (categoria === 'frios'){
            frios.push(comida);
        } else {
            alert("Essa categoria não foi pré-definida.")
        }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Massas: ${massas}\n  Doces: ${doces}\n  Frios: ${frios}`);
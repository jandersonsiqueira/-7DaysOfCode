/*
Continuando o desafio, aqui criamos a opção de remover a fruta e utilizando umas funções para otimizar o código.
*/

function removerItemDaLista () {

    remover = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${massas}\n  Doces: ${doces}\n  Congelados: ${frios}\n\nQual produto você deseja remover?`);
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(massas.indexOf(remover) != -1){
			massas.splice(massas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (frios.indexOf(remover) != -1){
			frios.splice(frios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}

}

function verificaListasVazias() {
    while (adicionarMais == "remover"){

        if (adicionarMais == "remover" && frutas,massas,doces,frios.length === 0) {
            adicionarMais = prompt("Você não tem itens, deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. ");
        }
        else {
            removerItemDaLista();
        }
    }
}

let frutas = [];
let massas = [];
let doces = [];
let frios = [];
let comida = "";
let categoria = "";

let adicionarMais = "sim"; 
while(adicionarMais != "não"){
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. Digite 'remover' para retirar algum item.");

    verificaListasVazias();


    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") { 
	alert(`Operação não reconhecida!`);
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'. Digite 'remover' para retirar algum item.");

    verificaListasVazias();


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
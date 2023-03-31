/*
Faça um programa para calcular o valor de uma viagem

Você tera 3 Variaveis. Sendo elas:
1 - PReço Etanol
2- Preço gasolina
3 - Tipo Combustivel
4 - Gasto medio de combustivel por km
5 - Distancia em km da viagem;
 Imprima no console o valor que sera gasto para realizar esta viagem
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'GASOLINA';
const gastoMedio = 10;
const distancia = 100;

combustivelNecessario =  distancia / gastoMedio;

if( tipoCombustivel === 'GASOLINA'){
   calculoFinal = combustivelNecessario * precoGasolina;

   console.log("Total da Viagem em Gasolina eh: " + calculoFinal.toFixed(2));
}else if(tipoCombustivel === 'ETANOL'){
   calculoFinal = combustivelNecessario * precoEtanol;

   console.log("Total da Viagem em Etanol eh: " + calculoFinal.toFixed(2));
}else {
    console.log("Combustivel invalido");
}
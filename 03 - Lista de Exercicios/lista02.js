/*
2) O IMC - Indice de Massa Corporal é um criterio da organização Mundial da Saude para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adultu mostre sua condição de acordo com a
tabela abaixo:

IMC em adultos condição

 - Abaixo de 18.5 abaixo do peso;
 - Entre 18.5 e 25 peso normal;
 - Entre 25 e 30 acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;
*/

const peso = 75;
const altura = 1.75;
imc = peso / Math.pow(altura, 2);


console.log("Resultado do seu IMC é: " + imc.toFixed(2));

if(imc < 18.5){
    console.log("Você esta abaixo do peso");
} else if(imc >= 18.5 && imc < 25){
    console.log("Você esta no seu peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Você esta acima do peso");
} else if(imc >= 30 && imc < 40) {
    console.log("Você esta Obeso");
} else {
    console.log("Você esta na Obesidade GRAVE, favor procurar um médico");
}

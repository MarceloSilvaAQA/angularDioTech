/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, consideranco o preço normal de 
etiqueta e a escolha da condição de pagamento.
utilize os codigos ta tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
aquequado.

Código condição de pagamento:
1 - À vista Debito, recebe 10% de desconto;
2 - Á vista no Dinheiro ou PIX, recebe 15% de Desconto.
3 - Em duas vezes, Preço normal de etiqueta sem juros.
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const preco = 100;
const condicaoPagamento = 4;

if(condicaoPagamento === 1){
    console.log("Valor a pagar é: R$ " + (preco - (preco * 0.1).toFixed(2)));
} else if(condicaoPagamento === 2) {
    console.log("Valor a pagar é: R$ " + (preco - (preco * 0.15).toFixed(2)));
}else if(condicaoPagamento === 3){
    console.log("Valor a pagar é: R$ " + preco.toFixed(2));
} else if(condicaoPagamento === 4) {
    console.log("Valor a pagar é: R$ " + (preco + (preco * 0.1)).toFixed(2));
} else {
    console.log("Condição de pagamento Inválido");
}

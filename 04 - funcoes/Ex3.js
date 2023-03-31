/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, consideranco o preço normal de 
etiqueta e a escolha da condição de pagamento.
utilize os codigos ta tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
aquequado.

Código condição de pagamento:
1 - À vista Debito, recebe 10% de desconto;
2 - Á vista no Dinheiro ou PIX, recebe 15% de Desconto.
3 - Em duas vezes, Preço normal de etiqueta sem juros.
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function main (){
    console.log(definirTotalPagamento(3, 100));
}

function aplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
    return (valor + (valor * (juros / 100)));
}


function definirTotalPagamento(condPagamento, preco){

    if(condPagamento === 1){
        return 'Valor a pagar é: R$ ' + aplicarDesconto(preco, 10).toFixed(2);
    } else if(condPagamento === 2) {
        return 'Valor a pagar é: R$ ' + aplicarDesconto(preco, 10).toFixed(2);
    }else if(condPagamento === 3){
        return 'Valor a pagar é: R$ ' + preco.toFixed(2);
    } else if(condPagamento === 4) {
        return 'Valor a pagar é: R$ ' + aplicarJuros(preco, 10).toFixed(2);
    } else {
        return 'Condição de pagamento Inválido';
    }
}

main();
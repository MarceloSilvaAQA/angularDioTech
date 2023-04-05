/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto medio de combustivel por kilometro rodado.
Crie um metodo que dado a quantidade de quilometros e o preço do combustives nos de o valor gasto
em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }    

    calculoViagem(distancia, valorCombustivel){
        return distancia * this.gastoMedio * valorCombustivel;
    }
}

const uno = new Carro('FIAT', 'Azul', 1/12);
const palio = new Carro('FIAT', 'Preto', 1/10);

console.log(uno.calculoViagem(70, 5.00).toFixed(2));
console.log(palio.calculoViagem(70, 5.00).toFixed(2));



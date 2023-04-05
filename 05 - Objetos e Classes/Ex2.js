/*
Crie uma classe para representar pessoas
Para cada pessoa teremos os atributos nome, peso e altura;
As pessoas devem ter capacidade de dizer o valor do seu IMC (IMC = Peso/ (altura * altura));
Instacia uma pessoa chamada jose que tenha 70 kg de peso e 1,75 de altura e peça ao jose para dizer
o valor do seu imc
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
    return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
      const imc =   this.calcularImc();
        if(imc < 18.5){
            return 'Você esta abaixo do peso';
        } else if(imc >= 18.5 && imc < 25){
            return 'Você esta no seu peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Você esta acima do peso';
        } else if(imc >= 30 && imc < 40) {
            return 'Você esta Obeso';
        } else {
            return  'Você esta na Obesidade GRAVE, favor procurar um médico';
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);


console.log(jose.classificarImc());
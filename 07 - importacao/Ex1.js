
/*
 Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
 Faça um programa que recebe os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

 Dados de entrada:
 5
 50
 10
 98
 23

 Saída:
 98
*/

const {gets, print} = require('./funcoes-auxiliares2');

const quantidadeDeAlunos = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numerosSorteado = gets();
   if(numerosSorteado > maiorValor){
    maiorValor = numerosSorteado;
   }   
}

print(maiorValor);

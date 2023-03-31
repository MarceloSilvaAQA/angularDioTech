/*
Escreva uma funcão que verifica se você é maior de idade;
*/

function main(){
    const idade = 17; 

    console.log(verificarIdade(idade));
}


function verificarIdade(idade){
    if(idade >= 18){
        return 'Você é maior de idade';
    } else {
        return 'Você é menor de idade';
    }
}



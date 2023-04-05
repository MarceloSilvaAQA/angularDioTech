const entradas = [5, 50, 103, 100, 101, 102];
let i = 0;


function gets(){
    const valor = entradas[i];
    i++;
 return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print};
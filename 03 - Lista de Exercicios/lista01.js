/*
1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semetre da faculdade calcule e
imprima a media e a sua classificação conforme a  tabela aabaixo:

Média = (nota1 + nota2 + nota 3 ) / 3

Classificação
- Média menor que 5, reprovação
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 7;
const nota2 = 8;
const nota3 = 7;

mediaNota = (nota1 + nota2 + nota3) / 3;

if(mediaNota < 5) {
    console.log(mediaNota.toFixed(2) + " Reprovado");
} else if(mediaNota >= 5 && mediaNota <= 7) {
    console.log(mediaNota.toFixed(2) + " Recuperacao");          
} else{
    console.log(mediaNota.toFixed(2) + " Aprovado");
}

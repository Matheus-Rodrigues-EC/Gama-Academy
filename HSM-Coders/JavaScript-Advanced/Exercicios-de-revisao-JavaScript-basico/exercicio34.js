// Crie um algoritimo que receba 3 notas de um aluno, calcule sua média
// e mostre as sehuintes mensagens de acordo com a situação
// Media maior que 7 - Aprovado
// Media maior e igual a 5 e menor que 7 - recuperção
// Media menor que 5 - Reprovado

let n1, n2, n3, media;

function calculaMedia(n1, n2, n3){

    media = (n1 + n2+ n3) / 3;

    if(media >= 7){
        console.log("Aprovado");
    }else if(media >=5 && media < 7){
        console.log("Recuperação");
    }else{
        console.log("Reprovado");
    }
}

calculaMedia(9, 5, 7);
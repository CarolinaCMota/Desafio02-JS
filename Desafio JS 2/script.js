//O uso de [ ] em JavaScript é uma notação para criar um array, 
//que é uma estrutura de dados que armazena uma coleção ordenada de 
//elementos.

let estudantes = [
    { nome: "João", nota1: 5, nota2: 3 },
    { nome: "Maria", nota1: 7, nota2: 6 },
    { nome: "Pedro", nota1: 5, nota2: 8 },
    { nome: "Carolina", nota1: 10, nota2: 9},
    { nome: "Chloe", nota1: 7, nota2: 6}
]

//usei let para que possa adicionar ou remover pessoas da lista. 
//Usaria const se a lista fosse fixa.

function calcularMedia(estudante) {
    return (estudante.nota1 + estudante.nota2) / 2;
}

function verificarSucesso(estudante) {
    const media = calcularMedia(estudante);
    const notaMinima = 6;

    if (media >= notaMinima) {
        alert(`${estudante.nome}, parabéns! Você passou. Média: ${media}`);
    } else {
        alert(`${estudante.nome}, sinto muito. Estude para a recuperação. Média: ${media}`);
    }
}

estudantes.forEach(verificarSucesso);
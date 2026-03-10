const calcularMedia = function (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3)/3;
}

function emitirNota(media) {
    console.log("A média do aluno foi: " + media.toFixed(2))
    if (media >= 7) {
        console.log("------O aluno foi aprovado!------")
    }
    else {
        console.log("------O aluno foi reprovado!------")
    }
}

let media = calcularMedia(4, 8, 2)
emitirNota(media)
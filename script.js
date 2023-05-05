const inAluno = document.getElementById('inAluno');
const inNota1 = document.getElementById('inNota1');
const inNota2 = document.getElementById('inNota2');
const btMedia = document.getElementById('btMedia');
const outMediaNotas = document.getElementById('outMediaNotas');
const outSituacao = document.getElementById('outSituacao');

function calcularMedia () {
    let nome = inAluno.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2;

    outMediaNotas.textContent = `Média das notas: ${media.toFixed(1)}`;

    if(media >= 7) {
        outSituacao.textContent = `Parabéns ${nome}! Você foi aprovado(a) :)`;
        outSituacao.style.color = "green";
    } else if (media >= 6){
        outSituacao.textContent = `Atenção, ${nome}! Você está em exame`;
        outSituacao.style.color = "yellow";
    }else {
        outSituacao.textContent = `Ops ${nome}, infelizmente não foi dessa vez :(`;
        outSituacao.style.color = "red";
    }

}

btMedia.addEventListener('click', calcularMedia);
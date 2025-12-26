function processarScoreEmocional() {
    // Coleta os valores de todas as 8 perguntas
    const notas = [
        parseInt(document.getElementById('q1').value),
        parseInt(document.getElementById('q2').value),
        parseInt(document.getElementById('q3').value),
        parseInt(document.getElementById('q4').value),
        parseInt(document.getElementById('q5').value),
        parseInt(document.getElementById('q6').value),
        parseInt(document.getElementById('q7').value), // Q7 integrada
        parseInt(document.getElementById('q8').value)
    ];

    // Soma e transforma em CENTENAS (Peso 12.5 por ponto)
    // Ex: Se todas forem nota 10, soma 80. 80 * 12.5 = 1000 (Ponteiro no máximo)
    const somaTotal = notas.reduce((a, b) => a + b, 0);
    const scoreCentenal = somaTotal * 12.5;
    const notaMC = scoreCentenal / 100;

    // Move o ponteiro no medidor visual
    atualizarInterface(scoreCentenal, notaMC);
}

function atualizarInterface(valor, nota) {
    // Aqui o código envia o comando para o ponteiro girar
    const ponteiro = document.querySelector('.ponteiro'); 
    const angulo = (valor / 1000) * 180; // Converte o score em graus de rotação
    
    ponteiro.style.transform = `rotate(${angulo}deg)`;
    
    // Mostra o valor centenal (ex: 750) e a nota (ex: 7.5)
    document.getElementById('display-centenal').innerText = valor;
    document.getElementById('display-nota-mc').innerText = nota.toFixed(1);
}
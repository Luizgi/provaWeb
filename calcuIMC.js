function analisarIMCs(listaIMCs) {
    var terminou = false;
    var totalPessoas = 0;
    var somaIMCs = 0;
    var maiorIMC = 0;

    while (!terminou) {
        totalPessoas++;
        var peso = parseFloat(prompt('Qual é o seu peso?'));
        var altura = parseFloat(prompt('Qual é a sua altura?'));
        var imc = peso / altura ** 2;
        somaIMCs += imc;
        alert('Seu IMC é: ' + imc);

        if (imc > maiorIMC) {
            maiorIMC = imc;
        }

        var mediaIMC = (somaIMCs / totalPessoas).toFixed(2);

        var desejaTerminar = prompt('Deseja encerrar? (S)im ou (N)ão');
        if (desejaTerminar.toLowerCase() === 's') {
            terminou = true;
            alert(`Programa encerrado.
Usuário com maior IMC: ${maiorIMC}
Quantidade de pessoas avaliadas: ${totalPessoas}
Média dos IMCs: ${mediaIMC}`);
        }
    }
}

analisarIMCs();

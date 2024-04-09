function iniciarContagemRegressiva() {
    const dataLancamento = new Date('2024-04-08T12:00:00').getTime();

    let contadorInterval = setInterval(function() {
        const agora = new Date().getTime();
        
        const tempoRestante = dataLancamento - agora;
        
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
        
        document.getElementById("contador").innerHTML = "Contagem regressiva para o lançamento:<br>" + 
            dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
        
        if (tempoRestante < 0) {
            clearInterval(contadorInterval); 
            document.getElementById("contador").innerHTML = "Lançamento!";
        }
    }, 1000);
}
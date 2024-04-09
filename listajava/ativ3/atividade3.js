function calcularBalanço() {
    let ganhoAnual = 0;
    let gastoAnual = 0;

    let dadosMensais = [
        { mes: "Janeiro", ganho: 0, gasto: 0 },
        { mes: "Fevereiro", ganho: 0, gasto: 0 },
        { mes: "Março", ganho: 0, gasto: 0 },
        { mes: "Abril", ganho: 0, gasto: 0 },
        { mes: "Maio", ganho: 0, gasto: 0 },
        { mes: "Junho", ganho: 0, gasto: 0 },
        { mes: "Julho", ganho: 0, gasto: 0 },
        { mes: "Agosto", ganho: 0, gasto: 0 },
        { mes: "Setembro", ganho: 0, gasto: 0 },
        { mes: "Outubro", ganho: 0, gasto: 0 },
        { mes: "Novembro", ganho: 0, gasto: 0 },
        { mes: "Dezembro", ganho: 0, gasto: 0 }
    ];

    for (let i = 0; i < dadosMensais.length; i++) {
        dadosMensais[i].ganho = parseFloat(prompt("Informe o ganho bruto para " + dadosMensais[i].mes));
        dadosMensais[i].gasto = parseFloat(prompt("Informe os gastos para " + dadosMensais[i].mes));

        ganhoAnual += dadosMensais[i].ganho;
        gastoAnual += dadosMensais[i].gasto;
    }

    let saldoFinanceiro = ganhoAnual - gastoAnual;

    document.getElementById("resultado").innerHTML = "Ganho Bruto Anual: R$ " + ganhoAnual.toFixed(2) + "<br>" +
        "Gastos Anuais: R$ " + gastoAnual.toFixed(2) + "<br>" +
        "Saldo Financeiro: R$ " + saldoFinanceiro.toFixed(2) + "<br>";

    if (saldoFinanceiro > 0) {
        document.getElementById("resultado").innerHTML += "A empresa teve lucro no ano.";
    } else if (saldoFinanceiro < 0) {
        document.getElementById("resultado").innerHTML += "A empresa teve prejuízo no ano.";
    } else {
        document.getElementById("resultado").innerHTML += "A empresa não teve lucro nem prejuízo no ano.";
    }
}
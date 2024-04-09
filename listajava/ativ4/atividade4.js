function ordenarDecrescente() {
    var valores = [];

    for (var i = 1; i <= 4; i++) {
        var valor = parseInt(document.getElementById("valor" + i).value);
        valores.push(valor);
    }

    valores.sort(function(a, b) {
        return b - a;
    });

    document.getElementById("resultado").innerHTML = "Valores em ordem decrescente: " + valores.join(", ");
}

function transformarNumero() {
    var numero = parseInt(document.getElementById("numero").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerHTML = "O número transformado é ímpar: " + (numero + 1);
    } else {
        document.getElementById("resultado").innerHTML = "O número transformado é par: " + (numero - 1);
    }
}
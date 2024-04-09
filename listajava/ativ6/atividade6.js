function verificarLetra() {
    var letra = document.getElementById("letra").value.toLowerCase();

    if (letra.length === 1 && /[a-z]/.test(letra)) {
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            document.getElementById("resultado").innerHTML = "A letra digitada é uma vogal.";
        } else {
            document.getElementById("resultado").innerHTML = "A letra digitada é uma consoante.";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, digite apenas uma letra do alfabeto.";
    }
}
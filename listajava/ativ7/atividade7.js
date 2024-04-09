function mostrarPreco() {
    var select = document.getElementById("sabor");
    var preco = 0;

    switch (select.value) {
        case "chocolate":
            preco = 1.50;
            break;
        case "morango":
        case "creme":
            preco = 2.50;
            break;
        case "manga":
            preco = 3.20;
            break;
        case "melancia":
            preco = 3.40;
            break;
        case "vanilla":
            preco = 3.00;
            break;
        case "ceu_azul":
            preco = 3.60;
            break;
        case "brownie":
            preco = 4.00;
            break;
        case "hawaiano":
            preco = 5.00;
            break;
        default:
            preco = 0;
    }

    document.getElementById("preco").innerHTML = "Preço: R$ " + preco.toFixed(2);
}
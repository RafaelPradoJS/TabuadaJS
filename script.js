document.getElementById("calcular").addEventListener("click", function() {
    var numero = Number(document.getElementById("numero").value);
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa resultados anteriores

    if (!isNaN(numero)) {
        var tabuada = "<h2>Tabuada de " + numero + "</h2><ul>"; // Inicia a tabuada

        for (var i = 1; i <= 10; i++) {
            var resultado = numero * i;
            tabuada += "<li>" + numero + " x " + i + " = " + resultado + "</li>"; // Adiciona cada linha da tabuada
        }

        tabuada += "</ul>"; // Fecha a lista
        resultadoDiv.innerHTML = tabuada; // Exibe a tabuada
    } else {
        resultadoDiv.innerHTML = "<p>Por favor, insira um número válido.</p>"; // Mensagem de erro
    }
});
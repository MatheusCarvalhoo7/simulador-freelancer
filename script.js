const calcularTotal = () => {

    let total = 0;

    let servicos = document.querySelectorAll("input[type=checkbox]");

    servicos.forEach(servico => {

        if (servico.checked) {
            total += parseFloat(servico.value);
        }

    });

    document.getElementById("total").innerText = total;

    document.querySelector(".botao").onclick = () => {
        alert("Orçamento gerado com sucesso!");
    };
}
const botao = document.querySelector("#calcular");

const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const distancia = Number(document.querySelector("#distancia").value);

    const consumo = Number(document.querySelector("#consumo").value);

    const preco = Number(document.querySelector("#preco").value);

    const litros_gastos = distancia / consumo;

    const custoIda = litros_gastos * preco;

    const custoIdaVolta = custoIda * 2;

    saida.textContent = "Litros Gastos " + litros_gastos.toFixed(2)
        + "\nCusto da Ida R$ " + custoIda.toFixed(2)
        + "\nCusto da Ida e Volta R$ " + custoIdaVolta.toFixed(2);
};
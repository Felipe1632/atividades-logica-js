const botao = document.querySelector("#calcular");

const saida = document.querySelector("#resultado");

botao.onclick = () => {
    const valor_conta = Number(document.querySelector("#valor_conta").value);

    const num_pessoas = Number(document.querySelector("#num_pessoas").value);

    const taxa_servico = valor_conta * 0.10;

    const valor_total = valor_conta + taxa_servico;

    const valor_dividido = valor_total / num_pessoas;

    saida.textContent = "Taxa de Serviço(10%) R$ " + taxa_servico.toFixed(2)
        + "\nValor Total R$ " + valor_total.toFixed(2)
        + "\nValor Dividido R$ " + valor_dividido.toFixed(2);
};
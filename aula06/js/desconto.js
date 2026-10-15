const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");


botao.onclick = () => {

    const preco = Number(document.querySelector("#preco").value);
    const percentual = Number(document.querySelector("#percentual").value);

    const desconto = valorDoDesconto(preco, percentual);
    const precoFinal = aplicarDesconto(preco, percentual);

    // Mostra o desconto e o preço final na tela
    saida.textContent = "Desconto R$ " + desconto.toFixed(2)
        + "\nPreço Final R$ " + precoFinal.toFixed(2);
};
// Aula 06 - Exercício 3.3
// Calculando desconto e preço final

// Busca o botão de calcular na página
const botao = document.querySelector("#calcular");
// Busca o elemento onde a resposta será exibida
const saida = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
botao.onclick = () => {
    // Pega o preço informado pelo usuário e converte para número
    const preco = Number(document.querySelector("#preco").value);
    // Pega o percentual de desconto informado pelo usuário e converte para número
    const desconto = Number(document.querySelector("#desconto").value);

    // Calcula o valor do desconto em reais
    const descontoValor = preco * (desconto / 100);

    // Calcula o preço final após aplicar o desconto
    const precoFinal = preco - descontoValor;

    // Mostra o desconto e o preço final na tela
    saida.textContent = "Desconto R$ " + descontoValor.toFixed(2)
        + "\nPreço Final R$ " + precoFinal.toFixed(2);
};
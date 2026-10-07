// Aula 06 - Exercício 3.2
// Convertendo graus Celsius para Fahrenheit

// Busca o botão de converter na página
const converter = document.querySelector("#converter");
// Busca o elemento onde o resultado será exibido
const resultado = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
converter.onclick = () => {
    // Pega a temperatura em Celsius digitada pelo usuário e converte para número
    const celsius = Number(document.querySelector("#celsius").value);

    // Calcula a temperatura em Fahrenheit
    const f = celsius * 9 / 5 + 32;

    // Mostra o resultado na tela
    resultado.textContent = "Fahrenheit: " + f.toFixed(1);
};
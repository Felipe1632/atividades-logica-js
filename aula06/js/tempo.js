// Aula 06 - Exercício 4.1
// Convertendo minutos em horas e minutos

// Busca o botão de calcular na página
const calcular = document.querySelector("#calcular");
// Busca o elemento onde o resultado será exibido
const resultado = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
calcular.onclick = () => {
    // Pega o valor digitado no campo de duração e converte para número
    const duracaoMin = Number(document.querySelector("#duracao").value);

    // Calcula quantas horas completas existem nos minutos
    const resHoras = Math.floor(duracaoMin / 60);

    // Calcula os minutos restantes depois das horas completas
    const resMin = duracaoMin % 60;

    // Exibe o resultado na tela
    resultado.textContent = duracaoMin + "minutos = " + resHoras + "h e " + resMin + "min";
};
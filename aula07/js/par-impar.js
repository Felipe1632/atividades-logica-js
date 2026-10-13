// Aula 07 - Exercício 2.1

console.log("ligou");

// Busca o botão de calcular na página
const botao = document.querySelector("#calcular");
// Busca o elemento onde a resposta será exibida
const saida = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
botao.onclick = () => {

    const num = Number(document.querySelector("#num").value);

    if (num % 2 === 0) {
        saida.textContent = "O número " + num + " é Par"
        saida.className = "ok"
      } else {
        saida.textContent = "O número " + num + " é Ímpar"
        saida.className = "alerta"
      }
};

// Aula 07 - Exercício 2.1

console.log("ligou");

// Busca o botão de calcular na página
const botao = document.querySelector("#calcular");
// Busca o elemento onde a resposta será exibida
const saida = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
botao.onclick = () => {
    // Lê as duas notas digitadas pelo usuário e converte para números
    const n1 = Number(document.querySelector("#nota1").value);
    const n2 = Number(document.querySelector("#nota2").value);

    // Calcula a média das duas notas
    const media = (n1 + n2) / 2;

    if (media >= 7) {
        saida.textContent = "Aprovado com média " + media.toFixed(1)
        saida.className = "ok"
      } else {
        saida.textContent = "Reprovado com média " + media.toFixed(1)
        saida.className = "erro"
      }
};

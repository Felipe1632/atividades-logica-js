// Aula 07 - Exercício 2.1

console.log("ligou");

// Busca o botão de calcular na página
const botao = document.querySelector("#calcular");
// Busca o elemento onde a resposta será exibida
const saida = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
botao.onclick = () => {
    // Lê as duas notas digitadas pelo usuário e converte para números
    const n1 = Number(document.querySelector("#num1").value);
    const n2 = Number(document.querySelector("#num2").value);

    if(n1 > n2){
        saida.textContent = "O número " + n1 + " é maior que " + n2
        saida.className = "ok"
    } else if(n1 === n2){
        saida.textContent = "Os dois números são iguais."
        saida.className = "alerta"
    } else
        saida.textContent = "O número " + n2 + " é maior que " + n1
        saida.className = "ok"
};
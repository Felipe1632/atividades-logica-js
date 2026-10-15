// Aula 07 - Exercício 2.1

console.log("ligou");

// Busca o botão de calcular na página
const botao = document.querySelector("#calcular");
// Busca o elemento onde a resposta será exibida
const saida = document.querySelector("#resultado");

// Quando o botão for clicado, executa o código abaixo
botao.onclick = () => {

    const numero = Number(document.querySelector("#num").value);
  if(hePar(numero)){
    mostrar(`${numero} é par`, "ok");
  } else {
    mostrar(`${numero} é ímpar`, "alerta");
  }
};

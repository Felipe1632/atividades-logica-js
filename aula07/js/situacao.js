console.log("ligou");

const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {

    const n1 = Number(document.querySelector("#nota1").value);
    const n2 = Number(document.querySelector("#nota2").value);

    const media = (n1 + n2) / 2;

    if (media >= 7) {
        saida.textContent = "Média: " + media.toFixed(1) + " - Aprovado";
        saida.className = "ok";
    } else if (media >= 5 && media < 7) {
        saida.textContent = "Média: " + media.toFixed(1) + " - Recuperação";
        saida.className = "alerta";
    } else {
        saida.textContent = "Média: " + media.toFixed(1) + " - Reprovado";
        saida.className = "erro";
    }
};
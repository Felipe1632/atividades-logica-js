const campoChute = document.querySelector("#chute");
const botao = document.querySelector("#chutar");
const saida = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

botao.onclick = () => {

    const chute = Number(campoChute.value);

    if (campoChute.value === "" || chute < 1 || chute > 100) {
        saida.textContent = "Digite um número válido entre 1 e 100!";
        saida.className = "erro";
        return;
    }

    tentativas++;

    if (chute === secreto) {
        saida.textContent = `Acertou em ${tentativas} tentativa(s)!`;
        saida.className = "ok";
    } else if (chute < secreto) {
        saida.textContent = "O número secreto é MAIOR";
        saida.className = "alerta";
    } else {
        saida.textContent = "O número secreto é MENOR";
        saida.className = "alerta";
    }
};
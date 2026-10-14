const campoChute = document.querySelector("#chute");
const botao = document.querySelector("#chutar");
const saida = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1;
const maxTentativas = 7;
let tentativas = 0;
let fim = false;

console.log("Número secreto (teste):", secreto);

botao.onclick = () => {

    if (fim) {
        saida.textContent = "O jogo acabou. Aperte F5 para jogar de novo.";
        saida.className = "alerta";
        return;
    }

    const chute = Number(campoChute.value);

    if (campoChute.value === "" || chute < 1 || chute > 100) {
        saida.textContent = "Digite um número válido entre 1 e 100!";
        saida.className = "erro";
        return;
    }

    tentativas++;
    const restantes = maxTentativas - tentativas;

    if (chute === secreto) {
        saida.textContent = `Acertou em ${tentativas} tentativas!`;
        saida.className = "ok";
        fim = true;
    
    } else if (tentativas >= maxTentativas) {
        saida.textContent = `Suas ${maxTentativas} tentativas acabaram. O número era ${secreto}.`;
        saida.className = "erro";
        fim = true;
    
    } else if (chute < secreto) {
        saida.textContent = `é MAIOR. Restam ${restantes} tentativas.`;
        saida.className = "alerta";
    } else {
        saida.textContent = `é MENOR. Restam ${restantes} tentativas.`;
        saida.className = "alerta";
    }
};
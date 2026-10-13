console.log("ligou");

const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");


botao.onclick = () => {

    const campoPeso = document.querySelector("#peso");
    const campoAltura = document.querySelector("#altura");

    const peso = Number(campoPeso.value);
    const altura = Number(campoAltura.value);

    if (campoPeso.value === "" || campoAltura.value === "") {
        saida.textContent = "Preencha todos os campos!";
        saida.className = "alerta";
    
    } else if (peso <= 0 || altura <= 0) {
        saida.textContent = "Digite valores maiores que zero!";
        saida.className = "erro";
    
    } else {
        const imc = peso / (altura * altura);

        if (imc < 18.5) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " - Abaixo do Peso";
            saida.className = "alerta";
        } else if (imc >= 18.5 && imc < 25) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " - Peso Normal";
            saida.className = "ok";
        } else if (imc >= 25 && imc < 30) {
            saida.textContent = "IMC: " + imc.toFixed(1) + " - Sobrepeso";
            saida.className = "alerta";
        } else {
            saida.textContent = "IMC: " + imc.toFixed(1) + " - Obesidade";
            saida.className = "alerta";
        }
    }
};
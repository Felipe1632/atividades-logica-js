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
        const imc = calcularImc(peso, altura);
        const faixa = classificarImc(imc);
        const classe = classeDaFaixa(faixa);

    saida.textContent = `IMC: ${imc.toFixed(1)} - ${faixa}`;
    saida.className = classe;

    };
}
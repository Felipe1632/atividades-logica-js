const MENSALIDADE = 99.90;
const TAXA_MATRICULA = 50.00;
const DESCONTO = 0.10;
const MET_MUSCULACAO = 5;

function formatarValor(valor) {
    return valor.toFixed(2).replace(".", ",");
}


// DESAFIO 1 — Quanto Vou Pagar?

const Meses1 = document.querySelector("#meses1");
const Calcular1 = document.querySelector("#calcular1");
const Resultado1 = document.querySelector("#resultado1");

Calcular1.onclick = () => {

    const meses = Number(Meses1.value);

    const total = meses * MENSALIDADE;

    Resultado1.className = "resultado ok";

    Resultado1.textContent =
        `${meses} meses x R$ ${formatarValor(MENSALIDADE)} = R$ ${formatarValor(total)}`;
};


// DESAFIO 2 — Gasto Calórico

const Peso = document.querySelector("#peso");
const Minutos = document.querySelector("#minutos");
const Calcular2 = document.querySelector("#calcular2");
const Resultado2 = document.querySelector("#resultado2");

Calcular2.onclick = () => {

    const peso = Number(Peso.value);
    const minutos = Number(Minutos.value);

    const horas = minutos / 60;

    const calorias = MET_MUSCULACAO * peso * horas;

    const caloriasArredondadas = Math.round(calorias);

    Resultado2.className = "resultado ok";

    Resultado2.textContent =
        `Gasto aproximado: ${caloriasArredondadas} kcal`;
};


// DESAFIO 3 — Matrícula à Vista

const Meses3 = document.querySelector("#meses3");
const Calcular3 = document.querySelector("#calcular3");
const Resultado3 = document.querySelector("#resultado3");

Calcular3.onclick = () => {

    const meses = Number(Meses3.value);

    const valorMensalidades = meses * MENSALIDADE;

    const desconto = valorMensalidades * DESCONTO;

    const total = valorMensalidades - desconto + TAXA_MATRICULA;

    Resultado3.className = "resultado ok";

    Resultado3.innerHTML = `
        Mensalidades: R$ ${formatarValor(valorMensalidades)}<br>
        Desconto: R$ ${formatarValor(desconto)}<br>
        Taxa de matrícula: R$ ${formatarValor(TAXA_MATRICULA)}<br>
        Total: R$ ${formatarValor(total)}
    `;
};
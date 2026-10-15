const selectTipo = document.querySelector("#tipo");
const campoTemp = document.querySelector("#temp");
const converter = document.querySelector("#converter");
const resultado = document.querySelector("#resultado");

converter.onclick = () => {
    if (campoTemp.value === "") {
        resultado.textContent = "Digite um valor de temperatura!";
        resultado.className = "erro";
        return;
    }

    const valor = Number(campoTemp.value);
    const tipo = selectTipo.value;

    if (tipo === "cParaF") {
        const f = celsiusParaFahrenheit(valor);
        resultado.textContent = `${valor} °C = ${f.toFixed(1)} °F`;
    } else {
        const c = fahrenheitParaCelsius(valor);
        resultado.textContent = `${valor} °F = ${c.toFixed(1)} °C`;
    }

    resultado.className = "ok";
};
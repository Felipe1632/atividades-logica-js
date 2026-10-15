const mostrar = (mensagem, classe) => {
    const saida = document.querySelector("#resultado");
    saida.textContent = mensagem;
    saida.className = classe;
  }

  const ehPar = (num) => num % 2 === 0;

//Exercicio 2.1

const calcularMedia = (n1, n2) => {
    return (n1 + n2) / 2
  }

  //Exercicio 2.2

  const celsiusParaFahrenheit = (celcius) => {
    return (celcius * 9 / 5) + 32
  }

  const fahrenheitParaCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
};

//Exercicio 2.3

const valorDoDesconto = (preco, percentual) => {
    return preco * (percentual / 100);
}

const aplicarDesconto = (preco, percentual) => {
    return preco - valorDoDesconto(preco, percentual)
  };

//Exercicio 3.2

const calcularImc = (peso, altura) => {
    return peso / (altura * altura);
}

const classificarImc = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do Peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }

  }

const classeDaFaixa = (faixa) => {
    if (faixa === "Peso normal") {
        return "ok";
    } else if (faixa === "Sobrepeso"){
        return "alerta";
    } else {
        return "erro";
    }
};

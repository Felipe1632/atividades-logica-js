const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");
const NOTAS = [7, 5.5, 9, 4, 8, 6.5]

botao.onclick = () => {
    let texto = ""
    let soma = 0;
    let maior = NOTAS[0];
    NOTAS.forEach((nota, i) => {
      texto += "Nota " + (i + 1) + ": " + nota + "\n"
      soma += nota;

      if (nota > maior) {
        maior = nota;
    }
    })
    const media = soma / NOTAS.length;
    const relatorio = `${texto}\nSoma: ${soma.toFixed(1)}\nMédia: ${media.toFixed(1)}\nMaior nota: ${maior.toFixed(1)}`

    mostrar(relatorio, "ok");
  }
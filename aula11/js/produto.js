const botao = document.querySelector("#comprar");
const saida = document.querySelector("#resultado");

const produto = {
    nome: "Fone Bluetooth",
    preco: 149.9,
    estoque: 12

  }

  botao.onclick = () => {
    let texto = ""
    produto.estoque -= 2;

    mostrar(texto + "Total: " + produto + " Unidades", "ok")
  }


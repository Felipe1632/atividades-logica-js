const botao = document.querySelector("#adicionar");
const saida = document.querySelector("#resultado");
const campoItem = document.querySelector("#item");
const itens = []   // fora do onclick

botao.onclick = () => {
if(campoItem.value === ""){
    mostrar("Digite um item!", "erro")
} else {
  itens.push(campoItem.value)
  let texto = ""
  itens.forEach((item, i) => {
    texto += (i + 1) + ". " + item + "\n"
  })
  mostrar(texto + "Total: " + itens.length + " itens", "ok")
}
}
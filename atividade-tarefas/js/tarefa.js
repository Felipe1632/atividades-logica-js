const botao = document.querySelector("#adicionar");
const saida = document.querySelector("#resultado");
const campoTarefa = document.querySelector("#tarefa");
const tarefas = []

botao.onclick = () => {
if(campoTarefa.value === ""){
    mostrar("Digite uma tarefa", "erro")
} else {
  tarefas.push(campoTarefa.value);
  saida.innerHTML = "";
  tarefas.forEach((tarefa, i) => {
    const container = document.createElement("div");
    container.classList.add("tarefa");
    let titulo = document.createElement("p");
    titulo.textContent = (i + 1) + ". " + tarefa;
    container.append(titulo);
    saida.append(container);
  });
}
}
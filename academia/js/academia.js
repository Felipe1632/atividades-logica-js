const formulario = document.querySelector("#formulario")

formulario.onsubmit = (evento) => {

    evento.preventDefault()

    const senha = document.querySelector("#senha").value
    const confirmar = document.querySelector("#confirmar").value

    if (senha !== confirmar) {
        alert("As senhas não são iguais!")
        return
    }

    alert("Matrícula realizada com sucesso!")
}
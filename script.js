let conta = 0
let pessoas = 0
let porcentagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", ReceberValorConta)

function ReceberValorConta(evento) {
    conta = Number(evento.target.value)
}

const pessoasInput =  document.querySelector("#pessoas")
pessoasInput.addEventListener("input", ReceberQuantidadePessoas)

function ReceberQuantidadePessoas(evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    }

    else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}

const botoesGorjeta = document.querySelectorAll(".gorjeta input[type='button']")
botoesGorjeta.forEach(botao => {
    botoesGorjeta.addEventListener("click")
})

function ReceberPorcentagem() {
    console.log(evento.target.value)
}
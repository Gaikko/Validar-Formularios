const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMesseges = document.querySelectorAll(".error-messege")


form.addEventListener("submit", function (event) {
    event.preventDefault()
    resetErrors()
    validateInputs()
})

function resetErrors() {
    errorMesseges.forEach((msg) => {
        msg.innerText = ""
    })
    nome.parentElement.classList.remove("error")
    email.parentElement.classList.remove("error")
    assunto.parentElement.classList.remove("error")
    mensagem.parentElement.classList.remove("error")
}

function validateInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const assuntoValue = assunto.value.trim()
    const mensagemValue = mensagem.value.trim()

    if (nomeValue === "") {
        setError(nome, "O Nome não pode ficar vazio")
        nome.setAttribute("placeholder", "Digite seu nome...")
    }

    if (emailValue === "") {
        setError(email, "O e-mail não pode ficar vazio")
        email.setAttribute("placeholder", "Digite seu e-mail...")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "E-mail inválido!")
    }

    if (assuntoValue === "") {
        setError(assunto, "O Assunto não pode ficar vazio")
        assunto.setAttribute("placeholder", "Digite o assunto...")
    }

    if (mensagemValue === "") {
        setError(mensagem, "A Mensagem não pode ficar vazio")
    }
}

function setError(input, errorMessege) {
    const errorMessegeElement = input.nextElementSibling
    errorMessegeElement.innerText = errorMessege
    input.parentElement.classList.add("error")
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
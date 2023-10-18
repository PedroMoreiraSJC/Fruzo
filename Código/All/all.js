
const botao = document.getElementById("meuBotao");
botao.addEventListener("click", function () {
    alert("Entre em contato pelo nosso WhatsApp, temos desconto de 5%!");
});



// let fruits;

// fetch('https://www.fruityvice.com/')
//     .then(response => response.json())
//     .then(data => exibir(data))

// function exibir(dados) {
//     fruits = dados
//     console.log(fruits)
// }



// Atividade CEP
let buscarCep = document.getElementById("buscarCep");

buscarCep.onclick = () => {
    let cep = document.getElementById("cep").value;

    if (cep.length != 8) {
        alert("O CEP precisa ter 8 digitos.")
    } else {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(response => exibirInformacoesNaTela(response))
    }
}

function exibirInformacoesNaTela(informacao) {
    let rua = document.getElementById("rua");
    let bairro = document.getElementById("bairro");
    let cidade = document.getElementById("cidade");
    let estado = document.getElementById("estado");

    rua.value = informacao.logradouro;
    bairro.value = informacao.bairro; ( peso , quantidade, categoria , valor)
    cidade.value = informacao.localidade;
    estado.value = informacao.uf;
}
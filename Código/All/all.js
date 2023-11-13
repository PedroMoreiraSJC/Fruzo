
const botao = document.getElementById("alerta-botao");
botao.addEventListener("click", function () {
    alert("Para mais informações, Entre em contato pelo nosso WhatsApp, ou clique no botão 2 !");
});


// script.js
const botoes = document.querySelectorAll('.botao');
const textosHover = document.querySelectorAll('.texto-hover');

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        const textoDiv = textosHover[index];
        const isVisible = textoDiv.style.display === 'block';

        textosHover.forEach(texto => {
            texto.style.display = 'none'; // Oculta todos os textos
        });

        if (!isVisible) {
            const container = botoes[index].parentNode;
            const imageDiv = container.querySelector('.imagem-2');
            const imageBounding = imageDiv.getBoundingClientRect();

            textoDiv.style.display = 'block'; // Exibe o texto correspondente
            textoDiv.style.width = `${imageBounding.width}px`;
            textoDiv.style.height = `${imageBounding.height}px`;
        }
    });
});


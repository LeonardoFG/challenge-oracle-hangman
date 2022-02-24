var botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    console.log('Botão começar jogo foi clicado')
}

var addPalavra= document.querySelector('#nova-palavra');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra() {
    console.log('Botão Adiciona Palavra foi clicado')
}
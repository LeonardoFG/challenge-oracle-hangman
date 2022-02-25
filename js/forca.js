
let palavras = ['ALURA', 'ORACLE', 'JAVA', 'NETFLIX', 'CAMERA', 'CACHORRO', 'PASSARO', 'COMIDA', 'BEBIDA' ]


// botão inicia jogo
let botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('Botão começar jogo foi clicado');
    const sorteio = palavras[Math.floor(Math.random()*palavras.length)];
    console.log(sorteio);
    console.log(sorteio.length);
    desenhaTela();

    document.addEventListener("keypress", function(event) {
        let teclaP = event.key;
        teclaP = teclaP.toUpperCase();
        //sorteio.indexOf(teclaP);
        console.log(sorteio.indexOf(teclaP));
        console.log(teclaP);

        /*se sorteio[posição do for] for igual a teclaP (palavra que estou procurando)
        então coloco na variavel palavra[posicao do for] o conteudo de teclaP
        quando a variavel -> palavra for igual a variavel -> sorteio, a palavra foi descoberta
        */


    });
    


}


// botão adiciona palavra
let addPalavra= document.querySelector('#nova-palavra');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    let novaPalavra = document.querySelector('#input-nova-palavra').value;
    console.log('novapalavra:', novaPalavra);
    if (novaPalavra.length <= 8) {
        let result = novaPalavra.toUpperCase(); //converte para maiusculo
        palavras.push(result);
        console.log(palavras);
    } else {
        alert('a palavra deve ter no máximo 8 caracteres');
    }
}


// campo entrada palavra
//let novaPalavra = document.querySelector('#input-nova-palavra').value;
/*novaPalavra.addEventListener('click', novaPalavraa)

function novaPalavraa() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('campo Adiciona Palavra foi clicado')
}*/

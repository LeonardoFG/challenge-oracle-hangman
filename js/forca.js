// botão inicia jogo

let botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('Botão começar jogo foi clicado')
    $.get('/palavras.txt',{},function(content){
        let lines=content.split('\n');
  
         console.log(`"file.txt" contains ${lines.length} lines`)
        console.log(`First line : ${lines[0]}`)
  
  });
}


// botão adiciona palavra
let addPalavra= document.querySelector('#nova-palavra');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('Botão Adiciona Palavra foi clicado')
}


// campo entrada palavra
let novaPalavra = document.querySelector('#input-nova-palavra');
novaPalavra.addEventListener('click', novaPalavraa)

function novaPalavraa() {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('campo Adiciona Palavra foi clicado')
}

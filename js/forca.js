
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
    const el = document.getElementById("myInputID");
    el.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Enter key was hit
        }
    });

    
    /*$.get('palavras.txt',{},function(content){
        let lines=content.split('\n');
  
        console.log(`"palavras.txt" contains ${lines.length} lines`)
        console.log(`First line : ${lines[0]}`)
  
    });*/
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

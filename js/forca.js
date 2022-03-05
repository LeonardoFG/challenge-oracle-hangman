
let palavras = ['ALURA', 'ORACLE', 'JAVA', 'NETFLIX', 'CAMERA', 'CACHORRO', 'PASSARO', 'COMIDA', 'BEBIDA' ];
var vidas = 6;
let chuteCerto = [];
let chuteErro = [];
let sorteio;
let pos =[];
let posT =[];
let letraDes;
let ganhou;


// botão inicia jogo
let botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo(event) {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    console.log('Botão começar jogo foi clicado');
    sorteio = palavras[Math.floor(Math.random()*palavras.length)];
    console.log('Palavra sorteada: ', sorteio);
    console.log('Número de caracteres na palavra: ', sorteio.length);
    nTracos = sorteio.length;
    forca();
    desenhaTracos(nTracos);

    document.addEventListener("keypress", function(event) {
        let teclaP = event.key;
        teclaP = teclaP.toUpperCase();
        letraDes = teclaP;
        /*
        console.log('posição na palavra sorteada: ',sorteio.indexOf(teclaP));
        console.log('Letra digitada: ',teclaP);
        console.log('posição tecla digitada chuteCerto: ',teclaP.indexOf(chuteCerto));
        console.log('posição tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
        */
        if (vidas != 0){
            let teste = sorteio.indexOf(teclaP);
            console.log('acertou a letra:', teclaP);
            console.log('primeira posição letra acertada: ', teste);
            if (sorteio.indexOf(teclaP) >= 0){
                console.log('posição tecla digitada chuteCerto: ',chuteCerto.indexOf(teclaP));
                if (chuteCerto.indexOf(teclaP) >= 0){
                    console.log('Você já ACERTOU essa Letra!');
                    //alert('Você já ACERTOU essa Letra!');
                } else {
                    chuteCerto.push(teclaP);
                    console.log('Letras Acertadas: ', chuteCerto);
                    for (let i = 0; i < sorteio.length; i++){
                        var posi = sorteio.indexOf(teclaP, i);
                        if (posi >= 0 ){
                            i = posi;
                            desenhaLetraPos(letraDes, posi);
                            pos.push(posi);
                            posT.push(posi);
                        }
                        console.log(sorteio[i]);
                        console.log(posi);
                        console.log(pos);
                        console.log(posT);
                    }

                    pos = [];
                    if (posT.length >= sorteio.length){
                        console.log('Você Ganhou !!!')
                        //alert('Você Ganhou !!!');
                    }
                }
            } else {
                if (chuteErro.indexOf(teclaP) >= 0){
                    console.log('Você já ERROU essa Letra!');
                    //alert('Você já ERROU essa Letra!');
                } else {
                    console.log('posição tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
                    vidas = vidas - 1;
                    console.log('vidas:', vidas);
                    chuteErro.push(teclaP);
                    console.log('Letras erradas: ', chuteErro);
                    posiE = chuteErro.length;
                    desenhaLetraErro(letraDes, posiE);
                }
            }
        }
        if (vidas == 5){
            cabeca();
        }
        if (vidas == 4){
            corpo();
        }
        if (vidas == 3){
            bracoEsquerdo();
        }
        if (vidas == 2){
            bracoDireito();
        }
        if (vidas == 1){
            pernaEsquerda();
        }
        if (vidas == 0){
            pernaDireita();
            //alert('Você morreu !');
            console.log('Você morreu !');
        }
    });
}

// botão adiciona palavra
let addPalavra= document.querySelector('#nova-palavra');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra(event) {
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


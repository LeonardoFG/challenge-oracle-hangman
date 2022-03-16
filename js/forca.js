
let palavras = ['ALURA', 'ORACLE', 'JAVA', 'NETFLIX', 'CAMERA', 'CACHORRO', 'PASSARO', 'COMIDA', 'BEBIDA', 'TRICICLO', 'PATINS', 'NAVIO', 'CANOA', 'CAMELO', 'BALSA', 'FOGUETE', 'ONIBUS', 'PLANADOR', 'CARRO', 'BONDE', 'CAIAQUE', 'TANQUE', 'FERROVIA', 'TAXI', 'CAMINHAO', 'TRENO', 'ATRIZ', 'ATOR', 'ATLETA', 'PADEIRO', 'CARTEIRA', 'CARTEIRO', 'CAIXA', 'PILOTO', 'DENTISTA', 'CANTOR', 'MEDICO', 'ESCRITOR', 'YOUTUBER', 'ADVOGADO', 'ADVOGADA', 'TAXISTA', 'BIOLOGA', 'BIOLOGO', 'CHEF', 'POLICIA', 'POLICIAL', 'CORREIO', 'TELEFONE', 'CELULAR', 'LIVROS', 'JORNAL', 'RADIO', 'REVISTAS', 'INTERNET', 'ESTRELA', 'LOSANGO', 'TRAPEZIO', 'OCTAGONO', 'OVAL', 'QUADRADO', 'PARALELO', 'CIRCULO', 'HEXAGONO', 'CUNHADA','CUNHADO', 'BISNETA', 'BISNETO', 'NETA', 'NETO', 'TIA', 'TIO', 'MAE','PAI', 'FILHA', 'FILHO', 'GENRO', 'NORA', 'BISAVO', 'IRMA', 'IRMAO', 'SOBRINHA', 'SOBRINHO', 'ESPOSA', 'MARIDO', 'MUSEU', 'LER', 'MONITOR', 'MOUSE', 'TECLADO', 'MOCHILA', 'TITULO', 'RESPEITAR', 'DIREITO', 'ESPORTE', 'FISICA', 'CADERNO', 'ESCREVER', 'ESCOLA', 'FAMILIA', 'PEDAGOGO', 'PENA', 'LEXICO', 'DIRETORA', 'DIRETOR', 'LINGUA', 'CADEIRA', 'DIPLOMA', 'CULTURA', 'TEORIA', 'BIOLOGIA', 'COMPASSO', 'LAPIS', 'CANETA', 'BORRACHA', 'INOVAR', 'ARDOSIA', 'ENSINO', 'FALAR', 'CANTAR', 'PEDIR', 'CHAMAR', 'LIGAR', 'DESLIGAR', 'VOLORES', 'CARNE', 'OUVIDO', 'PERNA', 'MENTE', 'COTOVELO', 'DENTE', 'ABDOMEN', 'PELE', 'PEITO', 'MUSCULO', 'DEDO', 'CARA', 'CINTURA', 'QUADRIL', 'BIGODE', 'UNHA', 'MAO', 'SANGUE', 'ESPINHA', 'JOELHO', 'OMBRO', 'LARANJA', 'ROXO', 'VERMELHO', 'ROSA', 'BRANCO', 'PRETO', 'MARRON', 'VERDE', 'CINZA', 'CASTANHA', 'CASTANHO', 'AZUL', 'AMARELO', 'VACA', 'CISNE', 'LOBO', 'PATO', 'ARANHA', 'BARATA', 'CORVO', 'LESMA', 'BESOURO', 'PERDIZ', 'GOLFINHO', 'TIGRE', 'HAMSTER', 'BACALHAU', 'GANSO', 'FORMIGA', 'PORCO', 'ELEFANTE', 'MULA', 'GIRAFA', 'MINHOCA', 'IGUANA', 'ZEBRA', 'COBAIA', 'COALA', 'CAVALO', 'OVELHA', 'GALO', 'PRAIA', 'GATO', 'LAGARTO', 'BUFALO', 'PAPAGAIO', 'CORUJA', 'SAPO', 'CHITA', 'BOI', 'ATUM', 'GUAXINIM', 'CACATUA', 'GALINHA', 'ERVILHA', 'PERA', 'RABANETE', 'ACELGA', 'SAL', 'UVA', 'ESPINAFRE', 'LEGUMES', 'ARROZ', 'MANGA', 'CORDEIRO', 'PEIXE', 'QUEIJO', 'PEPINO', 'LENTILHA', 'BROCOLIS', 'CEREAIS', 'TOMATE', 'ESPARGOS', 'OLEO', 'CENOURA', 'GASOLINA', 'MARMELO', 'FIGO', 'TORANJA', 'BOLO', 'BATATA', 'ABACAXI', 'CEREJA', 'GROSELHA', 'MELANCIA', 'OVOS', 'NESPERA', 'CEVADA', 'VINAGRE', 'ABACATE',      ];
var vidas = 6;
let chuteCerto = [];
let chuteErro = [];
let sorteio;
let pos =[];
let posT =[];
let letraDes;
let estamosEmJogo = true;


// botão inicia jogo
let botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo(event) {
    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    //console.log('Botão começar jogo foi clicado');
    sorteio = palavras[Math.floor(Math.random()*palavras.length)];
    //console.log('Palavra sorteada: ', sorteio);
    //console.log('Número de caracteres na palavra: ', sorteio.length);
    nTracos = sorteio.length;
    estamosEmJogo = true;
    desenhaTela();
    forca();
    desenhaTracos(nTracos);

    document.addEventListener("keypress", function(event) {
        let teclaCheck = event.key;
        let letraValida = /^[a-zA-Z]+$/.test(teclaCheck);
        
        let teclaP = letraValida ? teclaCheck : '';
                
        teclaP = teclaP.toUpperCase();
        letraDes = teclaP;
        /*
        console.log('posição na palavra sorteada: ',sorteio.indexOf(teclaP));
        console.log('Letra digitada: ',teclaP);
        console.log('posição tecla digitada chuteCerto: ',teclaP.indexOf(chuteCerto));
        console.log('posição tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
        */

        if (vidas != 0 && estamosEmJogo == true && teclaP.length > 0){
            let teste = sorteio.indexOf(teclaP);
            /*console.log('acertou a letra:', teclaP);
            console.log('primeira posição letra acertada: ', teste);*/
            if (sorteio.indexOf(teclaP) >= 0){
                //console.log('posição tecla digitada chuteCerto: ',chuteCerto.indexOf(teclaP));
                if (chuteCerto.indexOf(teclaP) >= 0){
                    console.log('Você já ACERTOU essa Letra!');
                    //alert('Você já ACERTOU essa Letra!');
                } else {
                    chuteCerto.push(teclaP);
                    //console.log('Letras Acertadas: ', chuteCerto);
                    for (let i = 0; i < sorteio.length; i++){
                        var posi = sorteio.indexOf(teclaP, i);
                        if (posi >= 0 ){
                            i = posi;
                            desenhaLetraPos(letraDes, posi);
                            pos.push(posi);
                            posT.push(posi);
                        }
                        /*console.log(sorteio[i]);
                        console.log(posi);
                        console.log(pos);
                        console.log(posT);*/
                    }

                    pos = [];
                    if (posT.length >= sorteio.length){
                        console.log('Você Ganhou !!!')
                        //alert('Você Ganhou !!!');
                        estamosEmJogo = false;
                    }
                }
            } else {
                if (chuteErro.indexOf(teclaP) >= 0){
                    console.log('Você já ERROU essa Letra!');
                    //alert('Você já ERROU essa Letra!');
                } else {
                    //console.log('posição tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
                    vidas = vidas - 1;
                    //console.log('vidas:', vidas);
                    chuteErro.push(teclaP);
                    //console.log('Letras erradas: ', chuteErro);
                    posiE = chuteErro.length;
                    desenhaLetraErro(letraDes, posiE);
                }
            }
        } else {
            console.log("estou aqui no else !!")
        }
        switch (vidas) {
            case 5:
                cabeca();
                break;
            case 4:
                corpo();
                break;
            case 3:
                bracoDireito();
                break;
            case 2:
                bracoEsquerdo();
                break;
            case 1:
                pernaDireita();
                break;
            case 0:
                pernaEsquerda();
                estamosEmJogo = false;
                console.log('Você morreu !');
                break;
        }

        });
}

// botão adiciona palavra
let addPalavra= document.querySelector('#nova-palavra-btn');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra(event) {

    event.preventDefault(); //para não carregar a pagina de no após clicar e limpar os campos
    let novaPalavra = document.querySelector('#input-nova-palavra').value;
    console.log('novapalavra:', novaPalavra);

    let palavraValida = /^[a-zA-Z]+$/.test(novaPalavra);
    //onsole.log(palavraValida);
    //let result = palavraValida ? teclaCheck : '';

    if (novaPalavra.length <= 8 && palavraValida == true) {
        let result = novaPalavra.toUpperCase(); //converte para maiusculo
        palavras.push(result);
        console.log(palavras);
    } else {
        alert('a palavra deve ter no máximo 8 caracteres e não pode conter caracteres especiais ou numeros');
    }
}


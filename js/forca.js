
let palavras = ['ALURA', 'ORACLE', 'JAVA', 'NETFLIX', 'CAMERA', 'CACHORRO', 'PASSARO', 'COMIDA', 'BEBIDA', 'TRICICLO', 'PATINS', 'NAVIO', 'CANOA', 'CAMELO', 'BALSA', 'FOGUETE', 'ONIBUS', 'PLANADOR', 'CARRO', 'BONDE', 'CAIAQUE', 'TANQUE', 'FERROVIA', 'TAXI', 'CAMINHAO', 'TRENO', 'ATRIZ', 'ATOR', 'ATLETA', 'PADEIRO', 'CARTEIRA', 'CARTEIRO', 'CAIXA', 'PILOTO', 'DENTISTA', 'CANTOR', 'MEDICO', 'ESCRITOR', 'YOUTUBER', 'ADVOGADO', 'ADVOGADA', 'TAXISTA', 'BIOLOGA', 'BIOLOGO', 'CHEF', 'POLICIA', 'POLICIAL', 'CORREIO', 'TELEFONE', 'CELULAR', 'LIVROS', 'JORNAL', 'RADIO', 'REVISTAS', 'INTERNET', 'ESTRELA', 'LOSANGO', 'TRAPEZIO', 'OCTAGONO', 'OVAL', 'QUADRADO', 'PARALELO', 'CIRCULO', 'HEXAGONO', 'CUNHADA','CUNHADO', 'BISNETA', 'BISNETO', 'NETA', 'NETO', 'TIA', 'TIO', 'MAE','PAI', 'FILHA', 'FILHO', 'GENRO', 'NORA', 'BISAVO', 'IRMA', 'IRMAO', 'SOBRINHA', 'SOBRINHO', 'ESPOSA', 'MARIDO', 'MUSEU', 'LER', 'MONITOR', 'MOUSE', 'TECLADO', 'MOCHILA', 'TITULO', 'RESPEITAR', 'DIREITO', 'ESPORTE', 'FISICA', 'CADERNO', 'ESCREVER', 'ESCOLA', 'FAMILIA', 'PEDAGOGO', 'PENA', 'LEXICO', 'DIRETORA', 'DIRETOR', 'LINGUA', 'CADEIRA', 'DIPLOMA', 'CULTURA', 'TEORIA', 'BIOLOGIA', 'COMPASSO', 'LAPIS', 'CANETA', 'BORRACHA', 'INOVAR', 'ARDOSIA', 'ENSINO', 'FALAR', 'CANTAR', 'PEDIR', 'CHAMAR', 'LIGAR', 'DESLIGAR', 'VOLORES', 'CARNE', 'OUVIDO', 'PERNA', 'MENTE', 'COTOVELO', 'DENTE', 'ABDOMEN', 'PELE', 'PEITO', 'MUSCULO', 'DEDO', 'CARA', 'CINTURA', 'QUADRIL', 'BIGODE', 'UNHA', 'MAO', 'SANGUE', 'ESPINHA', 'JOELHO', 'OMBRO', 'LARANJA', 'ROXO', 'VERMELHO', 'ROSA', 'BRANCO', 'PRETO', 'MARRON', 'VERDE', 'CINZA', 'CASTANHA', 'CASTANHO', 'AZUL', 'AMARELO', 'VACA', 'CISNE', 'LOBO', 'PATO', 'ARANHA', 'BARATA', 'CORVO', 'LESMA', 'BESOURO', 'PERDIZ', 'GOLFINHO', 'TIGRE', 'HAMSTER', 'BACALHAU', 'GANSO', 'FORMIGA', 'PORCO', 'ELEFANTE', 'MULA', 'GIRAFA', 'MINHOCA', 'IGUANA', 'ZEBRA', 'COBAIA', 'COALA', 'CAVALO', 'OVELHA', 'GALO', 'PRAIA', 'GATO', 'LAGARTO', 'BUFALO', 'PAPAGAIO', 'CORUJA', 'SAPO', 'CHITA', 'BOI', 'ATUM', 'GUAXINIM', 'CACATUA', 'GALINHA', 'ERVILHA', 'PERA', 'RABANETE', 'ACELGA', 'SAL', 'UVA', 'ESPINAFRE', 'LEGUMES', 'ARROZ', 'MANGA', 'CORDEIRO', 'PEIXE', 'QUEIJO', 'PEPINO', 'LENTILHA', 'BROCOLIS', 'CEREAIS', 'TOMATE', 'ESPARGOS', 'OLEO', 'CENOURA', 'GASOLINA', 'MARMELO', 'FIGO', 'TORANJA', 'BOLO', 'BATATA', 'ABACAXI', 'CEREJA', 'GROSELHA', 'MELANCIA', 'OVOS', 'NESPERA', 'CEVADA', 'VINAGRE', 'ABACATE',      ];
var vidas = 6;
let chuteCerto = [];
let chuteErro = [];
let sorteio;
let pos =[];
let posT =[];
let letraDes;
let estamosEmJogo = true;


// bot??o inicia jogo
let botaoIniciar = document.querySelector('#iniciar-jogo');
botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo(event) {
    event.preventDefault(); //para n??o carregar a pagina de no ap??s clicar e limpar os campos
    //console.log('Bot??o come??ar jogo foi clicado');
    sorteio = palavras[Math.floor(Math.random()*palavras.length)];
    //console.log('Palavra sorteada: ', sorteio);
    //console.log('N??mero de caracteres na palavra: ', sorteio.length);
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
        console.log('posi????o na palavra sorteada: ',sorteio.indexOf(teclaP));
        console.log('Letra digitada: ',teclaP);
        console.log('posi????o tecla digitada chuteCerto: ',teclaP.indexOf(chuteCerto));
        console.log('posi????o tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
        */

        if (vidas != 0 && estamosEmJogo == true && teclaP.length > 0){
            let teste = sorteio.indexOf(teclaP);
            /*console.log('acertou a letra:', teclaP);
            console.log('primeira posi????o letra acertada: ', teste);*/
            if (sorteio.indexOf(teclaP) >= 0){
                //console.log('posi????o tecla digitada chuteCerto: ',chuteCerto.indexOf(teclaP));
                if (chuteCerto.indexOf(teclaP) >= 0){
                    console.log('Voc?? j?? ACERTOU essa Letra!');
                    //alert('Voc?? j?? ACERTOU essa Letra!');
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
                        console.log('Voc?? Ganhou !!!')
                        //alert('Voc?? Ganhou !!!');
                        estamosEmJogo = false;
                    }
                }
            } else {
                if (chuteErro.indexOf(teclaP) >= 0){
                    console.log('Voc?? j?? ERROU essa Letra!');
                    //alert('Voc?? j?? ERROU essa Letra!');
                } else {
                    //console.log('posi????o tecla digitada chuteErro: ',teclaP.indexOf(chuteErro));
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
                console.log('Voc?? morreu !');
                break;
        }

        });
}

// bot??o adiciona palavra
let addPalavra= document.querySelector('#nova-palavra-btn');
addPalavra.addEventListener('click', adicionaPalavra);

function adicionaPalavra(event) {

    event.preventDefault(); //para n??o carregar a pagina de no ap??s clicar e limpar os campos
    let novaPalavra = document.querySelector('#input-nova-palavra').value;
    let result = novaPalavra.toUpperCase(); //converte para maiusculo
    console.log('novapalavra:', result);

    let palavraValida = /^[A-Z]+$/.test(result);
    //console.log(palavraValida);
    //let result = palavraValida ? teclaCheck : '';
    let jaExiste = (palavras.indexOf(result));
    console.log('valor ja existe: ', jaExiste);

    if (novaPalavra.length >= 3 && novaPalavra.length <= 8 && palavraValida == true && jaExiste == -1) {
        palavras.push(result);
        console.log(palavras);
        console.log('palavra adicionada com sucesso !')
    } else if (palavraValida == false ) {
        alert(' A palavra n??o pode conter caracteres especiais ou numeros');
    } else if (novaPalavra.length > 8) {
        alert('A palavra deve conter at?? 8 caracteres');
    } else if (novaPalavra.length <= 3) {
        alert('A palavra deve conter pelo menos 3 caracteres');
    } else if ( jaExiste >= 0){
        alert('A palavra j?? existe na lista de palavras ');
    } 

}


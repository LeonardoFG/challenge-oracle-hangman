
var tela = document.querySelector('canvas');
console.log('tela:', tela);
var pincel = tela.getContext('2d');


var xBoneco = 270; 
var yBoneco = 70;

var tamanhoLetra = 30;
var espaco = 10;
var xLetra = 200;
var yLetra = 430;

function desenhaTela() {
    //retângulo verde
    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 400, 600);
}

function desenhaLetraPos(letraDes, posi){
    pincel.fillStyle = 'black';
    pincel.font = '30px currier';
    pincel.fillText(letraDes, ((posi + 1)*tamanhoLetra)+espaco, yLetra-5);
}

function desenhaLetraErro(letraDes, posiE){
    pincel.fillStyle = 'red';
    pincel.font = '30px currier';
    pincel.fillText(letraDes, ((posiE + 1)*tamanhoLetra)+espaco, yLetra+60);
}

function retForca(){
    pincel.fillStyle = 'black';
    pincel.strokeRect(73, 1, 264, 360);
}

function winCabeca() {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(xBoneco, yBoneco, 31.5, 0, Math.PI * 2, true); // cabeça
    pincel.moveTo((xBoneco + 17.55), yBoneco);
    pincel.arc(xBoneco, yBoneco, 17, 0, Math.PI, false);  // boca
    pincel.moveTo((xBoneco - 7.22), (yBoneco - 13));
    pincel.arc((xBoneco - 9.45), (yBoneco - 13), 3, 0, Math.PI * 2, true);  // olho esquerdo
    pincel.moveTo((xBoneco + 13.88), (yBoneco - 13));
    pincel.arc((xBoneco + 11.22), (yBoneco - 13), 3, 0, Math.PI * 2, true);  // olho direito
    pincel.stroke();
}

function cabeca() {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(xBoneco, yBoneco, 31.5, 0, Math.PI * 2, true); // cabeça
    pincel.stroke();
}

//retForca();

function corpo(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco +0.22), (yBoneco + 166));
    pincel.stroke();
}


function bracoEsquerdo(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco - 34.78), (yBoneco + 96.5));
    pincel.stroke();
}


function bracoDireito(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco + 34.78), (yBoneco + 96.5));
    pincel.stroke();
}


function pernaEsquerda(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco + 166));
    pincel.lineTo((xBoneco - 34.78), (yBoneco + 231));
    pincel.stroke();
}


function pernaDireita(){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco + 166));
    pincel.lineTo((xBoneco + 34.78), (yBoneco + 231));
    pincel.stroke();
}

//cabeca();
//corpo();
//bracoDireito();
//bracoEsquerdo();
//pernaDireita();
//pernaEsquerda();

function forca() {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco -31.5));
    pincel.lineTo((xBoneco +0.22), (yBoneco - 70));
    pincel.lineTo(100, (yBoneco - 70));
    pincel.lineTo(100, 330);
    pincel.moveTo(83, 330);
    pincel.lineTo(320, 330);
    pincel.stroke();
}

//forca();

function desenhaTracos(nTracos){
    pincel.fillStyle = 'black';
    pincel.beginPath();
    //console.log('desenhaTracos');
    for (let i = 1; i < (nTracos + 2); i++) {
        posLetra = (i * tamanhoLetra);
        pincel.lineTo(posLetra, yLetra);
        posLetra = posLetra + espaco;
        pincel.moveTo(posLetra, yLetra);
        pincel.stroke();
        //console.log(posLetra);
        //console.log(i);
    }

}
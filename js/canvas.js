
var tela = document.querySelector('canvas');
console.log('tela:', tela);
var pincel = tela.getContext('2d');

var xBoneco = 310; 
var yBoneco = 70;

function desenhaTela() {
    //retângulo verde
    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 800, 1200);
}

function desenhaLetraPos(letraDes){
    pincel.fillStyle = 'red';
    //pincel.fillRect(0, 0, 80, 80);

    //var ctx = document.getElementById('canvas').getContext('2d');
    pincel.font = '48px serif';
    pincel.fillText(letraDes, 10, 50);
}

function retForca(){
    pincel.fillStyle = 'black';
    pincel.strokeRect(103, 1, 294, 360);
}

function winCabeca() {
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.arc(xBoneco, yBoneco, 31.5, 0, Math.PI * 2, true); // Outer circle
    pincel.moveTo((xBoneco + 17.55), yBoneco);
    pincel.arc(xBoneco, yBoneco, 17, 0, Math.PI, false);  // Mouth (clockwise)
    pincel.moveTo((xBoneco - 7.22), (yBoneco - 13));
    pincel.arc((xBoneco - 9.45), (yBoneco - 13), 3, 0, Math.PI * 2, true);  // Left eye
    pincel.moveTo((xBoneco + 13.88), (yBoneco - 13));
    pincel.arc((xBoneco + 11.22), (yBoneco - 13), 3, 0, Math.PI * 2, true);  // Right eye*/
    pincel.stroke();
}

function cabeca() {
    pincel.beginPath();
    pincel.arc(xBoneco, yBoneco, 31.5, 0, Math.PI * 2, true); // Outer circle
    pincel.stroke();
}

//retForca();

function corpo(){
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco +0.22), (yBoneco + 166));
    pincel.stroke();
}


function bracoEsquerdo(){
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco - 34.78), (yBoneco + 96.5));
    pincel.stroke();
}


function bracoDireito(){
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco +31.5));
    pincel.lineTo((xBoneco + 34.78), (yBoneco + 96.5));
    pincel.stroke();
}


function pernaEsquerda(){
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco + 166));
    pincel.lineTo((xBoneco - 34.78), (yBoneco + 231));
    pincel.stroke();
}


function pernaDireita(){
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

function forca(){
    pincel.beginPath();
    pincel.moveTo((xBoneco +0.22), (yBoneco -31.5));
    pincel.lineTo((xBoneco +0.22), (yBoneco - 70));
    pincel.lineTo(170, (yBoneco - 70));
    pincel.lineTo(170, 360);
    pincel.moveTo(103, 360);
    pincel.lineTo(400, 360);
    //pincel.strokeRect(103, 1, 294, 360);
    pincel.stroke();
}

forca();
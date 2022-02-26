
var tela = document.querySelector('canvas');
console.log('tela:', tela);
var pincel = tela.getContext('2d');

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
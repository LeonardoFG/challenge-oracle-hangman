
var tela = document.querySelector('canvas');
console.log('tela:', tela);
var pincel = tela.getContext('2d');

function desenhaTela() {
        //retângulo verde
        pincel.fillStyle = 'grey';
        pincel.fillRect(0, 0, 800, 1200);
}
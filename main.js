function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function (){
        tocaSom;
    }
    contador += 1;
    console.log(contador);
}